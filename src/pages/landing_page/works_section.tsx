import { X } from 'lucide-react'
import ImageComponent from '../../components/ImageCompnent'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { getProjects, Project } from '../../utils/content'

const Works: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedFeature, setSelectedFeature] = useState<Project | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects()
      // Only show projects that have at least one image
      setProjects(data.filter(p => p.images && p.images.length > 0))
    }
    fetchProjects()
  }, [])

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
                  src={project.images[0] || ''}
                  alt={project.name}
                  isGray={false}
                  className='h-[250px] w-full md:h-[400px] rounded object-contain bg-gray-50 border border-slate-200'
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
                src={selectedFeature.images[0] || ''}
                alt={selectedFeature.name}
                isGray={false}
                className="h-64 mt-4 w-full rounded-2xl object-contain bg-gray-50"
              />
              <h2 className="text-4xl font-bold">{selectedFeature.name}</h2>
              <p className="text-xl text-black/90">{selectedFeature.description}</p>

              {selectedFeature.links && selectedFeature.links.length > 0 && (
                <div className="flex flex-wrap gap-4 py-4">
                  {selectedFeature.links.map((link, index) => (
                    link.url && (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-black px-6 py-2 text-white transition-colors hover:bg-gray-800"
                      >
                        {link.label || 'Visit Website'}
                      </a>
                    )
                  ))}
                </div>
              )}

              {selectedFeature.images.length > 1 && (
                <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-3">
                  {selectedFeature.images.slice(1).map((image, index) => (
                    <ImageComponent
                      key={index}
                      src={image}
                      alt={`${selectedFeature.name} preview ${index + 2}`}
                      isGray={false}
                      className="h-64 w-full rounded-2xl object-contain bg-gray-50 border border-slate-200"
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Works