import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import biocidade from "../assets/projeto1.png"

function Projetos() {
    useGSAP(() => {
        gsap.fromTo(".projetos", {
            opacity: 0,
            x: 200,
        },
            {
                scrollTrigger: '.projetos',
                x: 0,
                opacity: 1,
                duration: 2
            })
    }, [])
    return (
        <section id='projetos' className='flex flex-col justify-center items-start bg-gradient-to-b  from-white to-gray-500 min-h-[50vh] px-20 py-10 w-full'>
            <div className='my-20 w-full md:w-1/2 text-center'>
                <h2 className='projetos text-5xl capitalize w-full md:px-20'>Projetos</h2>
            </div>
            <div className='w-full grid grid-cols-2 md:flex justify-center gap-10'>
                <a href="https://main--biocidade.netlify.app/" target='_blank'>
                    <img id='skill' className='max-w-28 object-contain' src={biocidade} alt="Logo do projeto biocidade" />
                </a>
            </div>
        </section>
    )
}

export default Projetos