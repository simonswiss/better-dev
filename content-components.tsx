'use client'

import { fields, component } from '@keystatic/core'
import { block, wrapper } from '@keystatic/core/content-components'

import { Box, Flex } from '@keystar/ui/layout'

import { useImageData } from './lib/use-image-data'

import { TwitterTweetEmbed } from 'react-twitter-embed'

import YouTubeVideo from './components/blocks/youtube-video'

function BoxWrapper(props) {
  return (
    <Box
      maxWidth="container.xsmall"
      border="neutral"
      borderRadius="regular"
      padding="regular"
      {...props}
    />
  )
}

const componentBlocks = {
  Columns: wrapper({
    label: 'Layout',
    schema: {
      columns: fields.number({
        label: 'Columns',
        defaultValue: 2,
      }),
    },
  }),
  Column: wrapper({
    label: 'Column',
    schema: {},
  }),
  Image: block({
    ContentView: (props) => {
      const imageDataSrc = useImageData(props.value.image)
      return (
        <BoxWrapper>
          <img src={imageDataSrc} alt="" />
        </BoxWrapper>
      )
    },
    label: 'Image',
    schema: {
      image: fields.image({
        label: 'Image',
        validation: { isRequired: true },
        directory: 'public/images/posts',
        publicPath: '/images/posts',
      }),
      width: fields.integer({ label: 'Width', defaultValue: 640 }),
      height: fields.integer({ label: 'Height', defaultValue: 480 }),
      altText: fields.text({ label: 'Alt text' }),
      classes: fields.text({ label: 'classnames' }),
      caption: fields.text({ label: 'Caption' }),
    },
  }),
  YoutubeVideo: block({
    ContentView: (props) => (
      <BoxWrapper maxWidth="container.small">
        <YouTubeVideo videoId={props.value.videoId} />
      </BoxWrapper>
    ),
    label: 'YouTube video',
    schema: {
      videoId: fields.text({ label: 'Video ID' }),
    },
  }),
  Tweet: block({
    ContentView: (props) => (
      <TwitterTweetEmbed tweetId={props.value.tweetId} options={{ conversation: 'none' }} />
    ),
    label: 'Tweet',
    schema: {
      tweetId: fields.text({ label: 'Tweet ID' }),
    },
  }),
  Iframe: block({
    preview: (props) => (
      <BoxWrapper>
        <style>
          {`
            iframe {
              width: 100%;
              height: 100%;
              border: none;
            }
          `}
        </style>
        <div
          style={{ width: '100%', aspectRatio: '16/9' }}
          dangerouslySetInnerHTML={{ __html: props.fields.code.value }}
        />
      </BoxWrapper>
    ),
    label: 'iframe',
    schema: {
      code: fields.text({ label: 'Code' }),
    },
  }),
}

export default componentBlocks
