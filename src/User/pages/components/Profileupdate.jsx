function Profileupdate({setSidebar}) {
  return (
    <>
    <div className="fixed h-screen w-screen top-0 z-1 bg-[rgba(0,0,0,0.5)]">
      <div className="w-[50vw] h-screen bg-white border-2 rounded-lg p-4">
        <div className="bg-black text-white py-7 px-5 rounded-t-lg font-bold justify-between flex">
          <h1>Edit Profile</h1>
          <button onClick={()=>{setSidebar(false)}}>X</button>
        </div>
        <div className="w-full px-5">
        <label htmlFor="fileinp" className="flex justify-center my-4 cursor-pointer">
          <input type="file" id="fileinp" className="hidden" />
          <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuYRCrIZn18jySQOEQ2C2_m-hetlO7LY0vHYXdd6Na2_BnUXexmk9fDSWC&s=10"
              alt="profile"
              className="w-32 h-32 rounded-full border-4 border-gray-300 object-cover"
            />
        </label>
    
        <input type='text' placeholder='Enter Name' className=' bg-white border w-full p-2 my-4 mb-2 rounded-lg'/>
        <input type='email' placeholder='Enter Email' className=' bg-white border w-full p-2 my-4 mb-2 rounded-lg'/>
        <input type='password' placeholder='Enter Password' className=' bg-white border w-full p-2 my-4 mb-2 rounded-lg'/>
        <input type='text' placeholder='Enter Bio' className=' bg-white border w-full p-2 my-4 mb-2 rounded-lg'/>
            <div className='flex justify-between'>
              <button className='px-3 py-2 bg-green-800 text-white rounded-lg'>Update</button>
              <button className='px-3 py-2 bg-red-800 text-white rounded-lg'>Cancel</button>
            </div>
        </div>
      </div>
    </div> 
    </>
  );
}

export default Profileupdate;