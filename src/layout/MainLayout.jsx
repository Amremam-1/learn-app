import { Outlet } from "react-router-dom"

import NavBar from "../components/NavBar"

export default function MainLayout() {
  return (
    <div className="flex">
      <NavBar />

      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  )
}
