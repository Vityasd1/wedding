import React, {useState} from 'react';
import Image from 'next/image'
const focusedBtn = "w-40 p-3 m-3 md:m-0 rounded text-white border-2 border-main active:border-none bg-main focus:transition-all"
const normalBtn = "w-40 p-3 m-3 md:m-0 rounded hover:bg-main hover:text-white transition ease-in duration-500 border border-main text-main focus:transition-all"
export const Map = (props) => {

    const [tab, setTab] = useState(0);

    return (
        <div className="pt-12 w-full z-40 bg-[url('/images/bgs.svg')] font-indie bg-cover bg-fixed bg-bottom">
            <div className="text-center font-indie text-6xl text-main">
                Helyszínek
            </div>
            <div className="flex flex center justify-center items-center mb-2 gap-2 mt-12">
                <button onClick={() => setTab(0)} className={tab === 0 ? focusedBtn : normalBtn} >Templomi</button>
                <button onClick={() => setTab(1)} className={tab === 1 ? focusedBtn : normalBtn} >Polgári</button>
            </div>
            <div className="pb-9">
                <div className="p-3 bg-white bg-opacity-75  container mx-auto rounded">
                    {tab === 0 &&
                    <div className="flex flex-col md:flex-row container items-center gap-6 mx-auto mt-6">
                        <div className="flex md:flex-1 gap-3 font-indie text-main md:ml-12 text-center">
                            <div className="flex flex-col items-center justify-center h-full">
                                <Image src={"/images/templom.png"} width={50} height={50}/>
                                <p className="text-3xl">Templomi helyszín</p>
                                <p className="text-xl font-semibold">Ajka</p>
                                <p className="text-xl">Jézus szíve templom</p>
                                <p className="text-xl"> Fő út 2</p>
                            </div>
                        </div>
                        <div className="flex w-full md:w-3/4 md:mr-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18264.166197068673!2d17.533863405134806!3d47.11897427707042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476973c3388820dd%3A0xa2cc92431c742638!2sAjkai%20J%C3%A9zus%20sz%C3%ADve%20templom!5e0!3m2!1shu!2shu!4v1654260681572!5m2!1shu!2shu"
                                className="md:h-600 w-4/5 mx-auto md:w-full" allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    }
                    {tab === 1 &&
                    <div className="flex flex-col md:flex-row container items-center gap-6 mx-auto mt-6">
                        <div className="flex md:flex-1 gap-3 font-indie text-main md:ml-12 text-center">
                            <div className="flex flex-col items-center justify-center h-full">
                                <Image src={"/images/lagzi.png"} width={50} height={50}/>
                                <p className="text-3xl">Lagzi helyszín</p>
                                <p className="text-xl font-semibold">Ajka</p>
                                <p className="text-xl">Nomádia park</p>
                                <p className="text-xl">Ipari Park Északi szektor III/1</p>
                            </div>
                        </div>
                        <div className="flex w-full md:w-3/4 md:mr-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18264.166197068673!2d17.533863405134806!3d47.11897427707042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476971dfade00365%3A0x2c5ab346ec8a9f8b!2sNom%C3%A1dia%20Rendezv%C3%A9nypark!5e0!3m2!1shu!2shu!4v1654262486921!5m2!1shu!2shu"
                                className="md:h-600 w-4/5 mx-auto md:w-full" allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    }
                </div>
            </div>

        </div>



    )
    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: "AIzaSyCMWK-pCysnmu3uqz4be5YgJPH-yRjQixs"
    // });
    // const [map, setMap] = useState(null)
    //
    // const onLoad = React.useCallback(function callback(map) {
    //     // const bounds = new window.google.maps.LatLngBounds(center);
    //     // map.fitBounds(bounds);
    //     setMap(map)
    // }, [])
    //
    // const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null)
    // }, [])
    //
    // return isLoaded ? (
    //     <div className="min-h-screen w-full">
    //         <GoogleMap
    //             mapContainerClassName="w-3/4 h-56"
    //             center={center}
    //             zoom={10}
    //             onLoad={onLoad}
    //             onUnmount={onUnmount}
    //         >
    //             { /* Child components, such as markers, info windows, etc. */ }
    //             <></>
    //         </GoogleMap>
    //     </div>
    // ) : <></>;
};


