import {FaRegUserCircle} from "react-icons/fa"
import {useState} from "react"

function Auth () {

  const [authStatus,setAuthStatus]=useState(false)
  return (
    <>
    <div className='w-full min-h-screen bg-[url("https://thumbs.dreamstime.com/b/blur-background-book-shelf-library-space-filled-books-spate-green-plants-enhancing-serene-reading-environment-337185890.jpg")]'
    style={{backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className=' flex flex-col items-center h-full justify-center gap-4'>
        <h1 className='text-center text-5xl font-extrabold text-white'>BOOKSTORE</h1>
        <div className='bg-gray-700 text-white  p-10 w-[50%]'>
          <p className='flex justify-center'>
            <FaRegUserCircle className='text-5xl'/> 
          </p>
          {
            authStatus ?
            <h1 className='text-center text-2xl font-bold'>Login</h1>
            :
            <h1 className='text-center text-2xl font-bold'>Register</h1>

          }
          
        
          <div className='my-10 border-b-2'>
            {
              authStatus &&
               <input type='text' placeholder='Enter email' className='bg-white text-black w-full p-2 rounded-lg'/>
              

            }
            <input type='text' placeholder='username' className='bg-white text-black w-full p-2 rounded-lg'/>
            <input type='password' placeholder='Enter Password' className=' bg-white text-black w-full p-2 rounded-lg my-4'/>
            <div className='flex justify-between '>
              <p className='text-amber-500'>*Never share password with others</p>
              {
                authStatus &&
                <a href='#' className='text-blue-400'>Forgot Password</a>

              }
              
            </div>
            {
              authStatus ?
              <button className='p-3 mb-3 w-full rounded-md bg-amber-100 text-black'>Login</button>
              :
              <button className='p-3 mb-3 w-full rounded-md bg-amber-100 text-black'>Register</button>

            }
            
            {/* google auth */}
            <div>

            </div>


            <div className='flex justify-center gap-2'>
            {
              authStatus ?
              <p>Are you a new User</p>
              :
              <p>Are you a Existing User</p>

            }
              
              <p className='text-blue-400 underline cursor-pointer' onClick={()=>setAuthStatus(!authStatus)}>Register Here!</p>
            </div>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Auth 