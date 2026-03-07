import { useState } from "react"
import { CiLogout, CiMail } from "react-icons/ci";
import { FaChalkboardTeacher, FaChartBar, FaChartLine, FaCog, FaGraduationCap, FaTachometerAlt, FaUser, FaUserFriends } from "react-icons/fa"
import { FaBook } from "react-icons/fa6";
import { LuGraduationCap, LuNotepadText } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { NavLink } from "react-router-dom"
import imgDashboard from "../assets/imgDashboard/imgDashboard.png"
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const SideBar = ({ role }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(true)
  }

    const menuConfig = {
    admin: [
      { name: "dashboard", url: "dashboard", icon: <FaTachometerAlt /> },
      { name: "users", url: "users", icon: <FaUserFriends /> },
      { name: "stages", url: "stages", icon: <FaGraduationCap /> },
      { name: "courses", url: "courses", icon: <FaBook /> },
      { name: "payment", url: "payment", icon: <MdPayment /> },
      { name: "results", url: "results", icon: <FaChartBar /> },
      { name: "contact us", url: "contact-us", icon: <CiMail /> },
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
      {/* button to close sidebar */}
      <button onClick={()=> setIsOpen(false)} className="md:hidden flex items-center font-bold hover:bg-danger transition bg-red-400 w-full rounded-xl p-2">
        <IoMdClose className="text-2xl me-1"/> Close
      </button>
      {/* dashboard logo */}
      {role === "admin" ? (
      <picture className="flex justify-center">
        <img className="w-full h-16 object-cover" loading="lazy" src={imgDashboard} alt="imgDashboard" />
      </picture>
        ) : (
          <div className="flex items-center justify-center text-3xl gap-2 ">
            <LuGraduationCap />
            <h2 className="font-bold">UniExam</h2>
          </div>
        )}

      <div className="flex flex-col justify-between space-y-14 ">

        <ul className="space-y-2">
          {menuConfig[role].map((item, index)=>{
            return <li key={index}>
            <NavLink onClick={()=> setIsOpen(false)} to={item.url} className={({ isActive }) => isActive? "bg-primary text-white p-2 block rounded-xl": "text-gray-700 p-2 block"}>
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
            <NavLink to="settings" className={({ isActive }) => isActive? "bg-primary text-white p-2 block rounded-xl": "text-gray-700 p-2 block"}>
              <div className="flex items-center gap-2">
                <FaCog /> settings
              </div>
            </NavLink>
          </li>
          <li>
            <button className="text-gray-700 p-2 block hover:bg-primary hover:text-white transition rounded-xl w-full text-left">
              <div className="flex items-center gap-2">
                <CiLogout /> Logout
              </div>
            </button>
          </li>          
        </ul>  

      </div>
    </section>

  </>
}

export default SideBar
