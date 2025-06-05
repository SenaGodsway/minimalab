<<<<<<< HEAD
// import { X } from 'lucide-react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useState, useRef } from 'react'

// interface Projects {
//   id: number
//   title: string
//   description: string
//   videoSrc: string
//   content: string
// }

// const projects: Projects[] = [
//   {
//     id: 1,
//     title: "Unreal Pikaffects",
//     description: "Go beyond what you could capture with a camera. Explode, melt, crush, or inflate anything your heart desires.",
//     videoSrc: "https://cdn.dribbble.com/userupload/18414846/file/original-819b877a4c2923c0ace851053359c1b3.mp4",
//     content: "Unreal Pikaffects take your creativity to the next level. With our advanced AI-powered effects, you can transform any scene into a mind-bending spectacle."
//   },
//   {
//     id: 2,
//     title: "Big Screen Shots",
//     description: "Use the kinds of cinematic shots that will make you look like you know what you're doing, like Bullet Time, Vertigo, Dolly Left, Crane Down, and more.",
//     videoSrc: "https://cdn.dribbble.com/userupload/43529816/file/large-b6dfcce9ba730e46ddcc64b64b3fae8b.mp4",
//     content: "Elevate your videos with Big Screen Shots, a feature that brings Hollywood-style cinematography to your fingertips."
//   },
//   {
//     id: 3,
//     title: "New Moves",
//     description: "Make the stars of your scenes even more lifelike— from running, to skateboarding, to flying, and beyond.",
//     videoSrc: "https://cdn.dribbble.com/userupload/43545722/file/large-8c164efa3a8d936dc4544a0ad3e8243a.mp4",
//     content: "Bring your characters to life with New Moves, a revolutionary feature that adds realistic and dynamic motion to your scenes."
//   },
//   {
//     id: 4,
//     title: "Advanced Effects",
//     description: "Create stunning visual effects with just a few clicks.",
//     videoSrc: "https://cdn.dribbble.com/userupload/43549412/file/large-8c8fae99405a006102c13ab68bc963e4.mp4",
//     content: "Our Advanced Effects feature allows you to add professional-grade visual effects to your projects effortlessly."
//   },
//   {
//     id: 5,
//     title: "Dynamic Lighting",
//     description: "Transform your scenes with realistic lighting effects.",
//     videoSrc: "https://cdn.dribbble.com/userupload/43528134/file/large-8ec99a935958036a1eb0f15aea426da5.mp4",
//     content: "Dynamic Lighting gives you complete control over the mood and atmosphere of your scenes."
//   },
//   {
//     id: 6,
//     title: "Cinematic Transitions",
//     description: "Smooth transitions that elevate your storytelling.",
//     videoSrc: "https://cdn.dribbble.com/userupload/43518669/file/large-0f52494ff52b540eff110f0c18a433c4.mp4",
//     content: "Create professional-quality transitions that keep your audience engaged from scene to scene."
//   },
// ];

// const Works: React.FC = () => {
//   const [selectedFeature, setSelectedFeature] = useState<Projects | null>(null)
//   const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

//   const handleMouseEnter = (index: number) => {
//     const video = videoRefs.current[index]
//     if (video) {
//       video.currentTime = 0
//       video.play().catch(e => console.log("Autoplay prevented:", e))
//     }
//   }

//   const handleMouseLeave = (index: number) => {
//     const video = videoRefs.current[index]
//     if (video) {
//       video.pause()
//     }
//   }

//   return (
//     <div className="mx-auto w-full md:w-10/12">
//       <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
//         {projects.map((project, index) => (
//           <section key={project.id} className=''>
//             <div 
//               className="cursor-pointer" 
//               onClick={() => setSelectedFeature(project)}
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={() => handleMouseLeave(index)}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className="relative h-[400px] overflow-hidden rounded"
//               >

//                 <video
//                   ref={el => videoRefs.current[index] = el}
//                   src={project.videoSrc}
//                   muted
//                   loop
//                   className="h-full w-full object-cover"
//                   preload="auto"

//                 />
//                 <div className="absolute bottom-2 left-2">
//                   <h3 className="rounded-full bg-black px-6 py-2 text-xl font-bold text-white">{project.title}</h3>
//                 </div>
//               </motion.div>
//             </div>
//           </section>
//         ))}
//       </div>

