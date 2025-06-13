import { useState } from 'react'
import { MenuIcon, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../assets/images/Untitled.svg"

export default function AppHeader() {
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
    {
      name:'Careers',
      value:'careers'
    },
  ]

  return (
    <header className="border-b-[1px] bg-white py-1 md:p-0">
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-2 md:py-0 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to='/' className="items-top flex gap-2">
            <img src={logo} alt="Logo" className='rotate-[30deg]'/>
            <span className="text-2xl font-semibold">MinimaLab</span>
          </Link>
          <nav className="ml-12 hidden space-x-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.value}
                to={`/${item.value.toLowerCase()}`}
                className={`text-gray-600 py-4 px-1 hover:text-gray-900 transition-colors duration-200 ${
                  location.pathname === `/${item.value.toLowerCase()}` 
                    ? 'text-black border-b-2' 
                    : ''
                }`}
                style={{
                  borderColor: location.pathname === `/${item.value.toLowerCase()}` 
                    ? '#000000' 
                    : 'transparent'
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute z-50 h-[100vh] w-full bg-white md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-12 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.value}
                to={`/${item.value.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block hover:bg-gray-50 px-3 py-2 text-xl rounded-md font-medium ${
                  location.pathname === `/${item.value.toLowerCase()}`
                    ? 'bg-gray-100'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                style={{
                  color: location.pathname === `/${item.value.toLowerCase()}`
                    ? '#000000' 
                    : ''
                }}
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
