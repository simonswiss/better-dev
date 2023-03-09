import Link from 'next/link'
import Image from 'next/image'

import keystaticConfig from 'keystatic.config'
import { createReader } from '@keystatic/core/reader'

import PageMeta from '@components/page-meta'
import PageHeading from '@components/page-heading'
import CallToAction from '@components/call-to-action'

import seoImage from '/public/images/social-large.jpg'

const meta = {
  title: 'Helping developers create better screencasts',
  description: `A collection of resources to help developers create better screencasts, and level-up their overall video content creation game.`,
  image: seoImage,
}

export default function NewPosts({ posts }) {
  return (
    <>
      <PageMeta meta={meta} />
      <PageHeading title={meta.title}>
        <p>{meta.description}</p>
      </PageHeading>
      {posts.length === 0 ? (
        <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 md:mt-16 lg:mt-24 lg:px-8 2xl:max-w-8xl">
          <footer className="inline-block max-w-xl rounded-lg bg-indigo-50 p-8 shadow-sm">
            <div className="space-y-4">
              <p className="text-indigo-900">
                There are no posts in this category... yet. Check back soon!
              </p>
            </div>
          </footer>
        </div>
      ) : (
        <div className="mx-auto mt-12 grid max-w-7xl gap-x-8 gap-y-12 px-4 sm:px-6 md:mt-16 lg:mt-24 lg:grid-cols-2 lg:gap-y-16 lg:px-8 2xl:max-w-8xl 2xl:grid-cols-3">
          {posts.map((post) => {
            const imageSrc = post.coverImage
              ? `/images/posts/${post.slug}/${post.coverImage}`
              : seoImage.src
            return (
              <div className="relative" key={post.slug}>
                <Link href={`/posts/${post.slug}`} className="hover:opacity-80">
                  <Image
                    className="aspect-video rounded-md object-cover shadow-lg"
                    src={imageSrc}
                    alt=""
                    width={800}
                    height={450}
                  />
                </Link>

                <h2 className="mt-4 text-lg font-semibold">
                  <Link href={`/posts/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-slate-700">{post.excerpt}</p>
                <Link
                  href={`/posts/${post.slug}`}
                  className="mt-4 block font-medium text-indigo-500 hover:underline"
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

export async function getStaticProps() {
  const reader = createReader('', keystaticConfig)
  const postsList = await reader.collections.posts.list()
  const posts = await Promise.all(
    postsList.map(async (slug) => {
      const post = await reader.collections.posts.read(slug)

      return {
        title: post?.title,
        slug,
        date: post?.date,
        excerpt: post?.excerpt,
        coverImage: post?.coverImage,
      }
    })
  )

  const sortedPosts = posts.sort((a, b) => ((a.date || 0) > (b.date || 0) ? -1 : 0))

  return {
    props: {
      posts: sortedPosts,
    },
  }
}
