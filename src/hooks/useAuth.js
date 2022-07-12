import { useContext } from "react";
import AuthContext from "../context/AuthpProvider";


const useAuth=()=>{
    return useContext(AuthContext)
}

export default useAuth