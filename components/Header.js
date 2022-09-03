import React, {useState} from 'react';
import {MenuIcon, XIcon} from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'

export const Header = (props) => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className={"hidden md:flex flex-row justify-evenly items-center h-24 text-main"}>
                <p className={"hover:scale-125 transition-all hover:text-[#4B5563] cursor-pointer"}>Meghívó</p>
                <Link href={"/program"}><p className={"hover:scale-125 transition-all hover:text-[#4B5563] cursor-pointer"}>Program</p></Link>
                <Link href={"/"}>
                <Image className={"cursor-pointer"} src={"/images/logo.png"} width={100} height={100}/>
                </Link>
                <Link href={"/booking"}><p className={"hover:scale-125 transition-all hover:text-[#4B5563] cursor-pointer"}>Szállás opciók</p></Link>
                <p className={"hover:scale-125 transition-all hover:text-[#4B5563] cursor-pointer"}>Hasznos infók</p>
            </div>
            <div className="flex md:hidden justify-between items-center p-3">
                <MenuIcon onClick={() => setToggle(!toggle)} className={"h-6 cursor-pointer text-black"}/>
                <img src="/logo192.png" alt="Logo" className="h-6"/>
            </div>

            {toggle &&
            <div className="md:hidden z-10 fixed h-full bg-gray-300 w-3/4 animate-slide-in">
                {/*<div className="flex justify-end items-center">*/}
                {/*    <XIcon className="h-6" onClick={() => setToggle(false)}/>*/}
                {/*</div>*/}
                <div className="flex flex-col items-center gap-3 justify-center text-main">
                    <p>Meghívó</p>
                    <p>Program</p>
                    <p>Szállás opciók</p>
                    <p>Hasznos infók</p>
                </div>
            </div>
            }
                </>

                );
            };


