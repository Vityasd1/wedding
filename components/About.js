import React from 'react';
import kata from '../public/images/about/kata.webp'
import vitya from '../public/images/about/vitya.webp'
import Image from 'next/image'

export const About = (props) => {
    return (
        <div className="min-h-screen w-full z-40 bg-[url('/images/bgs.svg')] font-indie bg-cover bg-fixed bg-bottom flex flex-col justify-center text-center items-center text-main">
            <div className="p-2 rounded-2xl bg-white bg-opacity-50">
                <p className="mb-12 text-4xl md:text-5xl ">Örömmel jelentjük: <span className="font-semibold">Összeházasodunk!</span></p>
                <div className="flex items-center justify-center gap-12">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <div className="bg-main rounded-full relative w-32 h-32">
                            <Image src={kata} layout="fill" alt={"Kata"} objectFit="cover" className="rounded-full object-2080"/>
                        </div>
                        <p className="text-xl" >Kata</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <div className="bg-main rounded-full relative w-32 h-32">
                            <Image src={vitya} alt={"Viktor"} layout="fill" objectFit="cover" className="rounded-full object-2080"/>
                        </div>
                        <p className="text-xl">Vitya</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


