import React, { useState } from 'react'
import logo from '../assets/logo.png'

function Navbar() {

    return (
        <>
            <nav className='flex justify-between items-center h-[10vh] shadow-lg px-10'>
                <img className='max-w-full max-h-full' src={logo} alt="Logo moderna com as letras L e S" />
                <div className='flex gap-10 items-center capitalize hover:*:underline'>
                    <a href="#sobre">sobre</a>
                    <a href="#habilidades">habilidades</a>
                    <a href="projetos">projetos</a>
                </div>
                <div className='hover:*:underline'>
                    <a href="">Baixar CV</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar