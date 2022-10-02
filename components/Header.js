import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const Header = (props) => {
  const [ toggle, setToggle ] = useState(false)
  const router = useRouter()
  return (
    <>
      <div className={'hidden md:flex flex-row justify-evenly items-center h-24 text-main'}>
        <p className={'hover:scale-125 transition-all hover:text-[#4B5563] cursor-pointer'}>Meghívó</p>
        <Link href={'/program'}>
        <a>
          <p
          className={'hover:scale-125 transition-all hover:text-[#4B5563] cursor-pointer'}>Program</p>
        </a>
        </Link>
        <Link href={'/'}>
        <a>
          <Image className={'cursor-pointer'} src={'/images/logo.png'} width={100} height={100} />
        </a>
        </Link>
        <Link href={'/booking'}>
        <a>
          <p
          className={'hover:scale-125 transition-all hover:text-[#4B5563] cursor-pointer'}>Szállás opciók</p>
        </a>
        </Link>

        <p className={'hover:scale-125 transition-all hover:text-[#4B5563] cursor-pointer'}>Hasznos infók</p>
      </div>
      <div className='flex md:hidden justify-between items-center p-3'>
        <MenuIcon onClick={() => setToggle(!toggle)} className={'h-6 cursor-pointer text-black'} />
        <Link href={'/'}>
        <a>
          <img src='/images/logo.png' alt='Logo' className='h-6' />
        </a>
        </Link>
      </div>

      {toggle &&
      <div className="md:hidden z-50 fixed h-full w-full absolute top-0 bg-gray-300/50 overflow-hidden" onClick={() => setToggle(!toggle)}>
        <div className="bg-gray-300 w-3/4 h-full animate-slide-in">
          {/*<div className="flex justify-end items-center">*/}
          {/*    <XIcon className="h-6" onClick={() => setToggle(false)}/>*/}
          {/*</div>*/}
          <div className="flex w-full items-center justify-between">
            <Link href={'/'}>
              <a>
                <img src='/images/logo.png' alt='Logo' onClick={() => setToggle(!toggle)} className='h-24' />
              </a></Link>
            {/*<XIcon className="h-12" onClick={() => setToggle(false)}/>*/}
          </div>
          <div className='flex flex-col items-center gap-3 justify-center text-main'>
            <Link href={'/'}>
              <p onClick={() => setToggle(!toggle)} className={router.pathname === '/' ? 'underline text-main text-xl' : 'text-xl hover:scale-125 transition-all hover:text-[#4B5563] cursor-pointer'}>Kezdőlap</p>
            </Link>
            <Link href={'/program'}>
              <p onClick={() => setToggle(!toggle)} className={router.pathname === '/program' ? 'underline text-main text-xl' : 'text-xl hover:scale-125 transition-all hover:text-[#4B5563] cursor-pointer'}>Program</p>
            </Link>
            <Link href={'/booking'}>
              <p onClick={() => setToggle(!toggle)} className={router.pathname === '/booking' ? 'underline text-main text-xl' : 'text-xl hover:scale-125 transition-all hover:text-[#4B5563] cursor-pointer'}>Szállás
              opciók</p></Link>
          </div>
        </div>

      </div>
      }
    </>

  )
}


