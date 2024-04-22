import Link from 'next/link'
import Image from 'next/image'

import { reader } from '@/lib/keystatic-reader'

import PageMeta from '@/components/page-meta'
import PageHeading from '@/components/page-heading'
import CallToAction from '@/components/call-to-action'

import seoImage from '/public/images/social-large.jpg'

const meta = {
  title: 'Helping developers create better screencasts',
  description: `A collection of resources to help developers create better screencasts, and level-up their overall video content creation game.`,
  image: seoImage,
}
export default async function Homepage() {
  const posts = await reader.collections.posts.all()
  console.log({ posts })

  return (
    <>
      <PageMeta meta={meta} />
      <PageHeading title={meta.title}>
        <p>{meta.description}</p>
      </PageHeading>
      {posts.length === 0 ? (
        <div className="px-4 mx-auto mt-12 max-w-7xl sm:px-6 md:mt-16 lg:mt-24 lg:px-8 2xl:max-w-8xl">
          <footer className="inline-block max-w-xl p-8 rounded-lg shadow-sm bg-indigo-50">
            <div className="space-y-4">
              <p className="text-indigo-900">
                There are no posts in this category... yet. Check back soon!
              </p>
            </div>
          </footer>
        </div>
      ) : (
        <div className="grid px-4 mx-auto mt-12 max-w-7xl gap-x-8 gap-y-12 sm:px-6 md:mt-16 lg:mt-24 lg:grid-cols-2 lg:gap-y-16 lg:px-8 2xl:max-w-8xl 2xl:grid-cols-3">
          {posts.map((post) => {
            const image = post.entry.coverImage
              ? `/content/posts/${post.slug}/${post.entry.coverImage}`
              : seoImage.src
            return (
              <div className="relative" key={post.slug}>
                <Link href={`/posts/${post.slug}`} className="hover:opacity-80">
                  <Image
                    className="object-cover rounded-md shadow-lg aspect-video"
                    src={`/content/posts/${post.slug}/${post.entry.coverImage}`}
                    alt=""
                    width={800}
                    height={450}
                  />
                </Link>

                <h2 className="mt-4 text-lg font-semibold">
                  <Link href={`/posts/${post.slug}`} className="hover:underline">
                    {post.entry.title}
                  </Link>
                </h2>
                <p className="mt-2 text-slate-700">{post.entry.excerpt}</p>
                <Link
                  href={`/posts/${post.slug}`}
                  className="block mt-4 font-medium text-indigo-500 hover:underline"
                >
                  Read more &rarr;
                </Link>
              </div>
            )
          })}
        </div>
      )}
      <CallToAction />
    </>
  )
}
