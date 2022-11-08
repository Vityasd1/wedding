import React from 'react';
import {Header} from "../components/Header";
import {Timer} from "../components/Timer";
import Image from 'next/image'
import {ProgramComponent} from "../components/ProgramComponent";

export const Program = (props) => {
    return (
        <>
            <div className="flex flex-col h-screen">
                    <Header/>
                <div className="flex flex-col items-center h-full justify-center bg-[url('/images/bgs.svg')] border-t-4 border-main ">
                    <div className={"p-2 rounded-2xl bg-white bg-opacity-50"}>
                        <ProgramComponent text={"Templomi szertartás"} time={"16:00"} src={"/images/church1.png"}/>
                        <ProgramComponent text={"Polgári szertartás"} time={"17:00"} src={"/images/ring1.png"}/>
                        <ProgramComponent text={"Fotózás"} time={"17:30"} src={"/images/camera1.png"}/>
                        <ProgramComponent text={"Büféasztalos vacsora"} time={"18:00"} src={"/images/dinner.png"}/>
                        <ProgramComponent text={"Torta"} time={"22:00"} src={"/images/cake1.png"}/>
                        <ProgramComponent text={"Menyecske tánc"} time={"24:00"} src={"/images/dance1.png"}/>
                    </div>
                </div>
            </div>
            {/*<Timer/>*/}
        </>
    );
};

export default Program


