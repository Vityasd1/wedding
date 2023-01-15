import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Timer } from '../components/Timer'

export default function Infos () {

  return (
    <>
      <Header />
      <div className="bg-[url('/images/bgs.svg')] bg-fixed border-t-4 border-main pb-1">
        <div
          className="container bg-white mx-auto rounded-lg text-main bg-opacity-80 text-center font-indie flex flex-col text-center items-center justify-center my-12 py-3 gap-3 ">
          <h1 className="text-3xl font-indie mb-4 font-semibold">Kedves leendő vendégeink!</h1>
          <p className="text-xl">Ezen az oldalon összefoglalva találtok pár hasznos információt az esküvőnkkel kapcsolatban.</p>
        </div>
        <div
          className="container bg-white mx-auto rounded-lg text-main bg-opacity-80 flex flex-col justify-center  p-6 gap-3 mb-12">
          <h1 className="font-semibold text-xl underline">Helyszínek/időpontok:</h1>
          <p className="pl-6">
            Templomi helyszín: Ajka Fő út 2, Jézus szíve templom <span className="font-semibold">16:00</span>
          </p>
          <p className="pl-6">
            Polgári szertartás helyszín: Ajka Ipari Park Északi szektor III/1, Nomádia park <span className="font-semibold">17:00</span>
          </p>
          <p className="pl-6">
            Lagzi helyszín: Ajka Ipari Park Északi szektor III/1, Nomádia park
          </p>
          <h1 className="font-semibold mt-6 text-xl underline">Szállás/Közlekedés:</h1>
          <p className="pl-6">
            A helyszínen szállás lehetőség <span className="font-semibold">NINCS!</span> Közelben található lehetőségek a szállás menüpont alatt találhatóak.
          </p>
          <p className="pl-6">
            Parkoló rendelkezésre áll a helyszínen.
          </p>
          <p className="pl-6">
            Ajka és Veszprém (és környéke) között transfer fog közlekedni az est folyamán.
          </p>
        </div>

        <div
          className="container bg-white mx-auto rounded-lg text-main bg-opacity-80 flex flex-col justify-center  p-6 gap-3 mb-12">
          <iframe src="https://drive.google.com/file/d/1Rfnkri-TUi1mAo_fAUlyHMiwoLDJIahP/preview" className="w-full" height="690" allow="autoplay"></iframe>
        </div>
      </div>
      <Timer />
    </>
  )
}


