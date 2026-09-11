import AdminHeader from "./components/AdminHeader"
import Footer from "../../User/pages/components/Footer"
import AdminSidebar from "./components/AdminSidebar"
function Dashboard() {
  return (
    <>
    <AdminHeader/>
    {/* Dashboard */}
    <div className="w-full">
      <div className="w-full h-full grid sm:grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-3">
          <AdminSidebar/>
        </div>
        <div className="md:col-span-9">
          <h1 className="text-3xl p-4">Dashboard</h1>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Dashboard