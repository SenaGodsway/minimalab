import { useState, useEffect } from 'react'
import { MenuIcon, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../assets/images/Untitled.svg"

export default function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <>
      {/* Spacer to prevent content jump when header becomes fixed */}
      {isScrolled && <div className="h-[73px] md:h-[64px]" />}

      <header className={`
        ${isScrolled ? 'fixed top-0 left-0 right-0 z-50' : 'relative'}
        ${isScrolled
          ? 'bg-white/50 backdrop-blur-md shadow-sm'
          : 'bg-white'
        }
        transition-all duration-300 ease-in-out py-1 md:p-0
      `}>
        <div className="mx-auto max-w-7xl pr-4 py-3 sm:pr-6 sm:py-2 md:py-3 lg:pr-8">
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
          <div className="absolute z-50 h-[100vh] w-full bg-white/70 backdrop-blur-md md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-12 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.value}
                  to={`/${item.value.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block hover:bg-white/50 px-3 py-2 text-xl rounded-md font-medium transition-colors duration-200 ${
                    location.pathname === `/${item.value.toLowerCase()}`
                      ? 'bg-white/60 text-black'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  )
}
