import React, { useState } from 'react'


function SignUp() {
  const [data,setData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    Rpassword:''
  })
  const getData=(e)=>{
    const {name,value}=e.target

    setData({...data,
              [name]:value
            })
            }
            console.log(data)
  return (

    <form className='w-10/12 mx-auto my-10'>
     <h1 className='relative left-[50%] text-2xl'>SignUp</h1>
       <div className='m-6 flex flex-col'>
       <label htmlFor='firstName'>firstName</label>
              <input 
              required
              autoComplete='off'
              value={data.firstName}
              onChange={(e)=>getData(e)}
              className='shadow-lg' 
              name='firstName' 
              type='text' />
       </div>
       <div className='m-6 flex flex-col'>
       <label htmlFor='lastName'>LastName</label>
               <input 
              required
              autoComplete='off'
               value={data.lastName}
               onChange={(e)=>getData(e)}
               className='shadow-lg' 
               name='lastName'
                type='text' />
       </div>
       <div className='m-6 flex flex-col'>
       <label htmlFor='email'>email</label>
               <input
               required
               autoComplete='off'
               value={data.email}
               onChange={(e)=>getData(e)}
                className='shadow-lg' 
                name='email'
                 type='email' />
       </div>
       <div className='m-6 flex flex-col'>
       <label htmlFor='password'>password</label>
                 <input 
                 required
                 autoComplete='off'
                 value={data.password}
                 onChange={(e)=>getData(e)}
                 className='shadow-lg'
                  name='password'
                   type='password' />
       </div>
       <div className='m-6 flex flex-col'>
       <label htmlFor='Rpassword'>reppet password</label>
                  <input 
                  required
                  autoComplete='off'
                  value={data.Rpassword}
                 onChange={(e)=>getData(e)}
                  className='shadow-lg' 
                  name='Rpassword' 
                  type='password' />
       </div>
       <button className='bg-stone-500 text-white m-4	 w-full' >register</button>
   </form>     
  )
}

export default SignUp