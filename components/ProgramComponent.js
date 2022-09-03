import React from 'react';
import Image from "next/image";

export const ProgramComponent = ({time,text,src}) => {
    return (
        <div className="flex sm:gap-6 md:gap-12 items-center  h-16 md:h-24 justify-center text-main text-2xl">
            <div className="flex-none z-0">
                <Image width={56} height={56} src={src} className="z-0"/>
            </div>
            <div className="flex border-2 ml-4 sm:ml-0 border-main h-full">

            </div>
            <div className="flex w-32 justify-center items-center align-center">
                {time}
            </div>
            <div className="flex justify-center md:justify-start w-32 text-center md:text-left md:w-64">
                {text}
            </div>
        </div>
    );
};


