import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"
import TopBar from "../components/TopBar"

export default function DashboardLayoutAdmin() {
  return (
    <div >
      <SideBar role="admin" />
      
      <div className="ml-0 md:ml-56 ">
        
        <div className=" fixed top-0 w-full z-40">
          <TopBar />
        </div>
        
        <main className="p-6 bg-gray-50 min-h-screen mt-12">
          <Outlet />
        </main>
      </div>

    </div>
  )
}
