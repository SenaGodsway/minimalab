import { AnimatePresence, motion } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import { Layout, PenTool, BrainCircuit, Smartphone, Rocket, Wrench, LucideProps } from 'lucide-react'
import { IconType } from 'react-icons'

interface Process {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<LucideProps> | IconType;
  image: string;
}

const processes: Process[] = [
  { id: 'planning', title: 'Planning', description: 'Strategic blueprint for your digital vision.', icon: Layout, image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070' },
  { id: 'design', title: 'Design', description: 'Pixel-perfect interfaces that captivate users.', icon: PenTool, image: 'https://plus.unsplash.com/premium_photo-1661382011487-cd3d6b1d9dff?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'ai-app-development', title: 'AI App Development', description: 'Intelligent apps that learn and adapt.', icon: BrainCircuit, image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1948' },
  { id: 'web-and-mobile-development', title: 'Web & Mobile Development', description: 'Scalable platforms built for performance.', icon: Smartphone, image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974' },
  { id: 'deployment', title: 'Deployment', description: 'Seamless launch and growth acceleration.', icon: Rocket, image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070' },
  { id: 'maintenance', title: 'Maintenance', description: 'Proactive care for uninterrupted excellence.', icon: Wrench, image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
]

const Pipeline: React.FC = () => {
  const [selectedProcessId, setSelectedProcessId] = useState<string>(processes[0].id);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleProcessSelect = (id: string) => {
    setSelectedProcessId(id);
    // Reset the interval when the user manually selects a process
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      startInterval();
    }
  };

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setSelectedProcessId(currentId => {
        const currentIndex = processes.findIndex(p => p.id === currentId);
        const nextIndex = (currentIndex + 1) % processes.length;
        return processes[nextIndex].id;
      });
    }, 5000); // Change every 5 seconds
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const selectedProcess = processes.find(p => p.id === selectedProcessId);

  return (
    <div className="flex flex-col gap-6 md:gap-8 md:flex-row">
      {/* Left side: Process list */}
      <div className="flex w-full flex-col gap-3 md:w-1/2">
        {processes.map((process) => {
          const IconComponent = process.icon;
          const isSelected = process.id === selectedProcessId;
          return (
            <motion.div
              key={process.id}
              onClick={() => handleProcessSelect(process.id)}
              className={`relative flex cursor-pointer flex-row items-center gap-4 overflow-hidden rounded-lg border p-4 transition-colors duration-300 ${
                isSelected ? 'border-black bg-white' : 'border-gray-200 hover:bg-white'
              }`}
              layout
              transition={{ duration: 0.3 }}
            >
              <IconComponent size={24} className={`transition-colors duration-300 ${isSelected ? 'text-black' : 'text-gray-500'}`} />
              <div className="flex flex-col">
                <h3 className={`font-semibold transition-colors duration-300 ${isSelected ? 'text-black' : 'text-gray-800'}`}>{process.title}</h3>
                
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Right side: Image carousel */}
      <div className="relative w-full aspect-[4/3] md:h-auto md:w-1/2 md:aspect-auto" aria-live="polite">
        <AnimatePresence mode="wait">
          {selectedProcess && (
            <motion.div
              key={selectedProcess.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute h-full w-full"
            >
              <img
                src={selectedProcess.image}
                alt={selectedProcess.title}
                className="h-full w-full rounded-lg object-cover shadow-lg"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6 md:w-auto">
                  <h3 className="text-2xl font-bold text-white">{selectedProcess.title}</h3>
                  <p className="mt-1 text-white/90">{selectedProcess.description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Pipeline