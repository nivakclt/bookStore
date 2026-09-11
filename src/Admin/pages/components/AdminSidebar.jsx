import { GrResources } from "react-icons/gr"
import { IoSettings } from "react-icons/io5"
import { MdDashboard } from "react-icons/md"
import { Link } from "react-router-dom"

function AdminSidebar() {
  return (
    <>
    <div className="bg-gray-300 min-h-[75vh] flex items-center">
    <div className="flex flex-col items-center gap-3 w-full h-full ">
        <img src="https://png.pngtree.com/png-vector/20241115/ourmid/pngtree-user-icon-web-admin-profile-avatar-silver-color-style-vector-png-image_14430725.png"
         width={"65%"} className="rounded-full"/>
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <Link to={'/admin'}>
        <label htmlFor="op" className="flex justify-center items-center">
            <input type="radio" name="option" id="op"/>{' '}
            <MdDashboard/>{' '}
            Dashboard
        </label>
        </Link>
        <Link to={'/admin/resources'}>
        <label htmlFor="op" className="flex justify-center items-center">
            <input type="radio" name="option" id="op"/>{' '}
            <GrResources/>{' '}
            Resources
        </label>
        </Link>
        <Link to={'/admin/settings'}>
        <label htmlFor="op"className="flex justify-center items-center">
            <input type="radio" name="option" id="op"/>{' '}
            <IoSettings/>{' '}
            Settings
        </label>
        </Link>
    </div>
    </div>
    </>
  )
}

export default AdminSidebar