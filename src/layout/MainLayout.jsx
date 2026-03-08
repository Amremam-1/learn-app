import { Outlet } from "react-router-dom"

import NavBar from "../components/NavBar"

export default function MainLayout() {
  return (
    <div className="bg-background">
      <NavBar />

      <div className="">
        <Outlet />
      </div>
    </div>
  )
}
