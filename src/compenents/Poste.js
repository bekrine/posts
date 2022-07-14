import React from 'react'
import {getOnePost} from '../api/gitPostes'

function Poste({item,index}) {
  return (
    <div 
    onClick={()=>getOnePost(item._id)}
     className='w-10/12 mx-auto my-10 border-4 ' 
     key={index}>
    <h1 className='relative left-[50%] text-2xl'>post by </h1>
    <div className='mt-2'>
        <h2 className='m-2'>{item.title}</h2>
        <p className='m-2'> {item.content}</p>    
    </div>
</div>
  )
}

export default Poste