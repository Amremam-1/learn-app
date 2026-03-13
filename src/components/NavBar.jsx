import { useState } from "react"
import { Link } from "react-router-dom"
import { navLinks } from "../data/homeData"
import Button from "../components/Ui/Button"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full relative z-[100]">
      <header
        className="px-4 h-[72px] flex items-center 
        justify-between bg-white border-b border-bdColor"
      >
        {/* Logo */}
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="logo"
            className="object-cover w-44 h-[60px]"
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:block">
          <ul className="flex items-center">
            {navLinks.map((link, idx) => (
              <li
                key={idx}
                className="group ms-7 text-[15px] font-medium text-textCo relative"
              >
                <a href={link.path}>{link.name}</a>

                <span
                  className="absolute -bottom-0.5 left-0 h-[2px] 
                  w-0 bg-primary transition-all duration-300 
                  group-hover:w-full"
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          <Link to="/login">
            <Button variant="secondary">Login</Button>
          </Link>
          <Link to="/register">
            <Button>Sign Up</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden fixed top-[72px] left-0 w-full rounded-xl
   h-[calc(100vh-72px)] max-h-[320px] z-[100] bg-white shadow-2xl border-t border-bdColor"
        >
          <ul className="flex flex-col p-4 gap-4">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.path}
                  className="text-[16px] font-medium text-textCo hover:text-primary transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-3 p-4 flex-col">
            <Button variant="secondary">Login</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar
