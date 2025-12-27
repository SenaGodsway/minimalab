import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Layout, Code, Search, PenTool, BarChart, HelpCircle, LucideProps } from 'lucide-react'
import { IconType } from 'react-icons'

interface Process {
  id: string;
  title: string;
  description: string;
  icon:  React.ComponentType<LucideProps> | IconType;
}

const Pipeline: React.FC = () => {
  const [hoveredProcess, setHoveredProcess] = useState<string | null>(null);

  const processes: Process[] = [
    { id: 'planning', title: 'Planning', description: 'Strategic blueprint for your digital vision.', icon: Layout },
    { id: 'design', title: 'Design', description: 'Pixel-perfect interfaces that captivate users.', icon: Code },
    { id: 'ai-app-development', title: 'AI App Development', description: 'Intelligent apps that learn and adapt.', icon: Search },
    { id: 'web-and-mobile-development', title: 'Web & Mobile Development', description: 'Scalable platforms built for performance.', icon: PenTool },
    { id: 'deployment', title: 'Deployment', description: 'Seamless launch and growth acceleration.', icon: BarChart },
    { id: 'maintenance', title: 'Maintenance', description: 'Proactive care for uninterrupted excellence.', icon: HelpCircle }
  ]

  return (
    <div className="flex flex-col gap-3">
      {processes.map((process) => {
        const IconComponent = process.icon;
        return (
          <div
            key={process.id}
            onMouseEnter={() => setHoveredProcess(process.id)}
            onMouseLeave={() => setHoveredProcess(null)}
            className="relative flex flex-row gap-3 overflow-hidden rounded border px-3 py-4"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className=''
            >
              <IconComponent size={24} />
            </motion.span>
            <h3>{process.title}</h3>

            {hoveredProcess === process.id && (
              <motion.p
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                className="absolute left-0 top-0 z-10 h-full w-full rounded bg-gray-800 p-4 text-white shadow-lg"
              >
                {process.description}
              </motion.p>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Pipeline
