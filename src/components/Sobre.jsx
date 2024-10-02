import gsap from 'gsap'
import React from 'react'
import { useGSAP } from '@gsap/react';

function Sobre() {
    useGSAP(() => {
        gsap.fromTo('#nome', {
            x: -200, 
            opacity:0
        },
        {
            x: 0,
            opacity: 1,
            duration: 2
        })

        gsap.fromTo('#descricao', {
            x: 400, 
            opacity:0
        },
        {
            x: 0,
            opacity: 1,
            duration: 2,
            delay: 1
        })
    }, [])

    

    return (
        <section id='sobre' className='flex items-center h-[50vh] items-center justify-between px-20 mt-10 capitalize bg-gradient-to-b from-white to-gray-500 overflow-hidden'>
            <div id='nome' className='w-1/2 text-center'>
                <h2 className='text-6xl'>ola! eu sou lucas silva.</h2>
            </div>
            <div id='descricao' className='w-1/2 text-center'>
                <h2 className='text-3xl'>um desenvolvedor front-end apaixonado por tecnologia.</h2>
                <p className='text-gray-600'>sempre me desenvolvendo para se tonrar uma pessoa melhor.</p>
            </div>
        </section>
    )
}

export default Sobre