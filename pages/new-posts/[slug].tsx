import Image from 'next/image'

import { createReader } from 'keystatic/reader'
import { DocumentRenderer } from 'keystatic/renderer'
import keystaticConfig from 'keystatic.config'

import { TwitterTweetEmbed } from 'react-twitter-embed'

import MarkdownLayout from '@components/markdown-layout'
import YouTubeVideo from '@components/blocks/youtube-video'

export default function NewPost({ post }) {
  return (
    <MarkdownLayout
      meta={{
        date: post.date,
        title: post.title,
        excerpt: post.excerpt,
        // image: post.coverImage,
      }}
    >
      <DocumentRenderer
        document={post.content}
        renderers={{
          block: {
            layout: (props) => {
              switch (props.layout.join(',')) {
                case '1,1':
                  return <div className="grid grid-cols-2 gap-8">{props.children}</div>
                case '1,1,1':
                  return <div className="grid grid-cols-3 gap-4">{props.children}</div>
              }
            },
          },
        }}
        componentBlocks={{
          image: (props) => (
            <figure>
              <Image
                src={props.image.filename}
                width={props.width}
                height={props.height}
                alt={props.altText}
                className={props.zclasses}
              />
            </figure>
          ),
          tweet: (props) => (
            <TwitterTweetEmbed tweetId={props.tweetId} options={{ conversation: 'none' }} />
          ),
          youtubeVideo: (props) => <YouTubeVideo videoId={props.videoId} />,
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
        coverImage: 'https://placehold.it/800/400',
      },
    },
  }
}
