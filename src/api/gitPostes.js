import axios from "./axios"

export const get= async(setPostes)=>{
    const res=  await  axios.get('/postes')
    setPostes(res.data)
    // return res
}