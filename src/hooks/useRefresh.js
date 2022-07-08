import axios from "../api/axios" 

function useRefresh() {

    const refresh=async()=>{
        const respance=axios.get("/refresh",{
            withCredentials:true
        })
    }
  return refresh
}

export default useRefresh