import {FaInstagram,FaFacebook,FaTwitter,FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { useState } from 'react';


function Header() {

  const[dropdown,setDropdown]=useState(false)

  return (
    <>
   <div id='glass' className='w-full '>
<div className='p-4 flex flex-col md:flex-row items-center justify-between gap-4'>
  <img src='/bookStore.png' alt='logo' className='w-[90px] h-[90px] rounded-full'/>
            <h1 className='text-2xl font-bold' id='metallic-text'
            >BOOKSTORE</h1>
            <div className='flex items-center gap-2'>
                <FaInstagram/>
                <FaFacebook/>
                <FaTwitter/>
                <Link to={'/auth'} className=' flex items-center px-1 py-2 rounded-lg border-2 hover:bg-blue-400 hover:text-white'>
                <FaUser/>{' '}
                Login
                </Link>
            
            
            <div className='relative'>
              <button className='flex items-center border-2 px-1 py-2 rounded-lg' onClick={()=>setDropdown(!dropdown)}>
           <FaUser/>{' '}
                User{' '}
                {
                  dropdown ?
                  <FaCaretDown/>
                  :
                  <FaCaretUp/>
                }
             
              </button>
              {
                dropdown &&
                <div className='absolute rounded-sm border-2 bg-white text-black p-2'>
                  <Link to={'/profile'} className=' py-1'>Profile</Link>
                  <p className='text-red-800 py-1'>Logout</p>
                </div>
              }
              </div>
            </div>
        </div>
    </div>
<div className='w-full bg-gray-900 py-3.5 flex flex-col md:flex-row justify-center items-center text-white gap-4'>     
 <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
            <Link to={'/books'}>Books</Link>

      <Link to={'/contact'}>Contact</Link>
    </div>
    </>
  )
}

export default Header