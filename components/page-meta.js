import Head from 'next/head'

export default function PageMeta({ meta }) {
  return (
    <Head>
      <title>
        {meta.title ? `${meta.title} | Better Dev Screencasts` : 'Better Dev Screencasts'}
      </title>
      <meta
        name="description"
        content={
          meta.description ||
          'A collection of resources to help developers create better screencasts, and level-up their overall video content creation game.'
        }
      />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={
          meta.description ||
          'A collection of resources to help developers create better screencasts, and level-up their overall video content creation game.'
        }
      />
      <meta
        key="og:description"
        property="og:description"
        content={
          meta.description ||
          'A collection of resources to help developers create better screencasts, and level-up their overall video content creation game.'
        }
      />
    </Head>
  )
}
