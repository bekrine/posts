import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

function UpdatePost() {
    const {handleBlur,handleChange,handleSubmit,values,touched,errors}=useFormik({
        initialValues:{
            titel:'',
            content:''
        },validationSchema:Yup.object({
            titel:Yup.string().required('required'),
            content:Yup.string().min(5,'min caracter is 4').required('required')
        }),
        onSubmit:async(values)=>{
    
            try {
                
                const res= await axiosPrivet.post("/postes",
                                        JSON.stringify(values),
                                        {
                                            headers:{'Content-Type':'application/json',
                                            // authorization:`Bearer ${accesToken}`
                                        },
        
                                        }    )
                                        setPostes(res.data)
            } catch (err) {
                if(err.status === 403){
                    console.log('you are not signin ')
                }
            }
        }
    })
    
      return (
       
        <form onSubmit={handleSubmit}
         className='w-10/12 mx-auto my-10'>
    
             <h1 className='relative left-[50%] text-2xl'>Add post</h1>
           <div className='m-6 flex flex-col'>
             {/* {erro.errorExecte?(<div className='text-red-600 text-xl m-4'>{erro.message}</div>):null} */}
           <label htmlFor='titel'>titel</label>
                  <input 
                  required
                  autoComplete='off'
                  value={values.titel}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className='shadow-lg' 
                  name='titel' 
                  type='text' />
                   {touched.titel && errors.titel ? (
             <div className='text-red-600 text-xl'>{errors.titel}</div>
           ) : null}
           </div>
           <div className='m-6 flex flex-col'>
           <label htmlFor='content'>content</label>
                  <textarea 
                  style={{"resize":'none'}}
                  required
                  autoComplete='off'
                //  value={values.content}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className='shadow-lg' 
                  name='content' 
                   />
                   {touched.content && errors.content ? (
             <div className='text-red-600 text-xl'>{errors.content}</div>
           ) : null}
           </div>
           <button type='submit' className='bg-stone-500 text-white m-4	 w-full' >Add Post</button>
        </form>
      )
}

export default UpdatePost