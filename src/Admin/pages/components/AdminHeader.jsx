
import { CiPower } from "react-icons/ci"
    
function AdminHeader() {
  return (
    <>
    <div className="w-full">
    <div className="w-full p-3 flex justify-between">
      <div className="flex gap-3 items-center">
        <img src="/lo.png" alt='logo' className='w-[60px]'/>
        <h1 className="text-3xl">BOOKSTORE</h1>
      </div>
      <button className="flex gap-1 items-center border rounded-lg p-3 hover:bg-black hover:text-white">
        Logout
        <CiPower/>
      </button>
    </div>

    <div className="bg-black w-full p-1.5">
      <marquee behavior='' direction=''>
    <h1 className="text-white">Welcome , Admin ! Your are set to manage and monitor the system</h1>
    </marquee>
    </div>

    </div>
    </>
  )
}

export default AdminHeader