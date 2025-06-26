"use client";

import { useEffect, useState, useRef } from "react";
// Import actual images from the project assets
import image1 from "../../../assets/images/1.jpg";
import image4 from "../../../assets/images/4.jpg";
import profileImage2 from "../../../assets/images/freepik__candid-image-photography-natural-textures-highly-r__22369.jpeg";
import profileImage3 from "../../../assets/images/freepik__candid-image-photography-natural-textures-highly-r__22370.jpeg";
import profileImage4 from "../../../assets/images/freepik__candid-image-photography-natural-textures-highly-r__22371.jpeg";
import { Brain } from "lucide-react";

// Define proper types for orbit items
type IconItem = {
  type: "icon";
  content: string;
};

type ProfileItem = {
  type: "profile";
  src: string;
  alt: string;
};

type OrbitItem = IconItem | ProfileItem;

export default function OrbitingCircle() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({
    width: 400,
    height: 400,
  });

  useEffect(() => {
    setMounted(true);

    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const size = Math.min(rect.width, rect.height);
        setContainerSize({ width: size, height: size });
      }
    };

    // Use requestAnimationFrame to ensure DOM is fully laid out
    const handleSizeUpdate = () => {
      requestAnimationFrame(() => {
        updateSize();
      });
    };

    // Initial size calculation with a small delay to ensure layout is complete
    const timeoutId = setTimeout(handleSizeUpdate, 200);

    window.addEventListener("resize", handleSizeUpdate);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleSizeUpdate);
    };
  }, []);

  // Calculate responsive radii based on container size
  const baseRadius = containerSize.width * 0.65;
