import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"
import TopBar from "../components/TopBar"

export default function DashboardLayout() {
  return (
    <div className="flex">
      <SideBar role="admin" />
      
      <div className="flex-1 flex flex-col  ">
        
        <div className=" fixed top-0 w-full">
          <TopBar />
        </div>
        
        <main className="p-6 bg-gray-50 flex-1 bg-yellow-300 mt-12">
          <Outlet />
        </main>
      </div>

    </div>
  )
}
