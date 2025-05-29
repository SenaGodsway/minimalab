import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Layout, Code, Search, PenTool, BarChart, HelpCircle } from 'lucide-react'

const Pipeline: React.FC = () => {
  const [hoveredProcess, setHoveredProcess] = useState<string | null>(null);

  const processes = [
    { id: 'planning', title: 'Planning', description: 'I need a website design.', icon: Layout },
    { id: 'design', title: 'Design', description: 'I need a website built.', icon: Code },
    { id: 'ai-app-development', title: 'AI App Development', description: 'I want to understand users.', icon: Search },
    { id: 'web-and-mobile-development', title: 'Web & Mobile Development', description: 'I want to grow my blog.', icon: PenTool },
    { id: 'deployment', title: 'Deployment', description: 'Help me grow organically.', icon: BarChart },
    { id: 'maintenance', title: 'Maintenance', description: "We're here to help!", icon: HelpCircle }
  ]

  return (
    <div className="grid grid-cols-2 gap-6">
      {processes.map((process, index) => {
        const IconComponent = process.icon;
        return (
          <div 
            key={process.id}
            onMouseEnter={() => setHoveredProcess(process.id)}
            onMouseLeave={() => setHoveredProcess(null)}
            className="relative border px-3 py-6 flex flex-col gap-3 rounded"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <IconComponent size={24} />
            </motion.span>
            <h3>{process.title}</h3>
            
            {/* Show description on hover */}
            {hoveredProcess === process.id && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 bg-gray-800 text-white p-2 rounded shadow-lg z-10"
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