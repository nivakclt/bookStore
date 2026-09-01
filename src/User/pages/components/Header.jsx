import {FaInstagram,FaFacebook,FaTwitter,FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div id='glass' className='w-full'>
<div className='p-4 flex flex-col md:flex-row items-center justify-between gap-4'>
  <img src='/bookStore.png' alt='logo' className='w-[90px] h-[90px] rounded-full'/>
            <h1 className='text-2xl font-bold' id='metallic-text'
            >BOOKSTORE</h1>
            <div className='flex items-center gap-2'>
                <FaInstagram/>
                <FaFacebook/>
                <FaTwitter/>
                <Link to={'/auth'} className='flex gap-1 items-center px-1 py-2 rounded-lg border-2 hover:bg-blue-400 hover:text-white'>
                <FaUser/>{' '}
                Login
                </Link>
            </div>
        </div>
    </div>
<div className='w-full bg-gray-900 py-3.5 flex flex-col md:flex-row justify-center items-center text-white gap-4'>      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
            <Link to={'/books'}>Books</Link>

      <Link to={'/contact'}>Contact</Link>
    </div>
    </>
  )
}

export default Header