import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Script from 'next/script'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 18px;
    line-height: 1.2rem;
    font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
  }
  ul {
    margin: 0;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const handleRouteChange = (url) => {
        window.gtag('config', 'UA-72514937-2', {
          page_path: url,
        })
      }
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [router.events])

  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <Script
            id='ga-analytics'
            async
            strategy='afterInteractive'
            src='https://www.googletagmanager.com/gtag/js?id=UA-72514937-2'
          ></Script>
          <Script
            id='ga-page'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                  dataLayer.push(arguments);
                }
                gtag('js', new Date());

                gtag('config', 'UA-72514937-2', {
                  page_path: window.location.pathname,
                });`,
            }}
          />

          <Script
            id='clarity'
            strategy='beforeInteractive'
            dangerouslySetInnerHTML={{
              __html: `
                (function (c, l, a, r, i, t, y) {
                  c[a] =
                    c[a] ||
                    function () {
                      (c[a].q = c[a].q || []).push(arguments);
                    };
                  t = l.createElement(r);
                  t.async = 1;
                  t.src = 'https://www.clarity.ms/tag/' + i;
                  y = l.getElementsByTagName(r)[0];
                  y.parentNode.insertBefore(t, y);
                })(window, document, 'clarity', 'script', 'augvq8o19t');`,
            }}
          />
        </>
      )}
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
