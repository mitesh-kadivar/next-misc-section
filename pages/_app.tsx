import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import '@/styles/main.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
      <>
        <Header />
          <Component {...pageProps} />
        <Footer />
      </>
  )
}
