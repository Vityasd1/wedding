import '../styles/globals.css'
import { ToggleProvider } from '../providers/ToggleProvider'
import  Head  from 'next/head'

function MyApp({ Component, pageProps }) {
  return <ToggleProvider>
    <Head>
      <title>K&V-Esküvő</title>
      <meta property="og:title" content="Kata és Viktor közös esküvője" key="title" />
    </Head>
    <Component {...pageProps} />
  </ToggleProvider>
}

export default MyApp
