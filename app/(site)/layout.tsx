import { GoogleAnalytics } from 'nextjs-google-analytics'

import '@/styles/globals.css'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import socialCardLarge from '/public/images/social-large.jpg'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous"></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,700&display=swap"
        />
        <meta key="twitter:site" name="twitter:site" content="@simonswiss" />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://betterdevscreencasts.com${socialCardLarge.src}`}
        />
        <meta key="twitter:creator" name="twitter:creator" content="@simonswiss" />
        <meta key="og:url" property="og:url" content={`https://betterdevscreencasts.com`} />
        <meta key="og:type" property="og:type" content="article" />
        <meta
          key="og:image"
          property="og:image"
          content={`https://betterdevscreencasts.com${socialCardLarge.src}`}
        />

        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gradient-to-b from-transparent via-transparent to-cyan-100 text-slate-900">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* <GoogleAnalytics trackPageViews gaMeasurementId="G-HCBHT8CPYS" /> */}
      </body>
    </html>
  )
}
