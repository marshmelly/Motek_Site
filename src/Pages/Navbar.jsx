
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import motekLogo from '../assets/motek.png'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Website navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ]

  // Styling for navigation links
  const getLinkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors duration-300 ${
      isActive
        ? 'text-[#e78625]'
        : 'text-[#14213d] hover:text-[#e78625]'
    }`

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* MAIN NAVBAR */}
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center shrink-0"
            onClick={() => setIsOpen(false)}
          >
            <img
              src={motekLogo}
              alt="Motek Inventions Logo"
              className="w-40 sm:w-44 lg:w-48 h-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">

            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/'}
                className={getLinkClass}
              >
                {item.name}
              </NavLink>
            ))}

          </div>

          {/* DESKTOP CTA BUTTON */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center bg-[#e78625] text-white px-5 lg:px-6 py-3 rounded-md font-semibold text-sm hover:bg-[#cf741d] hover:shadow-md transition-all duration-300"
          >
            Get a Quote
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#14213d] hover:text-[#e78625] transition-colors"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* MOBILE NAVIGATION */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden border-t border-gray-100 py-5"
          >

            <div className="flex flex-col gap-5">

              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setIsOpen(false)}
                  className={getLinkClass}
                >
                  {item.name}
                </NavLink>
              ))}

              {/* MOBILE CTA */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-[#e78625] text-white text-center py-3 rounded-md font-semibold text-sm hover:bg-[#cf741d] transition-colors duration-300"
              >
                Get a Quote
              </Link>

            </div>

          </div>
        )}

      </div>

    </nav>
  )
}
