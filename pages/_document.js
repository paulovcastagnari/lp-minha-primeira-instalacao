import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* Google Ads Script - Google Ads */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-412710853"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-412710853');
              `,
            }}
          />
          {/* Google Ads Scripts - Google Ads */}

          {/* Must have tags */}
          <meta charSet="utf-8" />
          {/*  Must have tags end*/}

          {/* Android */}
          <meta name="theme-color" content="#212121" />
          <meta name="mobile-web-app-capable" content="yes" />
          {/* Android end */}

          {/* iOS */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="Energia Lucrativa" />
          {/* iOS end */}

          {/* Windows */}
          <meta name="msapplication-TileColor" content="#212121" />
          <meta
            name="msapplication-TileImage"
            content="energia-lucrativa-icon-144x144.png"
          />
          {/* Windows end */}

          {/* Facebook domain verification meta */}
          <meta
            name="facebook-domain-verification"
            content="b5bcjdnswaa4yaeeipf79p20gmstfk"
          />
          {/* Facebook domain verification meta end */}

          {/* Favicon link */}
          <link rel="icon" href="/favicon.ico" />
          {/* Favicon link end */}

          {/* Apple icons links */}
          <link
            rel="apple-touch-icon"
            href="/energia-lucrativa-apple-icon-57x57.png"
            sizes="57x57"
          />
          <link
            rel="apple-touch-icon"
            href="/energia-lucrativa-apple-icon-60x60.png"
            sizes="60x60"
          />
          <link
            rel="apple-touch-icon"
            href="/energia-lucrativa-apple-icon-72x72.png"
            sizes="72x72"
          />
          <link
            rel="apple-touch-icon"
            href="/energia-lucrativa-apple-icon-76x76.png"
            sizes="76x76"
          />
          <link
            rel="apple-touch-icon"
            href="/energia-lucrativa-apple-icon-114x114.png"
            sizes="114x114"
          />
          <link
            rel="apple-touch-icon"
            href="/energia-lucrativa-apple-icon-120x120.png"
            sizes="120x120"
          />
          <link
            rel="apple-touch-icon"
            href="/energia-lucrativa-apple-icon-144x144.png"
            sizes="144x144"
          />
          <link
            rel="apple-touch-icon"
            href="/energia-lucrativa-apple-icon-152x152.png"
            sizes="152x152"
          />
          <link
            rel="apple-touch-icon"
            href="/energia-lucrativa-apple-icon-180x180.png"
            sizes="180x180"
          />
          {/* Apple icons links end */}

          {/* Manifest json link */}
          <link rel="manifest" href="/manifest.json" />
          {/* Manifest json link end */}

          {/* Google fonts links */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;500;700&family=Roboto:wght@100;400;700;900&display=swap"
            rel="stylesheet"
          />
          {/* Google font links end */}

          {/* Facebook pixel scripts */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '507124227249948');
            fbq('track', 'PageView');
              `,
            }}
          />
          {/* End Facebook pixel scripts */}
        </Head>
        <body itemScope itemType="https://schema.org/WebPage">
          <div id="fb-root"></div>
          <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0"
            nonce="WqePknsJ"
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
