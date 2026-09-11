import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import Footer from "../../User/pages/components/Footer";

import { useState } from "react";

function Resources() {
  const [toggle, setToggle] = useState(true);
  const trueStyle = "border-t-1 border-s-1 border-e-1  p-3";
  const falseStyle = "border-b-1 p-3";
  return (
    <>
      <AdminHeader />
      {/* Dashboard */}
      <div className="w-full">
        <div className="w-full h-full grid sm:grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-3">
            <AdminSidebar />
          </div>
          <div className="md:col-span-9 p-3">
            <h1 className="text-3xl text-center">Resources</h1>
            <div className="flex justify-center my-5">
              <button
                className={toggle ? trueStyle : falseStyle}
                onClick={() => setToggle(!toggle)}
              >
                Books
              </button>
              <button
                className={toggle ? falseStyle : trueStyle}
                onClick={() => setToggle(!toggle)}
              >
                Users
              </button>
            </div>
            {toggle ? 
              <div className="w-full">
                {/* books */}
                 <div className='w-full flex flex-wrap justify-around'>
    {/* card */}
    <div clasName="w-64">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA539xYtxbtfoXg1yG4tsKK04wyVfkZfCY6LQHQeYFRV0oc6u_E1GZKaV5&s=10"
                    alt="Harry Potter" className='h-80 w-full object-cover rounded-lg'/>
                    <h1 className='text-center my-2'>Harry Potter</h1>
                    <h1 className='bg-black text-white rounded-lg text-center'>$19.99</h1>
                    <button className="bg-amber-300">Approved</button>
                  </div>
  </div>
              </div>
             : 
              <div className="w-full">
                {/* users */}
                                 <div className='w-full flex flex-wrap justify-around'>
    {/* card */}
    <div clasName="w-[20rem] border p-3 bg-gray-900">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA539xYtxbtfoXg1yG4tsKK04wyVfkZfCY6LQHQeYFRV0oc6u_E1GZKaV5&s=10"
                    alt="Harry Potter" className='h-80 w-full object-cover rounded-lg'/>
                    <h1 className='text-center my-2'>User ID: 1234567890</h1>
                    <div className="flex gap-2">
                      <img src="" alt="" width={'30%'} rounded-full/>
                      <div className="flex flex-col justify-center">
                        <h1>Username</h1>
                        <h1>User Email ID</h1>
                    </div>
                      </div>
  </div>
              </div>
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Resources;
