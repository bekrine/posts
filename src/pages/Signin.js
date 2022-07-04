import React,{useState} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from '../api/axios'
import {addToLocalStorege} from '../utils/localStorege'


function Signin() {
    const SIGNIN_URL='/auth'
    const [erro,setErro]=useState({
        errorExecte:false,
        message:''
      })
    const {handleSubmit,handleBlur,handleChange,touched,errors,values}=useFormik({
        initialValues:{
            email:'',
            password:''
        },validationSchema:Yup.object({
            email:Yup.string().email('email not valide').required("email is required"),
            password:Yup.string().min(4,'password must be at least 4 carcter').required('required')
        }),onSubmit:async(values)=>{
            try {
            const res= await axios.post(SIGNIN_URL,
                                JSON.stringify(values),
                                {
                                    headers:{'Content-Type':'application/json'},
                                    withCredentials:true
                                }
                                )
                addToLocalStorege(res.data.accesToken)            
            } catch (err) {
                if(err.response.status === 401){
                    setErro({errorExecte:true,message:'not regester'})
                 }
            }
        }
    })
  return (
    <form 
    className='w-10/12 mx-auto my-10'
    onSubmit={handleSubmit}>
 <div className='m-6 flex flex-col'>
 <h1 className='relative left-[50%] text-2xl'>Signin</h1>
 {erro.errorExecte?(<div className='text-red-600 text-xl m-4'>{erro.message}</div>):null}
       <label htmlFor='email'>email</label>
               <input 
              required
              autoComplete='off'
               value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
               className='shadow-lg' 
               name='email'
                type='text' />
                 {touched.email && errors.email ? (
         <div className='text-red-600 text-xl'>{errors.email}</div>
       ) : null}
       </div>
       <div className='m-6 flex flex-col'>
       <label htmlFor='password'>password</label>
               <input 
              required
              autoComplete='off'
               value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
               className='shadow-lg' 
               name='password'
                type='password' />
                 {touched.password && errors.password ? (
         <div className='text-red-600 text-xl'>{errors.password}</div>
       ) : null}
       </div>
       <button type='submit' className='bg-stone-500 text-white m-4	 w-full'>signin</button>
    </form>
  )
}

export default Signin