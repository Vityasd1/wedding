import React from 'react';
import Image from 'next/image'
import {LeafElement} from "./LeafElement";
import {ProgramContent} from "./ProgramContent";
import { TimelineItem } from './TimelineItem'

export const Program = (props) => {
    return (
        <>
           <div>
               <div className="md:hidden flex flex-col w-full items-center justify-center border-t-4 border-b-4 border-main font-indie gap-4 p-12 text-main ">
                   <LeafElement imgSize={65} url={"/images/templom.png"}/>
                   <ProgramContent program={"Templomi szertartás"} time={"16:00"} location={"Ajka"}/>
                   <LeafElement imgSize={95} url={"/images/polgari.png"} imageClass={"absolute top-12 left-12"}/>
                   <ProgramContent program={"Polgári szertartás"} time={"17:00"} location={["Ajka",<br key={2}/>, "Nomádia Park"]}/>
                   <LeafElement imgSize={65} url={"/images/lagzi.png"} />
                   <ProgramContent program={"Lagzi"} location={["Ajka",<br key={1}/>, "Nomádia Park"]}/>
               </div>
               <div className="hidden md:grid grid-cols-6 p-12 text-main content-start md:border-4 border-main font-indie">
                   <LeafElement imgSize={65} url={"/images/templom.png"}/>
                   <LeafElement imgSize={95} url={"/images/polgari.png"} imageClass={"absolute top-12 left-12"}/>
                   <LeafElement imgSize={65} url={"/images/lagzi.png"} />
                   <ProgramContent program={"Templomi szertartás"} time={"16:00"} location={"Ajka"}/>
                   <ProgramContent program={"Polgári szertartás"} time={"17:00"} location={["Ajka",<br key={2}/>, "Nomádia Park"]}/>
                   <ProgramContent program={"Lagzi"} time={["",<br key={3}/>,""]} location={["Ajka",<br key={1}/>, "Nomádia Park"]}/>
               </div>
               <section id="timeline">
                    <TimelineItem time={'2014.06.15'} url={'url(images/timeline_fuge.jpg)'} title={'Első randi'} description={"Közös osztályba jártunk, ott találkoztunk először, de csak 11. év végén találtunk igazán egymásra."}/>
                    <TimelineItem time={'2019.04.02'} url={'url(images/timeline_fuge.jpg)'} title={'Összeköltözés'} description={"Az egyetem vége felé úgy döntöttünk, hogy megpróbáljuk elkezdeni közös életünket."}/>
                    <TimelineItem time={'2021.05.07'} url={'url(images/timeline_fuge.jpg)'} title={'Füge'} description={"Csatlakozott a csapatunkhoz egy kis szeretetgombóc."}/>
                    <TimelineItem time={'2022.02.05'} url={'url(images/timeline_eljegyzes.jpg)'} title={'Eljegyzés'} description={"A Duna partján egy csodaszép napon, megtörtént az eljegyzés."}/>
                    <TimelineItem time={'2023.05.06'} url={'url(images/timeline_wedding.JPG)'} title={'Esküvő'} description={"A történet folytatódik..."}/>

               </section>

           </div>
        </>
    );
};