//   const radii = {
//     innermost: baseRadius * 0.24, // 24% of container radius
//     inner: baseRadius * 0.4, // 40% of container radius
//     outer: baseRadius * 0.6, // 60% of container radius
//     outermost: baseRadius * 0.8, // 80% of container radius
//   };
  const radii = {
    innermost: baseRadius * 0.28, // 24% of container radius
    inner: baseRadius * 0.47, // 40% of container radius
    outer: baseRadius * 0.65, // 60% of container radius
    outermost: baseRadius * 0.8, // 80% of container radius
  };

  // Calculate responsive item sizes (increased by 30%)
  const itemSizes = {
    // small: Math.max(containerSize.width * 0.06, 24), // Min 24px, 6% of container
    // large: Math.max(containerSize.width * 0.08, 32),
    small: Math.max(containerSize.width * 0.078, 31), // Min 31px, 7.8% of container (30% increase)
    large: Math.max(containerSize.width * 0.104, 42), // Min 42px, 10.4% of container (30% increase)
  };

  // Innermost orbit items (closest to center)
  const innermostOrbitItems: OrbitItem[] = [

    {
      type: "icon",
      content: "💎",
    },
    {
        type: "profile",
        src: profileImage2,
        alt: "Profile 4",
    },
      {
      type: "profile",
      src: profileImage2,
      alt: "Profile 4",
    },

  ];

  // Inner orbit items
  const innerOrbitItems: OrbitItem[] = [
    {
      type: "profile",
      src: image1,
      alt: "Profile 1",
    },
    // {
    //   type: "icon",
    //   content: "💬",
    // },
    {
        type: "profile",
        src: profileImage2,
        alt: "Profile 4",
      },

  ];

  // Outer orbit items
  const outerOrbitItems: OrbitItem[] = [

    {
      type: "icon",
      content: "🚀",
    },
    {
      type: "profile",
      src: profileImage2,
      alt: "Profile 4",
    },


  ];

  // Outermost orbit items (farthest from center)
  const outermostOrbitItems: OrbitItem[] = [
    {
      type: "profile",
      src: profileImage3,
      alt: "Profile 6",
    },
    {
      type: "profile",
      src: profileImage4,
      alt: "Profile 7",
    },
    {
      type: "icon",
      content: "🔥",
    },
    {
      type: "profile",
      src: image4,
      alt: "Profile 8",
    },

  ];

  if (!mounted) {
    return (
      <div className="w-full h-full bg-gradient-to-br flex items-center justify-center">
        <div className="text-black text-2xl font-bold">20k+</div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full bg-gradient-to-br  flex items-center justify-center relative"
      style={{
        minHeight: "200px",
        aspectRatio: "1",
        padding: `${itemSizes.large}px`,
      }}
    >
      {/* Add CSS for animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .innermost-orbit,
          .inner-orbit,
          .outer-orbit,
          .outermost-orbit {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 0;
            height: 0;
          }

          .innermost-orbit {
            animation: rotate 15s linear infinite;
          }

          .inner-orbit {
            animation: rotate 20s linear infinite;
          }

          .outer-orbit {
            animation: rotate 25s linear infinite;
          }

          .outermost-orbit {
            animation: rotate 35s linear infinite;
          }

          .orbit-item {
            position: absolute;
            top: 0;
            left: 0;
            transform-origin: 0 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          @keyframes rotate {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `,
        }}
      />

      <style>{`
        .innermost-orbit,
        .inner-orbit,
        .outer-orbit,
        .outermost-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
        }

        .innermost-orbit {
          animation: rotate 15s linear infinite;
        }

        .inner-orbit {
          animation: rotate 20s linear infinite;
        }

        .outer-orbit {
          animation: rotate 25s linear infinite;
        }

        .outermost-orbit {
          animation: rotate 35s linear infinite;
        }

        .orbit-item {
          position: absolute;
          top: 0;
          left: 0;
          transform-origin: 0 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>

      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Innermost orbit ring */}
        <div
          className="absolute border border-gray-400/40 rounded-full"
          style={{
            width: radii.innermost * 2,
            height: radii.innermost * 2,
          }}
        ></div>
        {/* Inner orbit ring */}
        <div
          className="absolute border border-gray-400/30 rounded-full"
          style={{
            width: radii.inner * 2,
            height: radii.inner * 2,
          }}
        ></div>
        {/* Outer orbit ring */}
        <div
          className="absolute border border-gray-400/25 rounded-full"
          style={{
            width: radii.outer * 2,
            height: radii.outer * 2,
          }}
        ></div>
        {/* Outermost orbit ring */}
        <div
          className="absolute border border-gray-400/20 rounded-full"
          style={{
            width: radii.outermost * 2,
            height: radii.outermost * 2,
          }}
        ></div>
      </div>

      {/* Central content */}
      <div className="relative z-10 text-center text-black">
        <div
          className="font-bold mb-1 "
          style={{ fontSize: `${Math.max(containerSize.width * 0.12, 24)}px` }}
        >
          {/* <BrainCircuit className="w-10 h-10" /> */}
          <Brain className="w-10 h-10" />
        </div>
        <div
          className="font-medium opacity-90"
          style={{ fontSize: `${Math.max(containerSize.width * 0.04, 12)}px` }}
        >

        </div>
      </div>

      {/* Innermost orbit items */}
      <div className="innermost-orbit">
        {innermostOrbitItems.map((item, index) => {
          const angle = (index / innermostOrbitItems.length) * 360;
          return (
            <div
              key={`innermost-${index}`}
              className="orbit-item"
              style={{
                transform: `rotate(${angle}deg) translateX(${radii.innermost}px) rotate(-${angle}deg) translate(-50%, -50%)`,
              }}
            >
              {item.type === "profile" ? (
                <div
                  className="rounded-full overflow-hidden border-2 border-white/20 shadow-lg"
                  style={{
                    width: itemSizes.small,
                    height: itemSizes.small,
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className="bg-black/40 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 shadow-lg"
                  style={{
                    width: itemSizes.small,
                    height: itemSizes.small,
                    fontSize: `${itemSizes.small * 0.5}px`,
                  }}
                >
                  {item.content}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Inner orbit items */}
      <div className="inner-orbit">
        {innerOrbitItems.map((item, index) => {
          const angle = (index / innerOrbitItems.length) * 360;
          return (
            <div
              key={`inner-${index}`}
              className="orbit-item"
              style={{
                transform: `rotate(${angle}deg) translateX(${radii.inner}px) rotate(-${angle}deg) translate(-50%, -50%)`,
              }}
            >
              {item.type === "profile" ? (
                <div
                  className="rounded-full overflow-hidden border-2 border-white/20 shadow-lg"
                  style={{
                    width: itemSizes.large,
                    height: itemSizes.large,
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className="bg-black/40 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10 shadow-lg"
                  style={{
                    width: itemSizes.large,
                    height: itemSizes.large,
                    fontSize: `${itemSizes.large * 0.5}px`,
                  }}
                >
                  {item.content}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Outer orbit items */}
      <div className="outer-orbit">
        {outerOrbitItems.map((item, index) => {
          const angle = (index / outerOrbitItems.length) * 360;
          return (
            <div
              key={`outer-${index}`}
              className="orbit-item"
              style={{
                transform: `rotate(${angle}deg) translateX(${radii.outer}px) rotate(-${angle}deg) translate(-50%, -50%)`,
              }}
            >
              {item.type === "profile" ? (
                <div
                  className="rounded-full overflow-hidden border-2 border-white/20 shadow-lg"
                  style={{
                    width: itemSizes.large,
                    height: itemSizes.large,
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className="bg-black/40 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10 shadow-lg"
                  style={{
                    width: itemSizes.large,
                    height: itemSizes.large,
                    fontSize: `${itemSizes.large * 0.5}px`,
                  }}
                >
                  {item.content}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Outermost orbit items */}
      <div className="outermost-orbit">
        {outermostOrbitItems.map((item, index) => {
          const angle = (index / outermostOrbitItems.length) * 360;
          return (
            <div
              key={`outermost-${index}`}
              className="orbit-item"
              style={{
                transform: `rotate(${angle}deg) translateX(${radii.outermost}px) rotate(-${angle}deg) translate(-50%, -50%)`,
              }}
            >
              {item.type === "profile" ? (
                <div
                  className="rounded-full overflow-hidden border-2 border-white/20 shadow-lg"
                  style={{
                    width: itemSizes.large,
                    height: itemSizes.large,
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className="bg-black/40 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10 shadow-lg"
                  style={{
                    width: itemSizes.large,
                    height: itemSizes.large,
                    fontSize: `${itemSizes.large * 0.5}px`,
                  }}
                >
                  {item.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
