import React,{useRef,useEffect} from 'react';
import Image from 'next/image'
import Typed from "typed.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectFade,EffectCube,EffectCoverflow,EffectFlip,EffectCards,EffectCreative  } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

export const Welcome = (props) => {
    const el = useRef(null);
    // Create reference to store the Typed instance itself
    const typed = useRef(null);
    useEffect(() => {
        const options = {
            strings: [
                "Ajka, 2023.05.06"
            ],
            typeSpeed: 50,
            backSpeed: 50,
        };

        typed.current = new Typed(el.current, options);

        return () => {

            typed.current.destroy();
        }
    }, [])

    return (
        <>
            <div className="border-t-4 border-b-4 md:border-4 border-main font-indie h-[700px] mb-0 pb-0">
                <div className="flex items-center justify-center h-full ">
                    <Swiper
                         modules={[Autoplay]}
                        slidesPerView={1}
                        autoplay={{ delay: 3000 }}
                        className={"h-full relative w-full mb-0 pb-0"}
                    >
                        <SwiperSlide><Image src={"/images/us7.jpg"} className="object-center grayscale-[80%] " layout='fill' objectFit='cover'></Image></SwiperSlide>
                        <SwiperSlide><Image src={"/images/us2.jpg"} className="object-center grayscale-[80%]" layout='fill' objectFit='contain'></Image></SwiperSlide>
                        <SwiperSlide><Image src={"/images/us3.jpg"} className="object-32 grayscale-[80%]" layout='fill' objectFit='cover'></Image></SwiperSlide>
                        <SwiperSlide><Image src={"/images/us4.jpg"} className="object-center grayscale-[80%]" layout='fill' objectFit='contain'></Image></SwiperSlide>
                        <SwiperSlide><Image src={"/images/us5.jpg"} className="grayscale-[80%] object-40" layout='fill'  objectFit='cover'></Image></SwiperSlide>
                        <SwiperSlide><Image src={"/images/us6.png"} className="grayscale-[80%] object-32" layout='fill' objectFit='cover'></Image></SwiperSlide>
                        <SwiperSlide><Image src={"/images/us1.jpeg"} className="object-32 grayscale-[80%]" layout='fill' objectFit='cover'></Image></SwiperSlide>
                    </Swiper>
                    {/*<Image src={"/images/logo.png"}  width={600} height={600}></Image>*/}
                </div>
                <p className="text-center text-main text-6xl mb-12 absolute bottom-40 z-10 left-[43%]" ref={el} ></p>
            </div>
        </>
    );
};


