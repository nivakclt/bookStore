import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import Footer from "../../User/pages/components/Footer";

import { FaRegEdit } from "react-icons/fa";

function Settings() {
  return (
    <>
      <AdminHeader />
      {/* Dashboard */}
      <div className="w-full">
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-3">
            <AdminSidebar />
          </div>
          <div className="md:col-span-9">
            <h1 className="text-3xl p-4 my-3 text-center">Admin Settings</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <p className="text-justify p-3">
                  The Admin Settings panel serves as the central control hub for
                  managing and customizing the bookstore platform. From this
                  section, administrators can configure store information,
                  update branding elements, manage account and security
                  preferences, control notifications, and adjust pla tform-wide
                  settings. It provides a secure and organized environment for
                  maintaining system functionality, ensuring smooth operations,
                  and delivering a consistent user experience. Administrators
                  can update bookstore details such as the store name, conta ct
                  information, logo, and business profile while also managing
                  security features including password updates and account
                  protection settings. The settings area may include options for
                  notification management, user and role administration, content
                  preferences, and future system enhancements. By centralizing
                  these controls, the Admin Settings page helps maintain
                  platform integrity, improve operational efficiency, and ensure
                  that the bookstore remains aligned with organizational
                  requirements and user expectations.
                </p>
              </div>

              <div className="h-full bg-gray-900 p-4 mx-2 rounded-lg">
                <div className="flex flex-col items-center">
                  <label htmlFor="profpic" className="relative">
                    <input type="file" id="profpic" className="hidden" />

                    <img
                      src="https://cdn-icons-png.flaticon.com/512/12225/12225935.png"
                      alt="logo"
                      className="h-62.5"
                    />
                    <div className="absolute p-3 bg-yellow-400 text-white bottom-3 right-8 rounded">
                      <FaRegEdit />
                    </div>
                  </label>

                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full bg-white border my-3 p-2 rounded"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-white border my-3 p-2 rounded"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full bg-white border my-3 p-2 rounded"
                  />

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
      <Footer />
    </>
  );
}

export default Settings;
