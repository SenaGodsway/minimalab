import { useState } from 'react'
import {  MenuIcon, X } from 'lucide-react'

import logo from "../assets/images/Untitled.svg"
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    {
      name:'About',
      value:'About'
    },
    {
      name:'Services',
      value:'Services'
    },
    {
      name:'Works',
      value:'Works'
    },
    // {
    //   name:'Get Quotes',
    //   value:'Get_Quotes'
    // },
  ]

  return (
    <header className="bg-white border-b-[1px]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center py-5">
          <Link to='/' className="flex items-top gap-2">
            <img src={logo} alt="" />
            <span className="font-semibold text-2xl text-neutral-900">Pagic</span>
          </Link>
          <nav className="md:flex space-x-6 hidden ml-12">
            {navItems.map((item) => (
              <Link
                key={item.value}
                to={`/${item.value.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {/* <Menu className="w-6 h-6" /> */}
             { isMenuOpen ? <X/>:<MenuIcon/> }
              
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 sm:px-3 pt-2 pb-3">
            {navItems.map((item) => (
              <Link
                key={item.value}
                to={`/${item.value.toLowerCase()}`}
                className="block hover:bg-gray-50 px-3 py-2 rounded-md font-medium text-base text-gray-700 hover:text-gray-900"
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