import { useState, useEffect, useCallback } from "react";
import ImageComponent from "../../components/ImageCompnent";

// Importing images
import bannerOne from "../../assets/images/freepik__candid-image-photography-natural-textures-highly-r__22368.jpeg";
import bannerTwo from "../../assets/images/freepik__candid-image-photography-natural-textures-highly-r__22370.jpeg";
import bannerThree from "../../assets/images/freepik__candid-image-photography-natural-textures-highly-r__22370.jpeg";

interface Slide {
  title: string;
  // description: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "Professional Workspace",
    // description: "Modern office setup with collaborative environment",
    image: bannerOne,
  },
  {
    title: "Project Management",
    // description: "Agile methodology with visual organization",
    image: bannerTwo,
  },
  {
    title: "Team Planning",
    // description: "Brainstorming session with digital tools",
    image: bannerThree,
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 600);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative mx-auto h-full w-full">
      <div className="aspect-[4/3] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="relative h-full w-full overflow-hidden">
              <ImageComponent
                src={slide.image}
                alt={slide.title}
                isGray={false}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
