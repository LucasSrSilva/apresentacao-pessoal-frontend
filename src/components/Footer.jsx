import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import React from 'react'

function Footer() {
    return (
        <div className='bg-stone-800 text-white flex justify-center items-center gap-2 py-10'>
            <a href='https://github.com/LucasSrSilva/' target='_blank'><GithubLogo size={32} color="#fcfcfc" weight="bold" /></a>
            <a href='https://www.linkedin.com/in/lucassrsilva/' target='_blank'><LinkedinLogo size={32} color="#fcfcfc" weight="bold" /></a>
        </div>
    )
}

export default Footer