import { useState } from "react"
import { FaCog } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import { MdKeyboardDoubleArrowLeft } from "react-icons/md"
import { NavLink } from "react-router-dom"
import logo from "../../public/images/logo.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { BiLogOut } from "react-icons/bi"
import { menuConfig } from "../data/mockData"

const SideBar = ({ role }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* button to open sidebar */}
      <button
        onClick={toggle}
        className=" md:hidden fixed top-2 left-2 z-50 p-1 rounded-lg"
      >
        <GiHamburgerMenu className="text-2xl " />
      </button>
      <section
        className={`fixed top-0 left-0 h-screen w-56 bg-[#F4F6FB] p-4 rounded-r-2xl transition-transform duration-300 z-50
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* dashboard logo */}
        {role === "admin" || role === "Instructer" ? (
          <div className="flex items-center justify-between ">
            <picture className="w-full mb-5 flex relative">
              <img
                className="w-[200px] h-12 object-cover"
                loading="lazy"
                src={logo}
                alt="imgDashboard"
              />
            </picture>
            {/* button to close sidebar */}
            <button
              onClick={toggle}
              className="md:hidden transition duration-300 rounded-full hover:bg-white  p-2"
            >
              <MdKeyboardDoubleArrowLeft className="text-2xl " />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between ">
            <div className="flex items-center justify-center text-2xl gap-2 ">
              <LuGraduationCap />
              <h2 className="font-bold">UniExam</h2>
            </div>
            {/* button to close sidebar */}
            <button
              onClick={toggle}
              className="md:hidden transition duration-300 rounded-full hover:bg-white  p-2"
            >
              <MdKeyboardDoubleArrowLeft className="text-2xl " />
            </button>
          </div>
        )}

        <div className="flex flex-col justify-between space-y-14 ">
          <ul className="space-y-2">
            {menuConfig[role].map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    onClick={toggle}
                    to={item.url}
                    end={item.name === "Dashboard" || item.name === "Profile"}
                    className={({ isActive }) =>
                      role === "admin" || role === "Instructer"
                        ? isActive
                          ? "bg-primary text-white p-2 block rounded-xl"
                          : "text-gray-700 p-2 block"
                        : isActive
                        ? "bg-[#4B505A] text-white p-2 block rounded-xl"
                        : "text-gray-700 p-2 block"
                    }
                  >
                    <div className="flex items-center gap-2">
                      <item.icon />
                      {item.name}
                    </div>
                  </NavLink>
                </li>
              )
            })}
          </ul>

          <ul className="border-t py-5 space-y-2">
            <li>
              <NavLink
                to="settings"
                className={({ isActive }) =>
                  role === "admin" || role === "Instructer"
                    ? isActive
                      ? "bg-primary text-white p-2 block rounded-xl"
                      : "text-gray-700 p-2 block"
                    : isActive
                    ? "bg-[#4B505A] text-white p-2 block rounded-xl"
                    : "text-gray-700 p-2 block"
                }
              >
                <div onClick={toggle} className="flex items-center gap-2">
                  <FaCog /> Settings
                </div>
              </NavLink>
            </li>
            <li>
              <button
                className={
                  role === "admin" || role === "Instructer"
                    ? "text-[#180F6B] p-2 block hover:bg-primary hover:text-white transition rounded-xl w-full text-left"
                    : "text-[#4B505A] p-2 block hover:bg-[#4B505A] hover:text-white transition rounded-xl w-full text-left"
                }
              >
                <div className="flex items-center gap-2">
                  <BiLogOut /> Logout
                </div>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default SideBar
