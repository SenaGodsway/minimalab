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
    title: "Solution Driven Development (SDD)",
    description: "We don’t just build software—we solve your toughest business challenges with Solution-Driven Development (SDD), our proven approach that delivers faster, smarter, and more impactful results than traditional development methods.",
    icon: <Sparkles className="h-6 w-6" />,
    imageSrc:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?_gl=1*4d1jm6*_ga*MjExMzExOTg4MC4xNzQ0NjM5ODgz*_ga_8JE65Q40S6*czE3NTE1ODU2NjckbzQkZzEkdDE3NTE1ODY4NTAkajIxJGwwJGgw",
    content: "Unreal Pikaffects take your creativity to the next level. With our advanced AI-powered effects, you can transform any scene into a mind-bending spectacle. Whether you want to make objects explode into a shower of particles, melt like ice cream on a hot day, or inflate like a balloon, the possibilities are endless. These effects aren't just visually stunning – they're also incredibly easy to use, allowing you to bring your wildest ideas to life with just a few clicks."
  },
  {
    id: 2,
    title: "Scalable & Future-Proof Softwares",
    description: "We build AI systems designed to evolve with your business - not just solve today's problems, but adapt to tomorrow's challenges. Our solutions feature: Modular design, Cloud-native foundation, continues learning and vendor-agnostic frameworks ",
    icon: <Clapperboard className="h-6 w-6" />,
    imageSrc: "https://images.pexels.com/photos/6476270/pexels-photo-6476270.jpeg?_gl=1*5gpwjm*_ga*MjExMzExOTg4MC4xNzQ0NjM5ODgz*_ga_8JE65Q40S6*czE3NTE1ODU2NjckbzQkZzEkdDE3NTE1ODY2NDQkajI5JGwwJGgw",
    content: "• Modular design for seamless upgrades as needs change. •Cloud-native foundations that scale on demand. Continuous learning capabilities to stay relevant. Vendor-agnostic frameworks preventing lock-in.No costly rip-and-replace projects - just AI infrastructure that grows alongside your ambitions while maintaining peak performance.Key Differentiators:Proactive compatibility planning for emerging techBuilt-in adaptation layers for unknown future requirements Cost-optimized scaling that matches your growth curve Because your AI shouldn't become technical debt - it should be your competitive edge for years to come."
  },
  {
    id: 3,
    title: "Hyper-Custom AI, Fast ROI",
    description: "Tailored AI solutions built at startup speed. We design bespoke models trained on your data—delivering rapid prototypes in weeks, not years, so you see real value faster. No off-the-shelf compromises, just agile AI that works.",
    icon: <Footprints className="h-6 w-6" />,
    imageSrc: "https://images.unsplash.com/photo-1687125114671-d45714b4631d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Bring your characters to life with New Moves, a revolutionary feature that adds realistic and dynamic motion to your scenes. Whether you need a character to sprint through a bustling city, pull off impressive skateboard tricks, or soar through the sky, our advanced motion library has you covered. These aren't just pre-set animations – they're intelligent, context-aware movements that adapt to your scene. The result? Characters that move with unprecedented realism, adding a new level of immersion to your videos. From subtle gestures to acrobatic feats, New Moves ensures that every action in your scene is fluid, natural, and captivating."
  },
]

export default function Introducing() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null)

  return (
    <div className="relative min-h-screen p-8 text-gray-900 md:w-full">
      <div className="mx-auto max-w-4xl space-y-12 md:max-w-4xl lg:w-9/12">
        <div className='mt-12 p-1'></div>
        <header className="space-y-8 text-center">
          <h1 className="text-5xl font-bold">Our Capabilities</h1>
          <p className="mx-auto text-xl">
          Take a look at a selection of our projects, where creativity meets innovation. Each piece showcases our commitment to delivering exceptional results and pushing the limits of what's possible.
          </p>
        </header>
      <div className='mt-12 p-1'></div>
        {features.map((feature, index) => (
          <section key={feature.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
            <div className="my-12 mb-12 aspect-[16/9] flex-1 cursor-pointer" onClick={() => setSelectedFeature(feature)}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mx-auto h-full"
                className="mx-auto h-full w-11/12"

              >
                <ImageComponent
                src={feature.imageSrc}
                alt={feature.title}
                isGray={false}
                className='mx-auto h-full w-full rounded-xl'
                />
              </motion.div>
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                {feature.icon}
                <h2 className="text-2xl font-semibold">{feature.title}</h2>
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
            className="fixed inset-0 z-50 overflow-y-auto bg-[#ffffff]"
          >
            <div className="mx-auto max-w-4xl space-y-8 p-4">
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute right-4 top-4 rounded-full p-2 text-black transition-colors hover:bg-black hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
                <ImageComponent
                 src={selectedFeature.imageSrc}
                 alt={selectedFeature.title}
                isGray={false}
                 className="h-64 w-full rounded-2xl object-cover"
                />
              <h2 className="text-4xl font-bold">{selectedFeature.title}</h2>
              <p className="text-xl">{selectedFeature.content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}