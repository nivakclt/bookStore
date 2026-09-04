 import Header from "./components/Header"
 import Footer from "./components/Footer"
 import { GiHamburgerMenu } from "react-icons/gi"
function Books() {
  return (
    <>
      <Header />
      {/* booklist */}
      <div className='w-full py-10 px-6'>
        <h1 className='text-4xl text-center font-light mb-6'>Collections</h1>
        <div className='flex justify-center mb-9 '>
        <input type="text" placeholder='Enter Title to Search' className='px-5 py-2 outline-1 w-[50%] rounded-full border border-gray-300'/>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-12'>
          <div className='col-span-2'>
            <div className='flex justify-between'>
              <h1 className='text-xl'>Filters</h1>
              <GiHamburgerMenu className='text-xl'/>
            </div>
            <div className='my-3'>
              <label>
                <input type='radio' name='' id=''/>{' '}No-Filter
              </label>
            </div>
        </div>

<div className='col-span-10 py-5'>
  <div className='w-full flex flex-wrap justify-around'>
    {/* card */}
    <div clasName="w-64">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA539xYtxbtfoXg1yG4tsKK04wyVfkZfCY6LQHQeYFRV0oc6u_E1GZKaV5&s=10"
                    alt="Harry Potter" className='h-80 w-full object-cover rounded-lg'/>
                    <h1 className='text-center my-2'>Harry Potter</h1>
                    <h1 className='bg-black text-white rounded-lg text-center'>$19.99</h1>
                  </div>
  </div>
          
        </div>

      </div>
      </div>  
      <Footer/>
    </>
  )
}

export default Books