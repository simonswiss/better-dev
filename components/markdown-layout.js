import { format } from 'date-fns'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function MarkdownLayout({ meta, children }) {
  return (
    <div className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-8xl">
      <Metadata meta={meta} />
      <div className="prose prose-slate lg:prose-lg xl:prose-xl mx-auto">
        <h1>{meta.title}</h1>
        <p>posted on {format(new Date(meta.date), 'd MMMM yyy')}</p>
        <div className="text-3xl text-gray-600">{meta.excerpt}</div>
        <div className="mt-12">
          <div className="w-16 h-1.5 bg-indigo-500"></div>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  )
}

function Metadata({ meta }) {
  let router = useRouter()

  return (
    <Head>
      <title>{meta.title} | Better Dev Screencasts</title>
      <meta name="twitter:site" content="@simonswiss" />
      <meta name="twitter:creator" content="@simonswiss" />
      <meta name="twitter:title" content={`${meta.title} | Better Dev Screencasts`} />
      <meta name="twitter:description" content={meta.description} />
      {meta.image ? (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={`https://betterdevscreencasts.com${meta.image}`} />
        </>
      ) : (
        <>
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:image"
            content="https://betterdevscreencasts.com/images/bds-logo.png"
          />
        </>
      )}
      <meta property="og:url" content={`https://betterdevscreencasts.com${router.pathname}`} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${meta.title} | Better Dev Screencasts`} />
      <meta property="og:description" content={meta.description} />
      {meta.image ? (
        <meta property="og:image" content={`https://betterdevscreencasts.com${meta.image}`} />
      ) : (
        <meta property="og:image" content="https://betterdevscreencasts.com/bds-logo.png" />
      )}
      <meta name="description" content={meta.description}></meta>
    </Head>
  )
}
