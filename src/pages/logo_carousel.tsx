import { useEffect, useRef, useState } from 'react'
// import logo1 from '../assets/images/brands/langchain.png'
// import logo2 from '../assets/images/brands/python.png'
// import logo3 from '../assets/images/brands/62a74dfe223343fbc2207d02.png'
// import logo4 from '../assets/images/brands/firebase.png'
// import logo5 from '../assets/images/brands/postgresql-logo.png'
// import logo6 from '../assets/images/brands/flutter-brandlogo.net.png'

import logo1 from '../assets/images/brands/AWS.png'
import logo2 from '../assets/images/brands/python.png'
import logo3 from '../assets/images/brands/Android.png'
import logo4 from '../assets/images/brands/firebase.png'
import logo5 from '../assets/images/brands/Azios.png'
import logo6 from '../assets/images/brands/Docker.png'
import logo7 from '../assets/images/brands/Kubernetes.png'
import logo9 from '../assets/images/brands/MongoDB.png'
import logo10 from '../assets/images/brands/Next.js.png'
import logo11 from '../assets/images/brands/Raspberry Pi.png'
import logo12 from '../assets/images/brands/Rust.png'
import logo13 from '../assets/images/brands/Svelte.png'
import logo14 from '../assets/images/brands/TensorFlow.png'




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
    { name: 'Luminary', src: logo7},
    { name: 'Luminary', src: logo9},
    { name: 'Luminary', src: logo10},
    { name: 'Luminary', src: logo11},
    { name: 'Luminary', src: logo12},
    { name: 'Luminary', src: logo13},
    { name: 'Luminary', src: logo14},
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
    <div className="w-full overflow-hidden box-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">Our Partners</h2> */}
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
                  className="object-fit h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}