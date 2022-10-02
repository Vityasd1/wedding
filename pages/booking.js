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
    title: 'Hajnal panzió Ajka-Bakonygyepes',
    infos: [
      '8448 Ajka-Bakonygyepes, Fő út 135.',
      'Tel.: +36-88-501-740',
      'Email: rozsa.hajni@gmail.com'
    ],
    link: 'http://www.iranymagyarorszag.hu/hajnal_panzio_es_etterem/I050910/',
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
]

export const Accommodation = ({ title, infos,places,link }) => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="grid grid-rows-6 grid-flow-col gap-2 border border-main rounded bg-white w-80">
      <div className="row-span-2 px-3 flex items-center justify-center text-center text-xl text-main font-semibold">
        {title}
      </div>
      <div className="row-span-1 flex items-center justify-center">
        <button onClick={() => openInNewTab(link)} className="rounded p-3 bg-main text-white text-lg">
          Megnézem!
        </button>
      </div>
      <div className="row-span-3 text-center text-lg">
        {infos.map((el) => {
          return <p>{el}</p>
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
      <div className="text-main container mx-auto bg-white bg-opacity-80 py-2 rounded-lg font-indie flex flex-col text-center items-center justify-center my-12">
        <h1 className="text-3xl mb-4">Közelben lévő szállások</h1>
        <p className="text-lg">Kedves leendő vendégeink ezen az oldalon találjátok a környéken foglalható szállások listáját. A helyszínen
          szállás lehetőség <strong>NINCS!</strong>
          <br/>Ajka és Veszprém (és környéke) között Transfer fog közlekedni az est folyamán.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-12 py-20">
        {Accommodations.map(el => (
            <Accommodation title={el.title} link={el.link} infos={el.infos} />
        ))

        }
      </div>

      </div>

      <Timer />
    </>
  )
};


