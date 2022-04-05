import '../styles/globals.scss'

import { AppProps } from 'next/app'
import { Header } from '../src/components/Header'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider >
  )
}

export default MyApp
