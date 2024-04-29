import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

import { DocumentRenderer } from '@keystatic/core/renderer'

import { reader } from '@/lib/reader'
import MarkdownLayout from '@components/markdown-layout'
import YouTubeVideo from '@components/blocks/youtube-video'
import TwitterEmbed from '@components/blocks/tweet-embed'

import seoImage from '/public/images/social-large.jpg'

export async function generateMetadata({ params: { slug } }): Promise<Metadata> {
  const post = await reader.collections.posts.read(slug, { resolveLinkedFiles: true })
  if (!post) notFound()

  const title = post.title || 'Helping developers create better screencasts'
  const description =
    post.excerpt ||
    'A collection of resources to help developers create better screencasts, and level-up their overall video content creation game.'
  const image = post.coverImage || `https://betterdevscreencasts.com${seoImage.src}`
  return {
    title,
    description,
    twitter: {
      site: '@simonswiss',
      card: 'summary_large_image',
      images: image,
      creator: '@simonswiss',
    },
    openGraph: {
      siteName: 'Better Dev Screencasts',
      type: 'website',
      description,
      images: image,
      url: `https://betterdevscreencasts.com/posts/${slug}`,
    },
  }
}

export default async function Post({ params: { slug } }) {
  const post = await reader.collections.posts.read(slug, { resolveLinkedFiles: true })

  if (!post) notFound()
  return (
    <MarkdownLayout
      meta={{
        date: post.date,
        title: post.title,
        excerpt: post.excerpt,
      }}
    >
      <DocumentRenderer
        document={post.content}
        renderers={{
          block: {
            layout: (props) => {
              switch (props.layout.join(',')) {
                case '1,1':
                  return <div className="grid gap-4 sm:grid-cols-2">{props.children}</div>
                default:
                  return <>{props.children}</>
              }
            },
          },
        }}
        componentBlocks={{
          image: (props) => {
            return (
              <figure>
                <Image
                  src={props.image}
                  width={props.width || 640}
                  height={props.height || 480}
                  alt={props.altText}
                  className={props.classes || 'max-h-[800px] w-auto rounded-lg shadow-lg'}
                />

                {props.caption && (
                  <figcaption
                    className="!mt-3"
                    dangerouslySetInnerHTML={{ __html: props.caption }}
                  />
                )}
              </figure>
            )
          },
          tweet: (props) => <TwitterEmbed tweetId={props.tweetId} />,
          youtubeVideo: (props) => <YouTubeVideo videoId={props.videoId} />,
          iframe: (props) => <div dangerouslySetInnerHTML={{ __html: props.code }} />,
        }}
      />
    </MarkdownLayout>
  )
}

export async function generateStaticParams() {
  const posts = await reader.collections.posts.list()
  return posts.map((slug) => ({ params: { slug } }))
}
