import { Outlet } from "react-router-dom"

import NavBar from "../components/NavBar"

export default function MainLayout() {
  return (
    <div className="">
      <NavBar />

      <div className="">
        <Outlet />
      </div>
    </div>
  )
}
