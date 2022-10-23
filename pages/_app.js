import '../styles/globals.css'
import { ToggleProvider } from '../providers/ToggleProvider'

function MyApp({ Component, pageProps }) {
  return <ToggleProvider><Component {...pageProps} /></ToggleProvider>
}

export default MyApp
