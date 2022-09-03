import Head from 'next/head'
import Image from 'next/image'
import {Header} from "../components/Header";
import {Welcome} from "../components/Welcome";
import {About} from "../components/About";
import {Program} from "../components/Program";
import {Timer} from "../components/Timer";
import {Map} from "../components/Map";

export default function Home() {
    return (
        <div>
            <Header/>
            <Welcome/>
            <About/>
            <Program/>
            <Map/>
            <Timer/>
        </div>
    )
}
