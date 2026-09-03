import Header from './components/Header'
import Footer from './components/Footer'
import { FaRegEdit } from 'react-icons/fa'

import Profileupdate from './components/Profileupdate'
import { useState } from 'react'

function Profile() {

  const[sidebar,setSidebar]=useState(false)

  const [sellStatus,setSellStatus]=useState(true)
  const [bookStatus,setBookStatus]=useState(false)
  const [purchaseStatus,setPurchaseStatus]=useState(false)

  const trueClass='p-3 border-t-1 border-s-1 border-e-1'
  const falseClass='p-3 border-b-1'

  return (
    <>
    <div className='relative'>
    <Header/>

    {/* profile */}
    {
      sidebar &&
      <Profileupdate setSidebar={setSidebar}/>

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

    <div className='flex justify-center'>
      <div className='gap-2 mb-50'>
      <button className={sellStatus?trueClass:falseClass} onClick={() => 
        {
          setSellStatus(true)
          setBookStatus(false)
          setPurchaseStatus(false)

        }}>
        Sell Books
      </button>
       <button className={bookStatus?trueClass:falseClass} onClick={() => 
        {
          setSellStatus(false)
          setBookStatus(true)
          setPurchaseStatus(false)

        }}>
       Book Status
      </button>
      <button className={purchaseStatus?trueClass:falseClass} onClick={() => 
        {
          setSellStatus(false)
          setBookStatus(false)
          setPurchaseStatus(true)

        }}>
        Purchase History
      </button>
      {/* Main Content */}
      
      {
        sellStatus &&
        <div className='bg-gray-200'>
          <h1 className='text-2xl text-center my-2 py-3 flex justify-center'>Book Details</h1>
          <div className='grid sm:grid-cols-1 md:grid-cols-2'>
            <div className='px-2'>
            <input type='text' placeholder='Title' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
             <input type='text' placeholder='Author' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
            <input type='text' placeholder='No. of Pages' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
           <input type='text' placeholder='Image Url' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
           <input type='text' placeholder='Price' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
           <input type='text' placeholder='Discount Price' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
           <textarea name='' placeholder='Abstract' rows={'8'} id='' className='w-full p-2 bg-white rounded-sm mb-2'></textarea>
            </div>
            <div className='px-2'>
              <input type='text' placeholder='Publisher' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
              <input type='text' placeholder='Language' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
              <input type='text' placeholder='ISBN' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
              <input type='text' placeholder='Category' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
              <label htmlFor='bookimgfile' className='flex justify-center'>
                <input type='file' name='' className='hidden' id='bookimgfile'/>
                <img src='https://png.pngtree.com/png-clipart/20190921/original/pngtree-file-upload-icon-png-image_4717174.jpg' alt='bookimg' className='w-[50%]'/>

                </label>
                <div className='flex justify-between'>
                  <button className='bg-green-500 p-2 rounded-sm hover:bg-amber-800 text-white'>RESET</button>
                  <button className='bg-green-500 p-2 rounded-sm hover:bg-amber-800 text-white'>SUBMIT </button>
                  </div>

            </div>
          </div>
        </div>
      }
      {
        bookStatus &&
        <div>Book Status</div>
      }
      {
        purchaseStatus &&
        <div>Purchase History</div>
      }
      </div>
    </div>
    </div>
    <Footer/>
    
    </>
    
  )
}

export default Profile