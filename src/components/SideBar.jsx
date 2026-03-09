import { useState } from "react"
import { FaChalkboardTeacher, FaChartBar, FaChartLine, FaCog, FaGraduationCap, FaTachometerAlt, FaUser, FaUserFriends } from "react-icons/fa"
import { FaBook } from "react-icons/fa6";
import { LuGraduationCap, LuNotepadText } from "react-icons/lu";
import { MdKeyboardDoubleArrowLeft, MdMailOutline, MdPayment } from "react-icons/md";
import { NavLink } from "react-router-dom"
import imgDashboard from "../assets/imgDashboard/imgDashboard.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";

const SideBar = ({ role }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

    const menuConfig = {
    admin: [
      { name: "Dashboard", url: "dashboard", icon: <FaTachometerAlt /> },
      { name: "Users", url: "users", icon: <FaUserFriends /> },
      { name: "Stages", url: "stages", icon: <FaGraduationCap /> },
      { name: "Courses", url: "courses", icon: <FaBook /> },
      { name: "Payment", url: "payment", icon: <MdPayment /> },
      { name: "Results", url: "results", icon: <FaChartBar /> },
      { name: "Contact us", url: "contact-us", icon: <MdMailOutline /> },
    ],    
    student: [
      { name: "Profile", url: "/profile", icon: <FaUser /> },
      { name: "Dashboard", url: "/dashboard", icon: <FaTachometerAlt /> },
      { name: "Teachers", url: "/teachers", icon: <FaChalkboardTeacher /> },
      { name: "Courses", url: "/courses", icon: <FaBook /> },
      { name: "Results Management", url: "/results-management", icon: <LuNotepadText /> },
      { name: "Insight & Analysis", url: "/insight-analysis", icon: <FaChartLine /> },
    ]
  };


  return <>
      {/* button to open sidebar */}
    <button onClick={toggle}  className=" md:hidden fixed top-2 left-2 z-50 p-1 rounded-lg">
      <GiHamburgerMenu className="text-2xl " />
    </button>
    <section className={`fixed top-0 left-0 h-screen w-56 bg-[#F4F6FB] p-4 rounded-r-2xl transition-transform duration-300 z-50
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}>
      {/* dashboard logo */}
      {role === "admin" ? (
        <div className="flex items-center justify-between ">
          <picture className="flex justify-center w-full ">
            <img className="w-full h-12 object-cover" loading="lazy" src={imgDashboard} alt="imgDashboard" />
          </picture>
            {/* button to close sidebar */}
          <button onClick={()=> setIsOpen(false)} className="md:hidden transition duration-300 rounded-full hover:bg-white  p-2">
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
          <button onClick={()=> setIsOpen(false)} className="md:hidden transition duration-300 rounded-full hover:bg-white  p-2">
            <MdKeyboardDoubleArrowLeft className="text-2xl " />
          </button>
        </div>
        )}

      <div className="flex flex-col justify-between space-y-14 ">

        <ul className="space-y-2">
          {menuConfig[role].map((item, index)=>{
            return <li key={index}>
            <NavLink onClick={()=> setIsOpen(false)} to={item.url} 
                className={({ isActive }) =>
                  role === "admin"
                    ? (isActive
                        ? "bg-primary text-white p-2 block rounded-xl"
                        : "text-gray-700 p-2 block")
                    : (isActive
                        ? "bg-[#4B505A] text-white p-2 block rounded-xl"
                        : "text-gray-700 p-2 block")
                }>              
              <div className="flex items-center gap-2">
                {item.icon}
                {item.name}
              </div>
            </NavLink>
          </li>
          })}
        </ul>

        <ul className="border-t py-5 space-y-2">
          <li>
            <NavLink to="settings" 
                className={({ isActive }) =>
                  role === "admin"
                    ? (isActive
                        ? "bg-primary text-white p-2 block rounded-xl"
                        : "text-gray-700 p-2 block")
                    : (isActive
                        ? "bg-[#4B505A] text-white p-2 block rounded-xl"
                        : "text-gray-700 p-2 block")
                }>
              <div className="flex items-center gap-2">
                <FaCog /> Settings
              </div>
            </NavLink>
          </li>
          <li>
            <button 
            className={
                role === "admin"
                  ? "text-[#180F6B] p-2 block hover:bg-primary hover:text-white transition rounded-xl w-full text-left"
                  : "text-[#4B505A] p-2 block hover:bg-[#4B505A] hover:text-white transition rounded-xl w-full text-left"
                }>
              <div className="flex items-center gap-2">
                <BiLogOut /> Logout
              </div>
            </button>
          </li>          
        </ul>  

      </div>
    </section>

  </>
}

export default SideBar
