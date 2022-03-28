import { format } from 'date-fns'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function MarkdownLayout({ meta, children }) {
  return (
    <div className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-8xl">
      <Metadata meta={meta} />
      <div className="prose prose-slate mx-auto lg:prose-lg xl:prose-xl">
        <h1>{meta.title}</h1>
        <p className="text-base text-slate-500">
          Posted on {format(new Date(meta.date), 'd MMMM yyy')}
        </p>
        <div className="mt-8 text-3xl text-slate-600">{meta.excerpt}</div>
        <div className="mt-12">
          <div className="h-0.5 w-16 bg-indigo-500"></div>
          <div className="mt-8">{children}</div>
        </div>
        {/* Author footer */}
        <footer className="not-prose mt-20 rounded-lg bg-white p-8 shadow lg:mt-32">
          <div className="flex items-center gap-4 text-base">
            <Image
              src="/images/avatar.jpg"
              className="rounded-full object-cover"
              width={80}
              height={80}
              alt="avatar for simonswiss"
            />
            <div>
              <p className="font-medium">
                posted by <span>simonswiss</span>
              </p>
              <p className="text-slate-500">Front-end developer, video editor, content creator.</p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <p>Hey, I'm Simon 👋 </p>

            <p>
              <Link href="/">
                <a className="text-indigo-500 underline hover:text-indigo-700">
                  Better Dev Screencasts
                </a>
              </Link>{' '}
              is a personal project of mine. If you enjoyed this post, please consider sharing it
              with your friends! ❤️
            </p>

            <p>
              Have questions or just want to chat with me? I'm{' '}
              <a
                className="text-indigo-500 underline hover:text-indigo-700"
                href="https://twitter.com/simonswiss"
              >
                simonswiss
              </a>{' '}
              on Twitter, come say hello!
            </p>
          </div>
        </footer>
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
