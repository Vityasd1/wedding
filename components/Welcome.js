import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Typed from 'typed.js'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import us1 from '../public/images/carousel/elso.webp'
import us2 from '../public/images/carousel/masodik.webp'
import us3 from '../public/images/carousel/harmadik.webp'
import us4 from '../public/images/carousel/negyedik_.webp'
import us5 from '../public/images/carousel/otidik.webp'
import us6 from '../public/images/carousel/hatodik.webp'
import us7 from '../public/images/carousel/hetedik.webp'
import us8 from '../public/images/carousel/kilencedik.webp'
import us9 from '../public/images/carousel/elso.webp'
import us0 from '../public/images/carousel/tizedik.webp'
import { Hearts } from 'react-loader-spinner'

export const Slider = () => (
  <Swiper
    modules={[ Autoplay ]}
    slidesPerView={3}
    autoplay={{ delay: 3000 }}

    className={'hidden lg:flex h-full w-full mb-0 pb-0'}
  >
    <SwiperSlide><Image src={us1} priority={true} className="grayscale-[80%]" layout={'fill'}
                        objectFit={'cover'} /></SwiperSlide>
    <SwiperSlide><Image src={us2} priority={true} className="grayscale-[80%]" layout={'fill'}
                        objectFit={'cover'} /></SwiperSlide>
    <SwiperSlide><Image src={us3} priority={true} className="grayscale-[80%] object-[74%]" layout={'fill'}
                        objectFit={'cover'} /></SwiperSlide>
    <SwiperSlide><Image src={us4} priority={true} className="grayscale-[80%]" layout={'fill'}
                        objectFit={'cover'} /></SwiperSlide>
    <SwiperSlide><Image src={us5} priority={true} className="grayscale-[80%]" layout={'fill'}
                        objectFit={'cover'} /></SwiperSlide>
    <SwiperSlide><Image src={us6} priority={true} className="grayscale-[80%]" layout={'fill'}
                        objectFit={'cover'} /></SwiperSlide>
    <SwiperSlide><Image src={us7} className="grayscale-[80%]" layout={'fill'}
                        objectFit={'cover'} /></SwiperSlide>
    <SwiperSlide><Image src={us8} className="grayscale-[80%]" layout={'fill'}
                        objectFit={'cover'} /></SwiperSlide>
    <SwiperSlide><Image src={us9} className="grayscale-[80%]" layout={'fill'}
                        objectFit={'cover'} /></SwiperSlide>
    <SwiperSlide><Image src={us0} className="grayscale-[80%]" layout={'fill'}
                        objectFit={'cover'} /></SwiperSlide>
  </Swiper>
)


export const Welcome = (props) => {
  const el = useRef(null)
  const typed = useRef(null)
  const [ loading, setLoading ] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])

  useEffect(() => {
    if (!loading) {
      const options = {
        strings: [
          'Ajka, 2023.05.06',
        ],
        typeSpeed: 50,
        backSpeed: 50,
      }

      typed.current = new Typed(el.current, options)

      return () => {

        typed.current.destroy()
      }
    }
  }, [ loading ])

  return (
    <>
      {!loading &&
      <div className="border-t-4 border-b-4 md:border-4 border-main relative font-indie h-[700px] mb-0 pb-0">
        <div className="hidden lg:flex items-center justify-center h-full ">
         <Slider/>
        </div>
        <div className="flex lg:hidden items-center justify-center h-full ">
          <Slider/>
        </div>
        <div className="absolute rounded max-w-md mr-auto ml-auto bottom-20 left-0 z-10 right-0">

          <p className="text-center text-white border-t border-b bg-black/50 p-3 text-6xl " ref={el} />
        </div>
      </div>
      }
      {loading &&
      <div className="border-t-4 border-b-4 md:border-4 border-main flex items-center justify-center h-[700px] mb-0 pb-0">
        <Hearts
          height="150"
          width="150"
          radius="9"
          color="green"
          ariaLabel="loading"
        />
      </div>
      }
    </>
  )
}


