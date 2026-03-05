import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"

export default function DashboardLayout() {
  return (
    <div className="flex">
      <SideBar />

      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  )
}
