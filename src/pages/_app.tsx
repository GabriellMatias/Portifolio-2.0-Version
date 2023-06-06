import { Loading } from '@/components/Loading'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Poppins } from 'next/font/google'
import Router from 'next/router'
import React from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
})

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false)
  React.useEffect(() => {
    const start = () => {
      console.log('start')
      setLoading(true)
    }
    const end = () => {
      console.log('finished')
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])
  return (
    <main className={poppins.className}>
      {loading ? <Loading /> : <Component {...pageProps} />}
    </main>
  )
}
