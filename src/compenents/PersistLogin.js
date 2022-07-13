import { Outlet } from 'react-router-dom'
import {useState,useEffect} from 'react'
import useRefresh from '../hooks/useRefresh'
import useAuth from '../hooks/useAuth'


const PersistLogin=()=>{
    const [isLoading,setIsLoading]=useState(true)
    const refresh=useRefresh()
    const {auth}=useAuth()

    useEffect(()=>{
        let isMounted=true
        const verifyRefreshToken=async()=>{
            try {
                await refresh()
            } catch (error) {
                console.log(error)
            }
            finally{
                setIsLoading(false)
            }
        }
        !auth?.accessToken ? verifyRefreshToken():setIsLoading(false)

        return ()=>isLoading=false
    },[])

    return(
        <>
        {
            isLoading ? <div>isLoading...</div>:<Outlet/>
        }
        </>
    )

}

export default PersistLogin