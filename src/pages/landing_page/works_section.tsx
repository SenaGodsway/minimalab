import { X } from 'lucide-react'
import ImageComponent from '../../components/ImageCompnent'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  imageSrc: string
  content: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Unreal Pikaffects",
    description: "Go beyond what you could capture with a camera. Explode, melt, crush, or inflate anything your heart desires.",
    imageSrc: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Unreal Pikaffects take your creativity to the next level. With our advanced AI-powered effects, you can transform any scene into a mind-bending spectacle. Whether you want to make objects explode into a shower of particles, melt like ice cream on a hot day, or inflate like a balloon, the possibilities are endless. These effects aren't just visually stunning – they're also incredibly easy to use, allowing you to bring your wildest ideas to life with just a few clicks."
  },
  {
    id: 2,
    title: "Big Screen Shots",
    description: "Use the kinds of cinematic shots that will make you look like you know what you're doing, like Bullet Time, Vertigo, Dolly Left, Crane Down, and more.",
    imageSrc: "https://images.unsplash.com/photo-1602064172250-43f8909056c7?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Elevate your videos with Big Screen Shots, a feature that brings Hollywood-style cinematography to your fingertips. Choose from a variety of iconic camera movements like Bullet Time for that matrix-style frozen moment, Vertigo for a dizzying zoom effect, Dolly Left for smooth lateral movement, or Crane Down for sweeping vertical shots. These professional techniques add depth and drama to your scenes, making every video look like it was shot by a seasoned director. No expensive equipment or years of experience required – just point, click, and watch your footage transform into a cinematic masterpiece."
  },
  {
    id: 3,
    title: "New Moves",
    description: "Make the stars of your scenes even more lifelike— from running, to skateboarding, to flying, and beyond.",
    imageSrc: "https://cdn.dribbble.com/userupload/13200327/file/original-72f51bd56b72f978e05e617503727814.png?resize=752x&vertical=center",
    content: "Bring your characters to life with New Moves, a revolutionary feature that adds realistic and dynamic motion to your scenes. Whether you need a character to sprint through a bustling city, pull off impressive skateboard tricks, or soar through the sky, our advanced motion library has you covered. These aren't just pre-set animations – they're intelligent, context-aware movements that adapt to your scene. The result? Characters that move with unprecedented realism, adding a new level of immersion to your videos. From subtle gestures to acrobatic feats, New Moves ensures that every action in your scene is fluid, natural, and captivating."
  },
  {
    id: 4,
    title: "New Moves",
    description: "Make the stars of your scenes even more lifelike— from running, to skateboarding, to flying, and beyond.",
    imageSrc: "https://cdn.dribbble.com/userupload/14494026/file/original-88ccc019e98484c4c7a950d8e9306fba.png?resize=752x&vertical=center",
    content: "Bring your characters to life with New Moves, a revolutionary feature that adds realistic and dynamic motion to your scenes. Whether you need a character to sprint through a bustling city, pull off impressive skateboard tricks, or soar through the sky, our advanced motion library has you covered. These aren't just pre-set animations – they're intelligent, context-aware movements that adapt to your scene. The result? Characters that move with unprecedented realism, adding a new level of immersion to your videos. From subtle gestures to acrobatic feats, New Moves ensures that every action in your scene is fluid, natural, and captivating."
  },
  {
    id: 5,
    title: "New Moves",
    description: "Make the stars of your scenes even more lifelike— from running, to skateboarding, to flying, and beyond.",
    imageSrc: "https://cdn.dribbble.com/userupload/10938350/file/original-ecb7ad6d39364989e0baf14a53ff4950.png?resize=752x&vertical=center",
    content: "Bring your characters to life with New Moves, a revolutionary feature that adds realistic and dynamic motion to your scenes. Whether you need a character to sprint through a bustling city, pull off impressive skateboard tricks, or soar through the sky, our advanced motion library has you covered. These aren't just pre-set animations – they're intelligent, context-aware movements that adapt to your scene. The result? Characters that move with unprecedented realism, adding a new level of immersion to your videos. From subtle gestures to acrobatic feats, New Moves ensures that every action in your scene is fluid, natural, and captivating."
  },
  {
    id: 6,
    title: "New Moves",
    description: "Make the stars of your scenes even more lifelike— from running, to skateboarding, to flying, and beyond.",
    imageSrc: "https://cdn.dribbble.com/userupload/16718437/file/original-79cc754da656746e6df09564bddc8881.png?resize=752x&vertical=center",
    content: "Bring your characters to life with New Moves, a revolutionary feature that adds realistic and dynamic motion to your scenes. Whether you need a character to sprint through a bustling city, pull off impressive skateboard tricks, or soar through the sky, our advanced motion library has you covered. These aren't just pre-set animations – they're intelligent, context-aware movements that adapt to your scene. The result? Characters that move with unprecedented realism, adding a new level of immersion to your videos. From subtle gestures to acrobatic feats, New Moves ensures that every action in your scene is fluid, natural, and captivating."
  },
];

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
                  className=' h-[250px] w-full md:h-[400px] rounded'
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