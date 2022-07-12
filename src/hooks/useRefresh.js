import axios from "../api/axios" 
import useAuth from "./useAuth"

function useRefresh() {

    const refresh=async()=>{
        const {setAuth}=useAuth()

        const respance=axios.get("/refresh",{
            withCredentials:true
        })
        setAuth(prev=>{
            return {...prev,accessToken:respance.data.accessToken}
        })
        return respance.data.accessToken
    }
  return refresh
}

export default useRefresh