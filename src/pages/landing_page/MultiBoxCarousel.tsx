import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselProps {
  images: string[];
  interval?: number;
  boxCount?: number;
}
// const slides: Slide[] = [
//     {
//       title: "Professional Workspace",
//       description: "Modern office setup with collaborative environment",
//       image: "https://images.unsplash.com/photo-1730215188533-69f120dfbc42?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {
//       title: "Team Planning",
//       description: "Brainstorming session with digital tools",
//       image: "https://images.unsplash.com/photo-1731783995597-028d2210b12d?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {
//       title: "Project Management",
//       description: "Agile methodology with visual organization",
//       image: "https://images.unsplash.com/photo-1725958171160-8ecf4b20113d?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     }
//   ];

const MultiBoxCarousel: React.FC<CarouselProps> = ({ 
  images, 
  interval = 5000, 
  boxCount = 12 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide()
    }, interval)

    return () => clearTimeout(timer)
  }, [currentIndex, interval])

  const boxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <div className="relative mx-auto w-full max-w-3xl overflow-hidden aspect-video">
      <div className="relative w-full h-full">
        {images.map((image, imageIndex) => (
          <div
            key={imageIndex}
            className={`absolute top-0 left-0 w-full h-full ${
              currentIndex === imageIndex ? 'z-10' : 'z-0'
            }`}
          >
            <div className="grid grid-cols-4 grid-rows-3 w-full h-full">
              {[...Array(boxCount)].map((_, boxIndex) => (
                <motion.div
                  key={boxIndex}
                  className="relative overflow-hidden"
                  variants={boxVariants}
                  initial="hidden"
                  animate={currentIndex === imageIndex ? 'visible' : 'hidden'}
                  transition={{
                    duration: 0.5,
                    delay: Math.random() * 0.5,
                    onComplete: () => setIsAnimating(false),
                  }}
                >
                  <img
                    src={image}
                    alt={`Slide ${imageIndex + 1}`}
                    className="top-0 left-0 absolute w-[400%] h-[300%]"
                    style={{
                      objectFit: 'cover',
                      objectPosition: `${(boxIndex % 4) * -100}% ${Math.floor(boxIndex / 4) * -100}%`,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="top-1/2 left-4 z-20 absolute bg-white/30 hover:bg-white/50 p-2 rounded-full text-white transform transition-colors -translate-y-1/2"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="top-1/2 right-4 z-20 absolute bg-white/30 hover:bg-white/50 p-2 rounded-full text-white transform transition-colors -translate-y-1/2"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="bottom-4 left-1/2 z-20 absolute flex space-x-2 transform -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default MultiBoxCarousel