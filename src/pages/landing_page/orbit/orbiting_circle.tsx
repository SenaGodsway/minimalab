import { useEffect, useState, useRef } from "react";
// Import actual images from the project assets
import image1 from "../../../assets/images/1.jpg";
import image2 from "../../../assets/images/4.jpg";
import image4 from "../../../assets/images/brands/PostgresSQL.png";
import profileImage2 from "../../../assets/images/brands/python.png";
import profileImage3 from "../../../assets/images/3.jpg";
import profileImage4 from "../../../assets/images/brands/firebase.png";
import profileImage5 from "../../../assets/images/brands/AWS.png";
import profileImage6 from "../../../assets/images/brands/Android.png";
import profileImage7 from "../../../assets/images/brands/Kubernetes.png";
import profileImage8 from "../../../assets/images/2.jpg";
import profileImage9 from "../../../assets/images/brands/Azios.png";
import profileImage10 from "../../../assets/images/brands/Docker.png";
import profileImage11 from "../../../assets/images/brands/Raspberry Pi.png";
import profileImage12 from "../../../assets/images/brands/Rust.png";
import profileImage13 from "../../../assets/images/brands/Next.js.png";
import profileImage14 from "../../../assets/images/brands/Svelte.png";
import profileImage15 from "../../../assets/images/brands/MongoDB.png";
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
    width: 380,
    height: 380,
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
      type: "profile",
      src: image1,
      alt : "image1",
    },
     {
      type: "profile",
      src: image4,
      alt : "image1",
    },
   

  ];

  // Inner orbit items
  const innerOrbitItems: OrbitItem[] = [
     {
        type: "profile",
        src: profileImage2,
        alt: "Profile 4",
    },
    {
        type: "profile",
        src: profileImage3,
        alt: "Profile 4",
      },
      {
        type: "profile",
        src: profileImage4,
        alt: "Profile 4",
      },
      {
        type: "profile",
        src: profileImage5,
        alt: "Profile 4",
      },
     

  ];

  // Outer orbit items
  const outerOrbitItems: OrbitItem[] = [
     {
        type: "profile",
        src: profileImage6,
        alt: "Profile 4",
      },
    {
      type: "profile",
      src: profileImage7,
      alt: "Profile 4",
    },
     {
      type: "profile",
      src: profileImage8,
      alt: "Profile 4",
    },
     {
      type: "profile",
      src: profileImage9,
      alt: "Profile 4",
    },


  ];

  // Outermost orbit items (farthest from center)
  const outermostOrbitItems: OrbitItem[] = [
    {
      type: "profile",
      src: profileImage10,
      alt: "Profile 6",
    },
    {
      type: "profile",
      src: profileImage11,
      alt: "Profile 7",
    },
    {
      type: "profile",
      src: profileImage12,
      alt: "Profile 8",
    },
    {
      type: "profile",
      src: profileImage13,
      alt: "Profile 8",
    },
     {
      type: "profile",
      src: profileImage14,
      alt: "Profile 8",
    },
     {
      type: "profile",
      src: profileImage15,
      alt: "Profile 8",
    },
    {
      type: "profile",
      src: image2,
      alt: "Profile 8",
    },
  ];

  if (!mounted) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br">
        <div className="text-2xl font-bold text-black">20k+</div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative box-border flex h-full w-full items-center justify-center bg-gradient-to-br"
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
          className="absolute rounded-full border border-gray-400/40"
          style={{
            width: radii.innermost * 2,
            height: radii.innermost * 2,
          }}
        ></div>
        {/* Inner orbit ring */}
        <div
          className="absolute rounded-full border border-gray-400/30"
          style={{
            width: radii.inner * 2,
            height: radii.inner * 2,
          }}
        ></div>
        {/* Outer orbit ring */}
        <div
          className="absolute rounded-full border border-gray-400/25"
          style={{
            width: radii.outer * 2,
            height: radii.outer * 2,
          }}
        ></div>
        {/* Outermost orbit ring */}
        <div
          className="absolute rounded-full border border-gray-400/20"
          style={{
            width: radii.outermost * 2,
            height: radii.outermost * 2,
          }}
        ></div>
      </div>

      {/* Central content */}
      <div className="relative z-10 text-center text-black">
        <div
          className="mb-1 font-bold"
          style={{ fontSize: `${Math.max(containerSize.width * 0.12, 24)}px` }}
        >
          {/* <BrainCircuit className="h-10 w-10" /> */}
          <Brain className="h-10 w-10" />
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
                  className="overflow-hidden rounded-full border-2 border-white/20 shadow-lg"
                  style={{
                    width: itemSizes.small,
                    height: itemSizes.small,
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className="flex items-center justify-center rounded-xl border border-white/10 bg-black/40 shadow-lg backdrop-blur-sm"
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
                  className="overflow-hidden rounded-full border-2 border-white/20 shadow-lg"
                  style={{
                    width: itemSizes.large,
                    height: itemSizes.large,
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className="flex items-center justify-center rounded-2xl border border-white/10 bg-black/40 shadow-lg backdrop-blur-sm"
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
                  className="overflow-hidden rounded-full border-2 border-white/20 shadow-lg"
                  style={{
                    width: itemSizes.large,
                    height: itemSizes.large,
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className="flex items-center justify-center rounded-2xl border border-white/10 bg-black/40 shadow-lg backdrop-blur-sm"
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
                  className="overflow-hidden rounded-full border-2 border-white/20 shadow-lg"
                  style={{
                    width: itemSizes.large,
                    height: itemSizes.large,
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className="flex items-center justify-center rounded-2xl border border-white/10 bg-black/40 shadow-lg backdrop-blur-sm"
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