//       <AnimatePresence>
//         {selectedFeature && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             className="fixed inset-0 z-50 overflow-y-auto bg-[#ffffff]"
//           >
//             <div className="mx-auto max-w-4xl space-y-8 p-4">
//               <button
//                 onClick={() => setSelectedFeature(null)}
//                 className="absolute right-4 top-4 rounded-full p-2 text-black transition-colors hover:bg-black hover:text-white"
//               >
//                 <X className="h-4 w-4" />
//               </button>
              
//               <video
//                 src={selectedFeature.videoSrc}
//                 autoPlay
//                 controls
//                 muted
//                 loop
//                 className="h-72 w-full rounded-2xl object-cover"
//               />
//              <div className='flex justify-between'>
//               <div className='w-4/12'>
//                <h2 className="text-3xl font-bold">{selectedFeature.title}</h2>
//                <div className='mt-12 p-1'></div>
//               <p>technologies</p>
//               </div>
//               <div className='w-6/12'>
//                <h2 className="mb-3 text-lg font-bold">Project summary</h2>
//               <p className="text-xl">{selectedFeature.content}</p>
//               </div>
//              </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

// export default Works


import {  X } from 'lucide-react'
import ImageComponent from '../../components/ImageCompnent'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'

interface Projects {
  id: number
  title: string
  description: string
  videoSrc: string
  content: string
}

const projects: Projects[] = [
  {
    id: 1,
    title: "Unreal Pikaffects",
    description: "Go beyond what you could capture with a camera. Explode, melt, crush, or inflate anything your heart desires.",
    videoSrc: "https://cdn.dribbble.com/userupload/18414846/file/original-819b877a4c2923c0ace851053359c1b3.mp4",
    content: "Unreal Pikaffects take your creativity to the next level. With our advanced AI-powered effects, you can transform any scene into a mind-bending spectacle."
  },
  {
    id: 2,
    title: "Big Screen Shots",
    description: "Use the kinds of cinematic shots that will make you look like you know what you're doing, like Bullet Time, Vertigo, Dolly Left, Crane Down, and more.",
    videoSrc: "https://cdn.dribbble.com/userupload/43529816/file/large-b6dfcce9ba730e46ddcc64b64b3fae8b.mp4",
    content: "Elevate your videos with Big Screen Shots, a feature that brings Hollywood-style cinematography to your fingertips."
  },
  {
    id: 3,
    title: "New Moves",
    description: "Make the stars of your scenes even more lifelike— from running, to skateboarding, to flying, and beyond.",
    videoSrc: "https://cdn.dribbble.com/userupload/43545722/file/large-8c164efa3a8d936dc4544a0ad3e8243a.mp4",
    content: "Bring your characters to life with New Moves, a revolutionary feature that adds realistic and dynamic motion to your scenes."
  },
  {
    id: 4,
    title: "Advanced Effects",
    description: "Create stunning visual effects with just a few clicks.",
    videoSrc: "https://cdn.dribbble.com/userupload/43549412/file/large-8c8fae99405a006102c13ab68bc963e4.mp4",
    content: "Our Advanced Effects feature allows you to add professional-grade visual effects to your projects effortlessly."
  },
  {
    id: 5,
    title: "Dynamic Lighting",
    description: "Transform your scenes with realistic lighting effects.",
    videoSrc: "https://cdn.dribbble.com/userupload/43528134/file/large-8ec99a935958036a1eb0f15aea426da5.mp4",
    content: "Dynamic Lighting gives you complete control over the mood and atmosphere of your scenes."
  },
  {
    id: 6,
    title: "Cinematic Transitions",
    description: "Smooth transitions that elevate your storytelling.",
    videoSrc: "https://cdn.dribbble.com/userupload/43518669/file/large-0f52494ff52b540eff110f0c18a433c4.mp4",
    content: "Create professional-quality transitions that keep your audience engaged from scene to scene."
  },
];

