import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageComponent from '../../components/ImageCompnent';

interface Slide {
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "Professional Workspace",
    description: "Modern office setup with collaborative environment",
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Team Planning",
    description: "Brainstorming session with digital tools",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Project Management",
    description: "Agile methodology with visual organization",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  const previousSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative mx-auto w-full">
      <div className="rounded-lg overflow-hidden aspect-[4/3]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <ImageComponent
                src={slide.image}
                alt={slide.title}
                isGray={true}
                className="w-full h-full object-cover"
              />
              {/* <div className="right-0 bottom-0 left-0 absolute bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                <h3 className="mb-2 font-bold text-xl">{slide.title}</h3>
                <p className="opacity-90 text-sm">{slide.description}</p>
              </div> */}
            </div>
          </div>
        ))}
      </div>
      
      {/* <button
        onClick={previousSlide}
        className="top-1/2 left-4 z-20 absolute flex justify-center items-center bg-white/30 hover:bg-white/40 disabled:opacity-50 backdrop-blur-sm rounded-full w-10 h-10 transition-colors -translate-y-1/2 disabled:cursor-not-allowed"
        disabled={isTransitioning}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button> */}
      
      {/* <button
        onClick={nextSlide}
        className="top-1/2 right-4 z-20 absolute flex justify-center items-center bg-white/30 hover:bg-white/40 disabled:opacity-50 backdrop-blur-sm rounded-full w-10 h-10 transition-colors -translate-y-1/2 disabled:cursor-not-allowed"
        disabled={isTransitioning}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button> */}
      
      {/* <div className="bottom-4 left-1/2 z-20 absolute flex gap-2 -translate-x-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => !isTransitioning && setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div> */}
    </div>
  );
}