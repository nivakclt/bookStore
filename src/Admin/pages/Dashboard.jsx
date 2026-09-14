import AdminHeader from "./components/AdminHeader";
import Footer from "../../User/pages/components/Footer";
import AdminSidebar from "./components/AdminSidebar";
import { FaBook,FaUserCheck,FaUser } from "react-icons/fa";
function Dashboard() {
  return (
    <>
      <AdminHeader />
      {/* Dashboard */}
      <div className="w-full">
        <div className="w-full h-full grid sm:grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-3">
            <AdminSidebar />
          </div>
          <div className="md:col-span-9">
            <div className="grid md:grid-cols-3 gap-2 m-2">
              <div className="bg-violet-600 text-white p-10 rounded-lg shadow-lg">
                <FaBook/>
                <h3 className="text-lg font-medium">Total Books</h3>
                <p className="text-3xl font-bold mt-2">100+</p>
                              </div>

              <div className="bg-yellow-500 text-white p-10 rounded-lg shadow-lg">
                 <FaUserCheck/>
                <h3 className="text-lg font-medium">Total Users</h3>
                <p className="text-3xl font-bold mt-2">100+</p>
              </div>

              <div className="bg-green-500 text-white p-10 rounded-lg shadow-lg">
                <FaUser/>
                <h3 className="text-lg font-medium">Total Employees</h3>
                <p className="text-3xl font-bold mt-2">100+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
