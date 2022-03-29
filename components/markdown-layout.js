/* eslint-disable react/no-unescaped-entities */
import { format } from 'date-fns'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import socialImageLarge from '/public/images/social-large.jpg'

export default function MarkdownLayout({ meta, children }) {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 md:pt-20 lg:px-8 2xl:max-w-8xl">
      <Metadata meta={meta} />
      <div className="prose prose-slate mx-auto break-words prose-blockquote:border-indigo-500 prose-blockquote:text-indigo-900 prose-figure:mt-0 prose-figcaption:mt-0 lg:prose-lg lg:prose-figure:mt-0 lg:prose-figcaption:mt-0 xl:prose-xl xl:prose-figure:mt-2 xl:prose-figcaption:mt-0 2xl:prose-figcaption:mt-0">
        <h1>{meta.title}</h1>
        <p className="text-base text-slate-500">
          Posted on {format(new Date(meta.date), 'd MMMM yyy')}
        </p>
        <div className="mt-8 text-xl text-slate-600 xl:text-3xl">{meta.excerpt}</div>
        <div className="mt-12">
          <div className="h-0.5 w-16 bg-indigo-500"></div>
          <div className="mt-8">{children}</div>
        </div>
        {/* Author footer */}
        <footer className="not-prose mt-20 rounded-lg bg-white p-8 shadow lg:mt-32">
          <div className="flex items-center gap-4 text-sm md:text-base">
            <div className="shrink-0">
              <Image
                src="/images/twitter-avatar.png"
                className="rounded-full object-cover"
                width={80}
                height={80}
                alt="avatar for simonswiss"
              />
            </div>
            <div>
              <p className="font-medium">
                posted by <span>simonswiss</span>
              </p>
              <p className="text-slate-500">Front-end developer, video editor, content creator.</p>
            </div>
          </div>
          <div className="mt-8 space-y-4">
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

            <p>And if you want more video editing tips, subscribe via the form below!</p>

            {/* <p>
              Have questions or just want to chat with me? I'm{' '}
              <a
                className="text-indigo-500 underline hover:text-indigo-700"
                href="https://twitter.com/simonswiss"
              >
                simonswiss
              </a>{' '}
              on Twitter, come say hello!
            </p> */}
          </div>

          <MailChimpSubscription />
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
      <meta name="twitter:site" content="@simonswiss" key="twitter:site" />
      <meta name="twitter:creator" content="@simonswiss" key="twitter:creator" />
      <meta
        name="twitter:title"
        content={`${meta.title} | Better Dev Screencasts`}
        key="twitter:title"
      />
      <meta name="twitter:description" content={meta.excerpt} key="twitter:description" />
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
      <meta
        property="og:url"
        content={`https://betterdevscreencasts.com${router.pathname}`}
        key="og:url"
      />
      <meta property="og:type" content="article" key="og:type" />
      <meta property="og:title" content={`${meta.title} | Better Dev Screencasts`} key="og:title" />
      <meta property="og:description" content={meta.excerpt} key="og:description" />
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
      <meta name="description" content={meta.excerpt} key="description"></meta>
    </Head>
  )
}

function MailChimpSubscription() {
  return (
    <div id="mc_embed_signup" className="not-prose mt-8">
      <form
        action="https://betterdevscreencasts.us14.list-manage.com/subscribe/post?u=8d885927e62386721e16f3f16&amp;id=4e9ecb2eeb"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll" className="flex flex-col items-stretch gap-2 md:flex-row">
          <div className="mc-field-group ">
            <label htmlFor="mce-EMAIL" className="sr-only">
              Email Address <span className="asterisk">*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              className="required email block w-full rounded-lg border-2 border-slate-400 md:w-80"
              id="mce-EMAIL"
              placeholder="Your email address"
            />
          </div>
          <div id="mce-responses" className="clear foot">
            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
          </div>
          {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
          <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
            <input type="text" name="b_8d885927e62386721e16f3f16_4e9ecb2eeb" tabIndex="-1" />
          </div>
          <div className="clear foot">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button block h-full w-full cursor-pointer rounded-lg bg-indigo-500 px-4 py-2 text-base text-white hover:bg-indigo-400"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
