'use client'

/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'

import MailChimpSubscription from './mailchimp'

export default function MarkdownLayout({ meta, children }) {
  return (
    <div className="px-4 pt-8 mx-auto max-w-7xl sm:px-6 md:pt-20 lg:px-8 2xl:max-w-8xl">
      <div className="mx-auto prose break-words prose-slate prose-blockquote:border-indigo-500 prose-blockquote:text-indigo-900 prose-figure:mt-0 prose-figcaption:mt-0 lg:prose-lg lg:prose-figure:mt-0 lg:prose-figcaption:mt-0 xl:prose-xl xl:prose-figure:mt-2 xl:prose-figcaption:mt-0 2xl:prose-figcaption:mt-0">
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
        <footer className="p-8 mt-20 bg-white rounded-lg shadow not-prose lg:mt-32">
          <div className="flex items-center gap-4 text-sm md:text-base">
            <div className="shrink-0">
              <Image
                src="/images/twitter-avatar.png"
                className="object-cover rounded-full"
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
              <Link href="/" className="text-indigo-500 underline hover:text-indigo-700">
                Better Dev Screencasts
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
