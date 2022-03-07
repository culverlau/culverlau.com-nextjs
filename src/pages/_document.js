import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap'
        />
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <script
              async
              src='https://www.googletagmanager.com/gtag/js?id=UA-72514937-2'
            ></script>
            <script
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

            <script
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
