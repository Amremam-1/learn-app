
import { FaSearch } from 'react-icons/fa'
import { IoIosNotificationsOutline } from 'react-icons/io'
import imgLogo from '../assets/imgDashboard/Logo.jpg'

export default function TopBar() {
  return (
    <>
    <section className=' ps-11 md:ps-5 p-1 pe-2 bg-white z-50'>
        <div className='flex items-center justify-between p-0 md:px-10 '>
                
          {/* Search */}
          <div className="relative sm:w-96 w-48">
            <input type="search" placeholder="Search"
              className="w-full rounded-full py-2 pl-5 pr-10 bg-[#F4F6FB] outline-none text-gray-700"/>
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          {/* Notification  */}
          <div className='flex items-center gap-3 md:pe-56'>
            <IoIosNotificationsOutline className='text-2xl cursor-pointer'/>
            <picture>
              <img className='w-8 h-8 rounded-full' loading='lazy' src={imgLogo} alt="Logo" />
            </picture>
          </div>
      
        </div>
    </section> 
    </>
  )
}
