import Head from 'next/head'
import { useRouter } from 'next/router'
import { GoogleAnalytics } from 'nextjs-google-analytics'

import '../styles/globals.css'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import socialCardLarge from '/public/images/social-large.jpg'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  if (router.pathname.startsWith('/keystatic')) {
    return <Component {...pageProps} />
  }
  return (
    <div className="flex h-full min-h-screen flex-col">
      <Head>
        <meta key="twitter:site" name="twitter:site" content="@simonswiss" />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://betterdevscreencasts.com${socialCardLarge.src}`}
        />
        <meta key="twitter:creator" name="twitter:creator" content="@simonswiss" />
        <meta
          key="og:url"
          property="og:url"
          content={`https://betterdevscreencasts.com${router.pathname}`}
        />
        <meta key="og:type" property="og:type" content="article" />
        <meta
          key="og:image"
          property="og:image"
          content={`https://betterdevscreencasts.com${socialCardLarge.src}`}
        />

        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/feeds/feed.xml" />
        <link rel="alternate" type="application/atom+xml" title="Atom 1.0" href="/feeds/atom.xml" />
        <link rel="alternate" type="application/json" title="JSON Feed" href="/feeds/feed.json" /> */}
      </Head>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-HCBHT8CPYS" />
      <Navigation />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
