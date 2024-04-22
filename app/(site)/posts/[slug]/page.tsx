import Image from 'next/image'

import { DocumentRenderer } from '@keystatic/core/renderer'
import { TwitterTweetEmbed } from 'react-twitter-embed'

import MarkdownLayout from '@/components/markdown-layout'
import YouTubeVideo from '@/components/blocks/youtube-video'
import { reader } from '@/lib/keystatic-reader'

export default async function NewPost({ params: { slug } }) {
  const post = await reader.collections.posts.read(slug, { resolveLinkedFiles: true })

  if (!post) throw new Error('Post not found')
  const imageSrc = `/content/posts/${post.slug}/${post.coverImage}`
  return (
    <MarkdownLayout
      meta={{
        date: post.date,
        title: post.title,
        excerpt: post.excerpt,
        image: {
          src: imageSrc,
        },
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
                  src={`/content/posts/${post.slug}/content/${props.image}`}
                  width={props.width || 640}
                  height={props.height || 480}
                  alt={props.altText}
                  className={props.classes || 'max-h-[800px] w-auto shadow-lg rounded-lg'}
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
          tweet: (props) => (
            <p>TODO</p>
            // <TwitterTweetEmbed tweetId={props.tweetId} options={{ conversation: 'none' }} />
          ),
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
