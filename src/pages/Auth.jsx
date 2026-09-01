import {FaRegUserCircle} from "react-icons/fa"
function Auth () {
  return (
    <>
    <div className='w-full min-h-screen bg-[url("https://thumbs.dreamstime.com/b/blur-background-book-shelf-library-space-filled-books-spate-green-plants-enhancing-serene-reading-environment-337185890.jpg")]'>
      <div className=' flex flex-col items-center h-full justify-center gap-4'>
        <h1 className='text-center text-5xl font-extrabold text-white'>BOOKSTORE</h1>
        <div className='bg-gray-700 text-white  p-10 w-[50%]'>
          <p className='flex justify-center'>
            <FaRegUserCircle className='text-5xl'/> 
          </p>
          <h1 className='text-center text-2xl font-bold'>Login</h1>
        
          <div className='my-10 border-b-2'>
            <input type='text' placeholder='Enter Email' className='bg-white text-black w-full p-2 rounded-lg'/>
            <input type='password' placeholder='Enter Password' className=' bg-white text-black w-full p-2 rounded-lg my-4'/>
            <div className='flex justify-center '>
              <p className='text-amber-500'>*Never share password with others</p>
              <a href='#' className='text-blue-400'>Forgot Password</a>
            </div>
            <button className='p-3 mb-3 w-full rounded-md bg-amber-100 text-black'>Login</button>
            {/* google auth */}
            <div>

            </div>
            <div className='flex justify-center gap-2'>
              <p>Are you a new User</p>
              <p className='text-blue-400 underline cursor-pointer'>Register Here!</p>
            </div>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Auth 