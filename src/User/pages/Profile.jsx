import Header from './components/Header'
import Footer from './components/Footer'
import { FaRegEdit } from 'react-icons/fa'

import Profileupdate from './components/Profileupdate'
import { useState } from 'react'

function Profile() {

  const[sidebar,setSidebar]=useState(false)

  return (
    <>
    <div className='relative'>
    <Header/>
    {/* profile */}
    {
      sidebar &&
      <Profileupdate/>

    }
    <div className='w-full'>
      <div className='h-[30vh] bg-gray-900 relative'>
        <div className='absolute -bottom-20 left-10'>
  <img
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqtlkSQY2nHMqvo2jzxpJyqc2at2TiMASzrAqXrXBXw&s=10'
    alt='Profile Image'
    className='w-40 h-40 rounded-full object-cover border-4 border-white'
  />
</div>
      </div>

      <div className='px-10'>
        <h1 className='mt-35 font-bold'>Username</h1>
        <div className='grid grid-cols-2'>
          <div>
            <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              
          </div>
          <div className='flex justify-end'>
                <button className='self-start p-3 bg-gray-900 text-white rounded-lg flex gap-2 items-center' onClick={()=>setSidebar(!sidebar)}>
                  Edit
                  {' '}<FaRegEdit/>

                </button>
              </div>
        </div>
      </div>
    </div>
    
    <div>
      
    </div>
    </div>
    <Footer/>
    
    </>
    
  )
}

export default Profile