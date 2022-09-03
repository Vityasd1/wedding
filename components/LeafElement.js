import React from 'react';
import Image from "next/image";

export const LeafElement = ({url,imgSize,imageClass}) => {
    return (
        <div className="flex flex-col items-center justify-end col-span-2 text-main">
            <div className="relative">
                <Image src="/images/leaf.png" width={200} height={200}/>
                <div className={imageClass ? imageClass : "absolute top-16 left-16"}>
                    <Image src={url} width={imgSize ? imgSize : 65} height={imgSize ? imgSize : 65}/>
                </div>
            </div>
        </div>
    );
};


