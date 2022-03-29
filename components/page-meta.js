import Head from 'next/head'

import socialImageLarge from '/public/images/social-large.jpg'

export default function PageMeta({ meta }) {
  return (
    <Head>
      <title>
        {meta.title ? `${meta.title} | Better Dev Screencasts` : 'Better Dev Screencasts'}
      </title>
      <meta
        name="twitter:title"
        content={meta.title ? `${meta.title} | Better Dev Screencasts` : 'Better Dev Screencasts'}
        key="twitter:title"
      />
      <meta
        key="description"
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

      <meta name="twitter:creator" content="@simonswiss" key="twitter:creator" />

      {meta.image ? (
        <>
          <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
          <meta
            name="twitter:image"
            key="twitter:image"
            content={`https://betterdevscreencasts.com${meta.image.src}`}
          />
        </>
      ) : (
        <>
          <meta name="twitter:card" content="summary" key="twitter:card" />
          <meta
            name="twitter:image"
            key="twitter:image"
            content={`https://betterdevscreencasts.com/${socialImageLarge.src}`}
          />
        </>
      )}
      <meta property="og:type" content="article" key="og:type" />
      <meta property="og:title" content={`${meta.title} | Better Dev Screencasts`} key="og:title" />

      {meta.image ? (
        <meta
          property="og:image"
          content={`https://betterdevscreencasts.com${meta.image.src}`}
          key="og:image"
        />
      ) : (
        <meta
          property="og:image"
          content={`https://betterdevscreencasts.com/${socialImageLarge.src}`}
          key="og:image"
        />
      )}
    </Head>
  )
}
