import { X } from 'lucide-react'
import ImageComponent from '../../components/ImageCompnent'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { projects, Project } from '../works_page/projects'

const Works: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<Project | null>(null)

  return (
    <div className="mx-auto w-full md:w-10/12">
      <div className='grid grid-cols-1 gap-16 md:grid-cols-2'>
        {projects.map((project) => (
          <section key={project.id} className='container'>
            <div className="cursor-pointer" onClick={() => setSelectedFeature(project)}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImageComponent 
                  src={project.imageSrc}
                  alt={project.title}
                  isGray={false}
                  className=' h-[250px] w-full md:h-[350px] rounded'
                />
              </motion.div>
            </div>
          </section>
        ))}
      </div>
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 pt-6 pb-20 overflow-y-auto bg-[#ffffff]"
          >
            <div className="mx-auto max-w-4xl space-y-8 p-4">
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute right-4 top-4 rounded-full p-2 text-black transition-colors hover:bg-black hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
              <ImageComponent 
                src={selectedFeature.imageSrc}
                alt={selectedFeature.title}
                isGray={false}
                className="h-64 mt-4 w-full rounded-2xl object-cover"
              />
              <h2 className="text-4xl font-bold">{selectedFeature.title}</h2>
              <p className="text-xl text-black/90">{selectedFeature.content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Works