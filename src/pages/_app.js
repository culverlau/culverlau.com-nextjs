// import App from 'next/app'

import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  process.env.NODE_ENV === 'production' &&
    useEffect(() => {
      const handleRouteChange = (url) => {
        window.gtag('config', 'UA-72514937-2', {
          page_path: url,
        })
      }
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp
