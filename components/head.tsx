import Head from 'next/head'
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function HeadComponent() {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <GoogleAnalytics trackPageViews gaMeasurementId="G-HCBHT8CPYS" />
    </Head>
  )
}
