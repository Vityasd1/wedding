import React from 'react'
import { Header } from '../components/Header'
import { Timer } from '../components/Timer'

const Accommodations = [
  {
    title: 'Fitromax Szabadidőközpont és Panzió Ajka',
    infos: [
      '8400 Ajka, Rákóczi u. 14.',
      'Tel.: +36-20/9767-663',
      'E-mail: info@fitromaxwellness.hu',
    ],
    link: 'http://fitromaxwellness.hu/',
  },
  {
    title: 'Volcz birtok Ajka',
    infos: [
      '8400 Ajka, Bajcsy-Zsilinszky u.',
      'Tel.:  + 36 70 409 5320',
      'Email: volczbirtok@gmail.com',
    ],
    link: 'https://volczbirtokajka.hu/index.php/szallas/',
  },
  {
    title: 'Ajka kemping',
    infos: [
      '8400 Ajka, Városliget 1320/1. hrsz.',
      'Tel.: +36-88-212-173, 211-330',
      'E-mail: kemping@kristalyfurdo.hu',
    ],
    link: 'http://www.kristalyfurdo.hu/site/?f=121&p=541',
  },
  {
    title: 'Hotel Ajka',
    infos: [
      '8400 Ajka, Szabadság tér 8.',
      'Telefon: +36 (30) 298 7451, +36 (88) 211 393',
      'Email: hotelajka@gmail.com',
    ],
    link: 'https://hotelajka.hu/',
  },
  {
    title: 'Hotel Kristály Ajka',
    infos: [
      '8400 Ajka, Korányi F. u. 20.',
      'Tel.: +36-30/607-1661',
      'E-mail: recepcio@kristalyhotelajka.hu',
    ],
    link: 'https://kristalyhotelajka.hu/',
  },
  {
    title: 'Hubertus túristaszálló Ajka',
    infos: [
      '8400 Ajka külterület',
      'Tel.: +36/30/3007-009',
      'E-mail: Turisztika@verga.hu',
    ],
    link: 'https://szallas.hu/hubertus-turistaszallo-ajka?checkin=2023-05-06&checkout=2023-05-07&ref=list&adults=2&provision=1&listIndex=4',
  },
  {
    title: 'Dzsigoló apartman Ajka',
    infos: [
      '8400 Ajka, Liszt Ferenc utca 27.',
    ],
    link: 'https://szallas.hu/dzsigolo-apartmant-ajka?checkin=2023-05-06&checkout=2023-05-07&ref=list&adults=2&provision=1&listIndex=5&roomtypes=2073475:784183:2',
  },
  {
    title: 'Takaros Vendéglő Kislőd',
    infos: [
      '8446 Kislőd, Kossuth Lajos utca 1',
      'Tel.: +36 70 774-6271',
      'E-mail: takarosvendeglo@gmail.com',
    ],
    link: 'http://www.takarosvendeglo.hu/#',
  }, {
    title: 'György Vendégház Magyarpolány',
    infos: [
      '8449 Magyarpolány, Kossuth utca 21.',
    ],
    link: 'https://szallas.hu/gyorgy-vendeghaz-magyarpolany',
  }, {
    title: 'Pajta szálló Magyarpolány',
    infos: [
      '8449 Magyarpolány, Bajcsy utca 35.',
    ],
    link: 'https://szallas.hu/pajta-szallo-magyarpolany',
  },
]

export const Accommodation = ({ title, infos, link }) => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="grid grid-rows-6 grid-flow-col gap-2 border border-main rounded bg-white bg-opacity-80 w-80">
      <div className="row-span-2 px-3 flex items-center justify-center text-center text-xl text-main font-semibold">
        {title}
      </div>
      <div className="row-span-1 flex items-center justify-center">
        <button onClick={() => openInNewTab(link)} className="rounded p-3 bg-main text-white text-lg">
          Megnézem!
        </button>
      </div>
      <div className="row-span-3 text-center text-lg flex flex-col items-center justify-center">
        {infos.map((el, index) => {
          return <p key={index}>{el}</p>
        })

        }
      </div>
    </div>
  )
}

export default function Booking () {
  return (
    <>
      <Header />
      <div className="bg-[url('/images/bgs.svg')] bg-fixed border-t-4 border-main">
        <div
          className="text-main container mx-auto bg-white bg-opacity-80 py-2 rounded-lg font-indie flex flex-col text-center items-center justify-center my-12">
          <h1 className="text-3xl font-semibold mb-4">Közelben lévő szállások</h1>
          <p className="text-lg">Kedves leendő vendégeink ezen az oldalon találjátok a környéken foglalható szállások
            listáját. A helyszínen
            szállás lehetőség <strong>NINCS!</strong>
            <br />Ajka és Veszprém (és környéke) között Transfer fog közlekedni az est folyamán.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12 py-20">
          {Accommodations.map(el => (
            <Accommodation key={el.title} title={el.title} link={el.link} infos={el.infos} />
          ))

          }
        </div>

      </div>

      <Timer />
    </>
  )
};


