import {axiosPrivet} from "../api/axios";
import {useEffect} from 'react'
import useRefresh from "./useRefresh";
import useAuth from "./useAuth";

const useAxiosePrivate=()=>{
    const refresh=useRefresh()
    const {auth}=useAuth()
    useEffect(()=>{
        const requestIntercept=axiosPrivet.interceptors.request.use(
            config => {
                if(!config.headers['authorization']){
                    config.headers['authorization'] = `Bearer ${auth?.accesstoken}`
                }
                return config
            },(error)=>Promise.reject(error)
        )    

        const respanceIntercept=axiosPrivet.interceptors.response.use(
            response=>response,
            async(error)=>{
                const prevRequest=error?.config;
                if(error?.response?.status === 403 && !prevRequest?.sent){
                    prevRequest.sent=true
                    const newAccessToken= await refresh()
                    prevRequest.headers['authorization']=`Bearer ${newAccessToken}`
                    return axiosPrivet(prevRequest)

                }
                return Promise.reject(error)
            }
        )
        return ()=>{
            axiosPrivet.interceptors.request.eject(requestIntercept)
            axiosPrivet.interceptors.response.eject(respanceIntercept)
        }
    },[auth,refresh])

    return axiosPrivet
}

export default useAxiosePrivate