import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Script from 'next/script'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import amplitude from 'amplitude-js'

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
    if (process.env.NODE_ENV === 'development') {
      const amplitudeID = 'bd67c5610eabe93a41b3c147a722eab7'
      amplitude.getInstance().init(amplitudeID)
    }
    if (process.env.NODE_ENV === 'production') {
      const amplitudeID = '65e07ee541e9c14c0cdd91a5b114962a'
      amplitude.getInstance().init(amplitudeID)
    }
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
      {/* {process.env.NODE_ENV === 'development' && (
        <>
          <Script
            id='amplitude'
            strategy='beforeInteractive'
            dangerouslySetInnerHTML={{
              __html: `(function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")
              ;r.type="text/javascript"
              ;r.integrity="sha384-+EO59vL/X7v6VE2s6/F4HxfHlK0nDUVWKVg8K9oUlvffAeeaShVBmbORTC2D3UF+"
              ;r.crossOrigin="anonymous";r.async=true
              ;r.src="https://cdn.amplitude.com/libs/amplitude-8.17.0-min.gz.js"
              ;r.onload=function(){if(!e.amplitude.runQueuedFunctions){
              console.log("[Amplitude] Error: could not load SDK")}}
              ;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)
              ;function s(e,t){e.prototype[t]=function(){
              this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
              var o=function(){this._q=[];return this}
              ;var a=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove"]
              ;for(var c=0;c<a.length;c++){s(o,a[c])}n.Identify=o;var u=function(){this._q=[]
              ;return this}
              ;var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]
              ;for(var p=0;p<l.length;p++){s(u,l[p])}n.Revenue=u
              ;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","enableTracking","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","groupIdentify","onInit","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"]
              ;function v(e){function t(t){e[t]=function(){
              e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}
              for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){
              e=(!e||e.length===0?"$default_instance":e).toLowerCase()
              ;if(!Object.prototype.hasOwnProperty.call(n._iq,e)){n._iq[e]={_q:[]};v(n._iq[e])
              }return n._iq[e]};e.amplitude=n})(window,document);

              amplitude.getInstance().init("bd67c5610eabe93a41b3c147a722eab7");`,
            }}
          />
        </>
      )} */}
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
