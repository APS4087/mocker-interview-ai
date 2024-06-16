import React from 'react'
import { User } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from './ModeToggle'

/**
 * @typedef {Object} Props
 * @property {null | User} [user]
 */

/**
 * @param {Props} props
 */
const Navbar = (props) => {
  return (
    <div className='p-4 flex items-center justify-between relative'>
        <aside className='flex items-center gap-2'>
            <Image 
                src='/logo.svg'
                alt='MockstarAi Logo'
                width={40}
                height={40}
            />
            <span className='text-xl font-bold'>MockStarAi.</span>
        </aside>
        <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
            <ul className="flex items-center justify-center gap-8">
                <Link href={'#'}>Dashboard</Link>
                <Link href={'#'}>Documentation</Link>
                <Link href={'#'}>Upgrade</Link>
                <Link href={'#'}>About</Link>
            </ul>
        </nav>
        <aside className='flex gap-2 items-center'>
            <Link href={'/agency'} className='bg-violet-500 text-white p-2 px-4 rounded-md hover:bg-violet-800'>
                Sign In
            </Link>
            <UserButton />
            <ModeToggle />
        </aside>
    </div>
  )
}

export default Navbar;