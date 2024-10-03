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

    gsap.fromTo('#skill', {
      x: 20,
      opacity: 0
    },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.25
      })

    gsap.fromTo(".title", {
      opacity: 0,
      x: 200
    },
      {
        x: 0,
        opacity: 1,
        duration: 2
      })
  }, [])

  return (
    <section id='habilidades' className='flex flex-col justify-center min-h-[50vh] items-start bg-gradient-to-b from-gray-500 to-white px-20 w-full'>
      <div className='my-20 w-full md:w-1/2 text-center'>
        <h2 className='title text-5xl capitalize w-full md:px-20'>habilidades</h2>
      </div>
      <div className='w-full grid grid-cols-2 md:flex justify-center gap-10'>
        <img id='skill' className='max-w-28 object-contain' src={react} alt="react logo" />
        <img id='skill' className='max-w-28 object-contain' src={bootstrap} alt="bootstrap logo" />
        <img id='skill' className='max-w-28 object-contain' src={typescript} alt="typescript logo" />
        <img id='skill' className='max-w-28 object-contain' src={js} alt="javascript logo" />
        <img id='skill' className='max-w-28 object-contain' src={tailwind} alt="tailwind logo" />
        <img id='skill' className='max-w-28 object-contain' src={next} alt="nextjs logo" />
        <img id='skill' className='max-w-28 object-contain' src={sass} alt="sass logo" />
        <img id='skill' className='max-w-28 object-contain' src={gsapimg} alt="gsap logo" />
      </div>


    </section>
  )
}

export default Habilidades