import Image from 'next/image'

import { createReader } from 'keystatic/reader'
import { DocumentRenderer } from 'keystatic/renderer'
import keystaticConfig from 'keystatic.config'

import { TwitterTweetEmbed } from 'react-twitter-embed'

import MarkdownLayout from 'components/markdown-layout'

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
        componentBlocks={{
          image: (props) => (
            <figure>
              <Image
                src={props.image.filename}
                width={props.width}
                height={props.height}
                alt={props.altText}
                className={props.classes}
              />
            </figure>
          ),
          tweet: (props) => (
            <TwitterTweetEmbed tweetId={props.id} options={{ conversation: 'none' }} />
          ),
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
  const coverImage = await postData.coverImage()

  console.dir({ content }, { depth: null })

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
