import React from 'react';
import {Header} from "../components/Header";
import {Timer} from "../components/Timer";

export default function Booking(){
    return (
        <>
            <Header/>
            <div className="flex flex-col items-center justify-center">
                <h1>Közelben lévő szállások</h1>

            </div>
            <Timer/>
        </>
    );
};


