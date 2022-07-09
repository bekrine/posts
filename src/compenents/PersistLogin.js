import {useState,useEffect} from 'react'
import useRefresh from '../hooks/useRefresh'


const PersistLogin=()=>{
    const [isLoading,setIsLoading]=useState(true)
    const refresh=useRefresh()

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
        verifyRefreshToken()
        return ()=>isLoading=false
    },[])

    return(
        <>
        {
            isLoading ? <div>isLoading...</div>:<div>notloading...</div>
        }
        </>
    )

}

export default PersistLogin