const Works: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<Projects | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index]
    if (video) {
      video.currentTime = 0
      video.play().catch(e => console.log("Autoplay prevented:", e))
    }
  }

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index]
    if (video) {
      video.pause()
    }
  }

  return (
    // < className="flex items-center justify-center">
      <div className="mx-auto w-full md:w-10/12">

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {projects.map((project) => (
        //   <section key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
      
          <section key={project.id} className=''>
            <div className="cursor-pointer" onClick={() => setSelectedFeature(project)}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative h-[400px] overflow-hidden rounded"
              >
                <ImageComponent 
                src={project.imageSrc}
                alt={project.title}
                isGray={false}
                className='h-[400px] rounded'
                // className={`rounded-2xl w-full h-[400px] hover:${setIsGray(!isGray)}`}

                />
                <div className="absolute bottom-2 left-2">
                  <h3 className="rounded-full bg-black px-6 py-2 text-xl font-bold text-white">{project.title}</h3>
                </div>
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
            className="fixed inset-0 z-50 overflow-y-auto bg-[#ffffff]"
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
                 className="mb-12 h-64 w-full rounded-2xl object-cover"
                />
                <div className='mt-12 p-1'></div>
                <div className='flex justify-between'>
                  <div className='w-4/12'>
                    <h2 className="text-3xl font-bold">{selectedFeature.title}</h2>
                    <div className='mt-12 p-1'></div>
                    <p>technologies</p>
                 </div>
                <div className='w-8/12'>  
                <p className="text-lg">{selectedFeature.content}</p>
              </div>
              </div>
              <div className='mt-12 p-1'></div>
              <a href='' className='mx-auto mt-10 flex justify-center border-2'>view project</a>
              <div className='mb-16 p-1'></div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Works

// import {  X } from 'lucide-react'
// import ImageComponent from '../../components/ImageCompnent'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useState } from 'react'


// interface Projects {
//     id: number
//     title: string
//     description: string
//     imageSrc: string
//     content: string
//   }
//   const projects: Projects[] = [
//     {
//       id: 1,
//       title: "Unreal Pikaffects",
//       description: "Go beyond what you could capture with a camera. Explode, melt, crush, or inflate anything your heart desires.",
//       imageSrc: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       content: "Unreal Pikaffects take your creativity to the next level. With our advanced AI-powered effects, you can transform any scene into a mind-bending spectacle. Whether you want to make objects explode into a shower of particles, melt like ice cream on a hot day, or inflate like a balloon, the possibilities are endless. These effects aren't just visually stunning – they're also incredibly easy to use, allowing you to bring your wildest ideas to life with just a few clicks."
//     },
//     {
//         id: 2,
//         title: "Big Screen Shots",
//         description: "Use the kinds of cinematic shots that will make you look like you know what you're doing, like Bullet Time, Vertigo, Dolly Left, Crane Down, and more.",
//         imageSrc: "https://images.unsplash.com/photo-1602064172250-43f8909056c7?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         content: "Elevate your videos with Big Screen Shots, a feature that brings Hollywood-style cinematography to your fingertips. Choose from a variety of iconic camera movements like Bullet Time for that matrix-style frozen moment, Vertigo for a dizzying zoom effect, Dolly Left for smooth lateral movement, or Crane Down for sweeping vertical shots. These professional techniques add depth and drama to your scenes, making every video look like it was shot by a seasoned director. No expensive equipment or years of experience required – just point, click, and watch your footage transform into a cinematic masterpiece."
//       },
//       {
//         id: 3,
//         title: "New Moves",
//         description: "Make the stars of your scenes even more lifelike— from running, to skateboarding, to flying, and beyond.",
//         imageSrc: "https://cdn.dribbble.com/userupload/13200327/file/original-72f51bd56b72f978e05e617503727814.png?resize=752x&vertical=center",
//         content: "Bring your characters to life with New Moves, a revolutionary feature that adds realistic and dynamic motion to your scenes. Whether you need a character to sprint through a bustling city, pull off impressive skateboard tricks, or soar through the sky, our advanced motion library has you covered. These aren't just pre-set animations – they're intelligent, context-aware movements that adapt to your scene. The result? Characters that move with unprecedented realism, adding a new level of immersion to your videos. From subtle gestures to acrobatic feats, New Moves ensures that every action in your scene is fluid, natural, and captivating."
//       },
//       {
//         id: 4,
//         title: "New Moves",
//         description: "Make the stars of your scenes even more lifelike— from running, to skateboarding, to flying, and beyond.",
//         imageSrc: "https://cdn.dribbble.com/userupload/14494026/file/original-88ccc019e98484c4c7a950d8e9306fba.png?resize=752x&vertical=center",
//         content: "Bring your characters to life with New Moves, a revolutionary feature that adds realistic and dynamic motion to your scenes. Whether you need a character to sprint through a bustling city, pull off impressive skateboard tricks, or soar through the sky, our advanced motion library has you covered. These aren't just pre-set animations – they're intelligent, context-aware movements that adapt to your scene. The result? Characters that move with unprecedented realism, adding a new level of immersion to your videos. From subtle gestures to acrobatic feats, New Moves ensures that every action in your scene is fluid, natural, and captivating."
//       },
//       {
//         id: 5,
//         title: "New Moves",
//         description: "Make the stars of your scenes even more lifelike— from running, to skateboarding, to flying, and beyond.",
//         imageSrc: "https://cdn.dribbble.com/userupload/10938350/file/original-ecb7ad6d39364989e0baf14a53ff4950.png?resize=752x&vertical=center",
//         content: "Bring your characters to life with New Moves, a revolutionary feature that adds realistic and dynamic motion to your scenes. Whether you need a character to sprint through a bustling city, pull off impressive skateboard tricks, or soar through the sky, our advanced motion library has you covered. These aren't just pre-set animations – they're intelligent, context-aware movements that adapt to your scene. The result? Characters that move with unprecedented realism, adding a new level of immersion to your videos. From subtle gestures to acrobatic feats, New Moves ensures that every action in your scene is fluid, natural, and captivating."
//       },
//       {
//         id: 6,
//         title: "New Moves",
//         description: "Make the stars of your scenes even more lifelike— from running, to skateboarding, to flying, and beyond.",
//         imageSrc: "https://cdn.dribbble.com/userupload/16718437/file/original-79cc754da656746e6df09564bddc8881.png?resize=752x&vertical=center",
//         content: "Bring your characters to life with New Moves, a revolutionary feature that adds realistic and dynamic motion to your scenes. Whether you need a character to sprint through a bustling city, pull off impressive skateboard tricks, or soar through the sky, our advanced motion library has you covered. These aren't just pre-set animations – they're intelligent, context-aware movements that adapt to your scene. The result? Characters that move with unprecedented realism, adding a new level of immersion to your videos. From subtle gestures to acrobatic feats, New Moves ensures that every action in your scene is fluid, natural, and captivating."
//       },

//   ];
  
// const Works: React.FC = () => {

//     const [selectedFeature, setSelectedFeature] = useState<Projects | null>(null)
//   // const [isGray, setIsGray]= useState(true)
//   return (
//     // <div className="flex items-center justify-center">
//       <div className="mx-auto w-full md:w-10/12">

//         <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
//         {projects.map((project) => (
//         //   <section key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
      
//           <section key={project.id} className=''>
//             <div className="cursor-pointer" onClick={() => setSelectedFeature(project)}>
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <ImageComponent 
//                 src={project.imageSrc}
//                 alt={project.title}
//                 isGray={false}
//                 className='h-[400px] rounded'
//                 // className={`rounded-2xl w-full h-[400px] hover:${setIsGray(!isGray)}`}

//                 />
//               </motion.div>
//             </div>
//           </section>
//         ))}
//         </div>
//             <AnimatePresence>
//         {selectedFeature && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             className="fixed inset-0 z-50 overflow-y-auto bg-[#ffffff]"
//           >
//             <div className="mx-auto max-w-4xl space-y-8 p-4">
//               <button
//                 onClick={() => setSelectedFeature(null)}
//                 className="absolute right-4 top-4 rounded-full p-2 text-black transition-colors hover:bg-black hover:text-white"
//               >
//                 <X className="h-4 w-4" />
//               </button>
           
//                 <ImageComponent 
//                  src={selectedFeature.imageSrc}
//                  alt={selectedFeature.title}
//                 isGray={false}
//                  className="h-64 w-full rounded-2xl object-cover"
//                 />
//               <h2 className="text-4xl font-bold">{selectedFeature.title}</h2>
//               <p className="text-xl">{selectedFeature.content}</p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//       </div>

  
    // </
  // );
// };


// export default Works;