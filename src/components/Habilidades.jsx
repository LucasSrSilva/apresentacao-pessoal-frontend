import react from '../assets/react.png'
import bootstrap from '../assets/bootstrap.png'
import typescript from '../assets/typescript.png'
import js from '../assets/js.png'
import tailwind from '../assets/tailwind.png'
import next from '../assets/next.png'
import sass from '../assets/sass.png'
import gsapimg from '../assets/gsap.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function Habilidades() {

  useGSAP(() => {
    gsap.fromTo('.object-contain', {
      x: 600, 
      opacity:0
  },
  {
      x: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.25
  })

  gsap.fromTo('.title', {
    y: -300,
    x: -300,
    opacity:0
},
{
    y: 0,
    x: 0,
    opacity: 1,
    duration: 2,
})
  }, [])

  return (
    <section className='flex flex-col justify-center items-start bg-gradient-to-b from-gray-500 to-white h-[50vh] px-20 overflow-hidden w-full'>
        <div className='my-20 w-1/2 text-center'>
            <h2 className='title text-6xl capitalize w-full px-20'>habilidades</h2>
        </div>
        <div className='w-full flex justify-center h-32 gap-10'>
            <img className='w-32 object-contain' src={react} alt="react logo" />
            <img className='w-32 object-contain' src={bootstrap} alt="bootstrap logo" />
            <img className='w-32 object-contain' src={typescript} alt="typescript logo" />
            <img className='w-32 object-contain' src={js} alt="javascript logo" />
            <img className='w-32 object-contain' src={tailwind} alt="tailwind logo" />
            <img className='w-32 object-contain' src={next} alt="nextjs logo" />
            <img className='w-32 object-contain' src={sass} alt="sass logo" />
            <img className='w-32 object-contain' src={gsapimg} alt="gsap logo" />
        </div>


    </section>
  )
}

export default Habilidades