import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from '../api/axios'
import {useNavigate} from 'react-router-dom'




function SignUp() {
  const REGESTER_URL='/register'
  const navigate = useNavigate()
  const [erro,setErro]=useState({
    errorExecte:false,
    message:''
  })
  const {handleChange,values,handleSubmit,handleBlur,touched,errors}=useFormik({
    initialValues:{
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      Rpassword:''
    },validationSchema:Yup.object({
      firstName:Yup.string().max(10,"Must be 1O characters or less").required('Required'),
      lastName:Yup.string().max(10,"Must be 1O characters or less").required('Required'),
      email:Yup.string().email('Invalid email address').required('Required'),
      password:Yup.string().min(4,'password must be 4 carcter').max(14,'Must be 1O characters or less').required('Required'),
      Rpassword:Yup.string().oneOf([Yup.ref('password'),null],'Password must match')
    })
    ,onSubmit:async(values)=>{

      try {
        const respance=await axios.post(REGESTER_URL,
                                        JSON.stringify(values),
                                        {
                                          headers:{'Content-Type':'application/json'},
                                          withCredentials:true
                                        })
        navigate('/signin',{replace:true})                                
      }
        
       catch (err) {
        //  if(!err?.respance){
        //    setErro('No Server Respance')
        //   console.log(erro)

        //  }else 
        if(err.response.status === 409){
          setErro({errorExecte:true,message:'email already executed'})
        }
      }
    }
  })

  return (

    <form
    onSubmit={handleSubmit}
     className='w-10/12 mx-auto my-10'>
     <h1 className='relative left-[50%] text-2xl'>SignUp</h1>
       <div className='m-6 flex flex-col'>
         {erro.errorExecte?(<div className='text-red-600 text-xl m-4'>{erro.message}</div>):null}
       <label htmlFor='firstName'>firstName</label>
              <input 
              required
              autoComplete='off'
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className='shadow-lg' 
              name='firstName' 
              type='text' />
               {touched.firstName && errors.firstName ? (
         <div className='text-red-600 text-xl'>{errors.firstName}</div>
       ) : null}
       </div>
       <div className='m-6 flex flex-col'>
       <label htmlFor='lastName'>LastName</label>
               <input 
              required
              autoComplete='off'
               value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
               className='shadow-lg' 
               name='lastName'
                type='text' />
                 {touched.lastName && errors.lastName ? (
         <div className='text-red-600 text-xl'>{errors.lastName}</div>
       ) : null}
       </div>
       <div className='m-6 flex flex-col'>
       <label htmlFor='email'>email</label>
               <input
               required
               autoComplete='off'
               value={values.email}
               onChange={handleChange}
               onBlur={handleBlur}
                className='shadow-lg' 
                name='email'
                 type='email' />
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
       <div className='m-6 flex flex-col'>
       <label htmlFor='Rpassword'>reppet password</label>
                  <input 
                  required
                  autoComplete='off'
                  value={values.Rpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className='shadow-lg' 
                  name='Rpassword' 
                  type='password' />
                   {touched.Rpassword && errors.Rpassword ? (
         <div className='text-red-600 text-xl'>{errors.Rpassword}</div>
       ) : null}
       </div>
       <button type='submit' className='bg-stone-500 text-white m-4	 w-full' >register</button>
   </form>     
  )
}

export default SignUp