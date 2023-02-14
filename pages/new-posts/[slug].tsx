import Image from 'next/image'

import { createReader } from 'keystatic/reader'
import { DocumentRenderer } from 'keystatic/renderer'
import keystaticConfig from 'keystatic.config'

import { TwitterTweetEmbed } from 'react-twitter-embed'

import MarkdownLayout from '@components/markdown-layout'
import YouTubeVideo from '@components/blocks/youtube-video'

export default function NewPost({ post }) {
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
                case '1,1,1':
                  return <div className="grid gap-4 sm:grid-cols-3">{props.children}</div>
              }
            },
          },
        }}
        componentBlocks={{
          // TODO: Implement the image rendering correctly
          image: (props) => {
            return (
              <figure>
                <Image
                  src={`/content/posts/${post.slug}/content/${props.image}`}
                  width={props.width || 640}
                  height={props.height || 480}
                  alt={props.altText}
                  className={props.classes || 'block rounded-2xl object-cover shadow-lg'}
                />

                {props.caption && <figcaption className="!mt-3">{props.caption}</figcaption>}
              </figure>
            )
          },
          tweet: (props) => (
            <TwitterTweetEmbed tweetId={props.tweetId} options={{ conversation: 'none' }} />
          ),
          youtubeVideo: (props) => <YouTubeVideo videoId={props.videoId} />,
          iframe: (props) => <div dangerouslySetInnerHTML={{ __html: props.code }} />,
        }}
      />
    </MarkdownLayout>
  )
}

export async function getStaticPaths() {
  const reader = createReader('', keystaticConfig)
  const postSlugs = await reader.collections.posts.list()
  return {
    paths: postSlugs.map((slug) => ({ params: { slug } })),
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const reader = createReader('', keystaticConfig)
  const postData = await reader.collections.posts.read(slug)
  const content = await postData.content()

  return {
    props: {
      post: {
        ...postData,
        content,
      },
    },
  }
}
