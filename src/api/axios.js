import axios from "axios";
const BASE_URL='http://localhost:5000'


export default axios.create({
    baseURL:BASE_URL
})


export const axiosPrivet=axios.create({
    baseURL:BASE_URL,
        Headers:{'Content-Type':'application/json'},
        withCredentails:true
    
})