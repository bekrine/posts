import React from 'react'
import {Link} from 'react-router-dom'
import { logout } from '../utils/logout'

function Navbar() {
  return (
    <div className='flex justify-between shadow-lg'>
        <div className='m-4'>
            <span>Name</span>
        </div>
        <div className='flex justify-between'>
            <div className='m-4'>
                <Link to='/signup'>
                Sig up
                </Link>
            </div>
            <div className='m-4'>
                <Link to='/signin'>
                Sig in
                </Link>
            </div>
            <div className='m-4'>
                <Link to='/postes'>
                posts
                </Link>
            </div>
            <div 
            className='m-4 cursor-pointer'
            onClick={()=>logout()}>
                logout
            </div>
        </div>
    </div>
  )
}

export default Navbar