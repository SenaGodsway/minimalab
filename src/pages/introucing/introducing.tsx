import { useState } from 'react'
import { Sparkles, Clapperboard, Footprints, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ImageComponent from '../../components/ImageCompnent'

interface Feature {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  imageSrc: string
  content: string
}

const features: Feature[] = [
  {
    id: 1,
    title: "Unreal Pikaffects",
    description: "Go beyond what you could capture with a camera. Explode, melt, crush, or inflate anything your heart desires.",
    icon: <Sparkles className="w-6 h-6" />,
    imageSrc: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Unreal Pikaffects take your creativity to the next level. With our advanced AI-powered effects, you can transform any scene into a mind-bending spectacle. Whether you want to make objects explode into a shower of particles, melt like ice cream on a hot day, or inflate like a balloon, the possibilities are endless. These effects aren't just visually stunning – they're also incredibly easy to use, allowing you to bring your wildest ideas to life with just a few clicks."
  },
  {
    id: 2,
    title: "Big Screen Shots",
    description: "Use the kinds of cinematic shots that will make you look like you know what you're doing, like Bullet Time, Vertigo, Dolly Left, Crane Down, and more.",
    icon: <Clapperboard className="w-6 h-6" />,
    imageSrc: "https://images.unsplash.com/photo-1602064172250-43f8909056c7?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Elevate your videos with Big Screen Shots, a feature that brings Hollywood-style cinematography to your fingertips. Choose from a variety of iconic camera movements like Bullet Time for that matrix-style frozen moment, Vertigo for a dizzying zoom effect, Dolly Left for smooth lateral movement, or Crane Down for sweeping vertical shots. These professional techniques add depth and drama to your scenes, making every video look like it was shot by a seasoned director. No expensive equipment or years of experience required – just point, click, and watch your footage transform into a cinematic masterpiece."
  },
  {
    id: 3,
    title: "New Moves",
    description: "Make the stars of your scenes even more lifelike— from running, to skateboarding, to flying, and beyond.",
    icon: <Footprints className="w-6 h-6" />,
    imageSrc: "https://images.unsplash.com/photo-1687125114671-d45714b4631d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Bring your characters to life with New Moves, a revolutionary feature that adds realistic and dynamic motion to your scenes. Whether you need a character to sprint through a bustling city, pull off impressive skateboard tricks, or soar through the sky, our advanced motion library has you covered. These aren't just pre-set animations – they're intelligent, context-aware movements that adapt to your scene. The result? Characters that move with unprecedented realism, adding a new level of immersion to your videos. From subtle gestures to acrobatic feats, New Moves ensures that every action in your scene is fluid, natural, and captivating."
  },
]

export default function Introducing() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null)

  return (
    // #d5ffe57c, #7dfba337
    // <div className="relative bg-[#ffefd5] p-8 min-h-screen text-gray-900">
    <div className="relative p-8 min-h-screen text-gray-900">
      <div className="space-y-12 mx-auto max-w-4xl">
        <div className='mt-12 p-1'></div>
        <header className="space-y-8 text-center">
          <h1 className="font-bold text-5xl">Our Capabilities</h1>
          <p className="mx-auto max-w-2xl text-xl">
          Take a look at a selection of our projects, where creativity meets innovation. Each piece showcases our commitment to delivering exceptional results and pushing the limits of what's possible.
          </p>
        </header>
      <div className='mt-12 p-1'></div>
        {features.map((feature, index) => (
          <section key={feature.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
            <div className="flex-1 my-12 mb-12 cursor-pointer" onClick={() => setSelectedFeature(feature)}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImageComponent 
                  src={feature.imageSrc}
                  alt={feature.title}
                  isGray={true} className={''}                />
              </motion.div>
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                {feature.icon}
                <h2 className="font-semibold text-2xl">{feature.title}</h2>
              </div>
              <p className='text-black'>{feature.description}</p>
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
            className="z-50 fixed inset-0 bg-[#ffffff] overflow-y-auto"
          >
            <div className="space-y-8 mx-auto p-4 max-w-4xl">
              <button
                onClick={() => setSelectedFeature(null)}
                className="top-4 right-4 absolute hover:bg-black p-2 rounded-full text-black hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
                <ImageComponent 
                 src={selectedFeature.imageSrc}
                 alt={selectedFeature.title}
                isGray={true}
                 className="rounded-2xl w-full h-64 object-cover"
                />
              <h2 className="font-bold text-4xl">{selectedFeature.title}</h2>
              <p className="text-xl">{selectedFeature.content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}