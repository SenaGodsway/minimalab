import { useState } from 'react'
import { MenuIcon, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import logo from "../assets/images/Untitled.svg"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    {
      name: 'About',
      value: 'about'
    },
    {
      name: 'Services',
      value: 'services'
    },
    {
      name: 'Works',
      value: 'works'
    },
  ]

  return (
    <header className="border-b-[1px] bg-white py-6 md:p-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to='/' className="items-top flex gap-2">
            <img src={logo} alt="Logo"  className='rotate-[30deg]'/>
            <span className="text-2xl font-semibold text-neutral-800">MinimaLab</span>
          </Link>
          <nav className="ml-12 hidden space-x-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.value}
                to={`/${item.value.toLowerCase()}`}
                className={`text-gray-600 py-6 px-1 hover:text-gray-900 transition-colors duration-200 ${
                  location.pathname === `/${item.value.toLowerCase()}` ? 'border-b-2 border-black text-black' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.value}
                to={`/${item.value.toLowerCase()}`}
                className={`block hover:bg-gray-50 px-3 py-2 rounded-md font-medium text-base text-gray-700 hover:text-gray-900 
                  ${
                  location.pathname === `/${item.value.toLowerCase()}` ? '' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
