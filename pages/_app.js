import Head from 'next/head'
import { useRouter } from 'next/router'

import '../styles/globals.css'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import socialCardLarge from '../public/images/social-large.png'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <div className="flex h-full min-h-screen flex-col">
      <Head>
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:site" name="twitter:site" content="@simonswiss" />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://betterdevscreencasts.com${socialCardLarge}`}
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
          content={`https://betterdevscreencasts.com${socialCardLarge}`}
        />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/feeds/feed.xml" />
        <link rel="alternate" type="application/atom+xml" title="Atom 1.0" href="/feeds/atom.xml" />
        <link rel="alternate" type="application/json" title="JSON Feed" href="/feeds/feed.json" /> */}
      </Head>
      <Navigation />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
