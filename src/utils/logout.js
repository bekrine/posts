import axios from "../api/axios"
import {deleteLocalStorege} from './localStorege'

export  const logout=async()=>{
 const res =await axios.post('/logout',null,{
    withCredentials: true
 })
    if(res.status === 204){
        deleteLocalStorege()
    }
 console.log(res)

}