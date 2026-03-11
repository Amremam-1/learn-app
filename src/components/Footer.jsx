import {
  footerInfo,
  footerExploreLinks,
  footerCompanyLinks,
  footerContact,
  footerCopyright,
} from "../data/homeData"

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa"

import { MdEmail } from "react-icons/md"
import { IoSend } from "react-icons/io5"

const Footer = () => {
  return (
    <footer className="mt-20 bg-white border-t border-bdColor">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        {/* logo + description */}
        <div>
          <h2 className="text-xl font-bold text-indigo-600 mb-4">
            Learn<span className="text-gray-700">nova</span>
          </h2>

          <p className="text-gray-500 text-sm mb-6">{footerInfo.description}</p>

          <div className="flex gap-4 text-gray-500 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-indigo-600" />
            <FaInstagram className="cursor-pointer hover:text-indigo-600" />
            <FaLinkedinIn className="cursor-pointer hover:text-indigo-600" />
          </div>
        </div>

        {/* explore */}
        <div>
          <h3 className="font-semibold mb-4 text-grayDark">Explore</h3>

          <ul className="space-y-2 text-gray-500 text-sm">
            {footerExploreLinks.map((link, i) => (
              <li
                key={i}
                className="cursor-pointer text-gray hover:text-primary hover:translate-x-2 duration-300"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* company */}
        <div>
          <h3 className="font-semibold mb-4 text-grayDark">Company</h3>

          <ul className="space-y-2 text-gray-500 text-sm">
            {footerCompanyLinks.map((link, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-primary hover:translate-x-2 duration-300 text-gray"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* newsletter */}
        <div>
          <h3 className="font-semibold mb-4 text-grayDark">
            Get Weekly Updates
          </h3>

          <p className="text-gray-500 text-sm mb-4 text-gray">
            The latest courses, sent to your inbox.
          </p>

          <div className="flex mb-5">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 border border-bdColor rounded-l-md px-3 py-2 text-sm outline-none"
            />

            <button className="bg-indigo-600 text-white px-4 rounded-r-md flex items-center justify-center">
              <IoSend />
            </button>
          </div>

          <div className="space-y-2 text-sm text-gray-500  ">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary" /> {footerContact.phone}
            </p>

            <p className="flex items-center gap-2">
              <MdEmail className="text-primary" /> {footerContact.email}
            </p>
          </div>
        </div>
      </div>

      {/* bottom footer */}
      <div className="border-t border-bdColor py-4 px-6 flex flex-col md:flex-row justify-between text-sm text-gray-400 max-w-7xl mx-auto">
        <p>{footerCopyright.text}</p>

        <div className="flex gap-6">
          {footerCopyright.links.map((link, i) => (
            <span key={i} className="cursor-pointer hover:text-indigo-600">
              {link}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
