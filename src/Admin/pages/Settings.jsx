import AdminHeader from "./components/AdminHeader"
import AdminSidebar from "./components/AdminSidebar"
import Footer from "../../User/pages/components/Footer"

import { FaRegEdit } from "react-icons/fa"

function Settings() {
  return (
    <>
    <AdminHeader/>
    {/* Dashboard */}
    <div className="w-full">
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-3">
          <AdminSidebar/>
        </div>
        <div className="md:col-span-9">
          <h1 className="text-3xl p-4 my-3 text-center">Admin Settings</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <p  className="text-justify p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eaque consectetur magnam non ipsa consequuntur fugit. Quos laborum, at perferendis quis amet fugit, id alias labore velit eveniet, nisi omnis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minus ducimus soluta obcaecati qui nihil similique. Architecto voluptates doloremque consectetur mollitia esse quas, quaerat, possimus quos atque eligendi sed sit?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo temporibus soluta vero dignissimos ullam maiores aliquam, possimus commodi exercitationem esse quasi sint dolores unde corporis. Dignissimos maxime ipsum harum iure?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ipsum doloribus ullam enim minus in! Est, molestias saepe. Velit perspiciatis nihil quo odit alias officiis odio dolorum, possimus temporibus repellat?
              </p>
            </div>

            <div className="h-full bg-gray-400 p-4 mx-2">
            <div className="flex flex-col items-center">
             <label htmlFor="profpic" className="relative">
           <input type="file" id="profpic" className="hidden" />

            <img src="https://cdn-icons-png.flaticon.com/512/12225/12225935.png" alt="logo"
                    className="h-62.5"/>
            <div className="absolute p-3 bg-yellow-400 text-white bottom-3 right-8 rounded">
        <FaRegEdit />
      </div>
    </label>
  
      <input
        type="text"
        placeholder="Username"
        className="w-full bg-white border my-3 p-2 rounded"/>
      <input
        type="password"
        placeholder="Password"
        className="w-full bg-white border my-3 p-2 rounded"/>
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full bg-white border my-3 p-2 rounded"/>

      <div className="grid grid-cols-2 gap-3">
    <button className=" bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
      RESET
    </button>

    <button className=" bg-red-600 text-white p-3 rounded hover:bg-red-700">
      UPDATE
    </button>
  </div>

  </div>
</div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Settings