import axios from "./axios"
import{useNavigate} from 'react-router-dom'



export const get= async(setPostes)=>{
    const res=  await  axios.get('/postes')
    setPostes(res.data)
    // return res
}

export const getOnePost=async(id)=>{
    // const navigate=useNavigate()
    const result=await axios.get(`/postes/${id}`)
    console.log(result.data)
    // navigate("/singelposte",{replace:true})
}