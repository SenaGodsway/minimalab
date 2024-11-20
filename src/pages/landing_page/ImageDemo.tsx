import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images?: string[];
  interval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
}

export default function ImageCarouselDemo() {
  // Using placeholder images with different colors for demonstration
  const demoImages = [
    "https://images.unsplash.com/photo-1721332155567-55d1b12aa271?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1719937206145-549d59c51285?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720048169478-234c4f6d022d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "/api/placeholder/800/400"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    if (!isPlaying || demoImages.length <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex, isPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % demoImages.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + demoImages.length) % demoImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
      setTouchStart(0);
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div
        className="relative w-full h-64 group"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="relative rounded-lg w-full h-full overflow-hidden">
          {demoImages.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Carousel image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Demo text overlay to show different slides */}
              {/* <div className="absolute inset-0 flex justify-center items-center">
                <span className="font-bold text-4xl text-white">Slide {index + 1}</span>
              </div> */}
            </div>
          ))}
        </div>

        {/* <button
          onClick={previousSlide}
          className="top-1/2 left-2 absolute bg-black/30 hover:bg-black/50 opacity-0 group-hover:opacity-100 p-2 rounded-full text-white transition-opacity -translate-y-1/2"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button> */}
        {/* <button
          onClick={nextSlide}
          className="top-1/2 right-2 absolute bg-black/30 hover:bg-black/50 opacity-0 group-hover:opacity-100 p-2 rounded-full text-white transition-opacity -translate-y-1/2"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button> */}

        <div className="bottom-4 left-1/2 absolute flex gap-2 -translate-x-1/2">
          {demoImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-4'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}