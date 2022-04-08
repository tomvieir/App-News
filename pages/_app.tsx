import '../styles/globals.scss'

import { AppProps } from 'next/app'
import { Header } from '../src/components/Header'
import { SessionProvider } from 'next-auth/react'
import { ToastContainer } from 'react-toastify'

export function toastCss() {
  return {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  }
  
}

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <SessionProvider session={pageProps.session}>
      <ToastContainer 
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <Header />
      <Component {...pageProps} />
    </SessionProvider >
  )
}

export default MyApp
