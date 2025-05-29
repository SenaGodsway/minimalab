import { useEffect, useRef, useState } from 'react'
import logo1 from '../assets/images/brands/langchain.png'
import logo2 from '../assets/images/brands/python.png'
import logo3 from '../assets/images/brands/62a74dfe223343fbc2207d02.png'
import logo4 from '../assets/images/brands/firebase.png'
import logo5 from '../assets/images/brands/postgresql-logo.png'
import logo6 from '../assets/images/brands/flutter-brandlogo.net.png'

interface Logo {
  name: string
  src: string
}

const logos: Logo[] = [
    { name: 'PictelAI', src: logo1 },
    { name: 'Prometheus', src: logo2 },
    { name: 'Radius', src:logo3 },
    { name: 'Warpspeed', src: logo4},
    { name: 'Watchtower', src: logo5 },
    { name: 'Luminary', src: logo6},
]

export default function LogoCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    // const containerWidth = scrollContainer.offsetWidth

    const animateScroll = () => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + 1
        return newPosition > scrollWidth / 2 ? 0 : newPosition
      })
    }

    const animationId = setInterval(animateScroll, 15)

    return () => clearInterval(animationId)
  }, [])

  return (
    <div className="py-8 w-full overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* <h2 className="mb-8 font-semibold text-2xl text-center text-gray-800">Our Partners</h2> */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 px-6">
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="w-auto h-14 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}