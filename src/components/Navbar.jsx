import React, { useState } from 'react'
import logo from '../assets/logo.png'

function Navbar() {

    return (
        <>
            <nav className='flex justify-between items-center h-[10vh] shadow-lg px-10'>
                <img className='max-h-[10vh] object-contain' src={logo} alt="Logo moderna com as letras L e S" />
                <div className='flex gap-10 items-center capitalize hover:*:underline'>
                    <a href="#sobre">sobre</a>
                    <a href="#habilidades">habilidades</a>
                    <a href="#projetos">projetos</a>
                </div>
                <div className='hidden lg:block hover:*:underline'>
                    <a href="https://docs.google.com/document/d/1ykBUpY21TxsfUtDIOc3UFS0oL_LoXlm5/edit?usp=sharing&ouid=117318316428028160532&rtpof=true&sd=true" target='_blank'>CV</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar