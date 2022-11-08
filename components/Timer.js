import React, {useEffect, useState} from 'react';
import Countdown from "react-countdown";

export const Timer = (props) => {
    const [stable, setStable] = useState(false);
    const date = new Date(2023, 4, 6, 16, 0, 0, 0);
    useEffect(() => {
        setStable(true)
    }, []);

    const renderer = ({hours, minutes, seconds, days, completed}) => {
        const animateMinutes = seconds === 0;
        const animateHours = minutes === 0 && seconds === 0;
        const animateDays = hours === 0 && minutes === 0 && seconds === 0;
        if (completed) {
            // Render a completed state
            return <p>Ottvagy!</p>
        } else {
            // Render a countdown
            return (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center mt-12 mb-12 text-white ">
                    <div className="flex relative flex-col p-2 bg-main rounded-2xl max-w-40 text-neutral-content">
                        {/*<div className="w-4 h-4 rounded-full absolute top-[40%] -left-1 bg-main "></div>*/}
                        {/*<div className="w-4 h-4 rounded-full absolute top-[40%] -right-1 bg-main "></div>*/}
                        <span className="countdown font-mono text-4xl">
                          <span className={animateDays ? "animateMinutes" : ""}>{days}</span>
                        </span>
                        <span className={"text-2xl"}>nap</span>
                    </div>
                    <div className="flex relative flex-col p-2 bg-main rounded-2xl max-w-40 text-neutral-content">
                        {/*<div className="w-4 h-4 rounded-full absolute top-[40%] -left-1 bg-main "></div>*/}
                        {/*<div className="w-4 h-4 rounded-full absolute top-[40%] -right-1 bg-main "></div>*/}
                        <span className="countdown font-mono text-4xl">
                          <span className={animateHours ? "animateMinutes" : ""}>{hours}</span>
                        </span>
                      <span className={"text-2xl"}>óra</span>
                    </div>
                    <div className="flex relative flex-col p-2 bg-main rounded-2xl max-w-40 text-neutral-content">
                        {/*<div className="w-4 h-4 rounded-full absolute top-[40%] -left-1 bg-main "></div>*/}
                        {/*<div className="w-4 h-4 rounded-full absolute top-[40%] -right-1 bg-main "></div>*/}
                        <span className="countdown font-mono text-4xl">
                          <span className={animateMinutes ? "animateMinutes" : ""}>{minutes}</span>
                        </span>
                        <span className={"text-2xl"}>perc</span>
                    </div>
                    <div className="flex flex-col p-2 bg-main rounded-2xl max-w-40 relative text-neutral-content">
                        {/*<div className="w-4 h-4 rounded-full absolute top-[40%] -left-1 bg-main "></div>*/}
                        {/*<div className="w-4 h-4 rounded-full absolute top-[40%] -right-1 bg-main "></div>*/}
                        <span className="countdown font-indie text-4xl">
                          <span className="animate">{seconds}</span>
                        </span>
                        <span className={"text-2xl"}>másodperc</span>
                    </div>
                </div>
            )
        }
    };


    return (
        <>
            {stable &&
            <div className="flex flex-col border-4 border-main items-center justify-center text-main text-3xl pb-12 font-indie pt-12">
                <p className="text-center">
                    Már csak, ennyi van hátra
                </p>
                <Countdown renderer={renderer} date={'2023-05-06T16:00:00'}>

                </Countdown>
                <p className="text-center">
                    a nagy napig!
                </p>
            </div>
            }
        </>

    );
};


