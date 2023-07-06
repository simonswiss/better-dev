import { fields, component } from '@keystatic/core'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { Box, Flex, BoxProps } from '@keystar/ui/layout'
import { ProgressCircle } from '@keystar/ui/progress'

import YouTubeVideo from './components/blocks/youtube-video'
import useObjectURL from './use-object-url'

function ImagePreview({ data }: { data: Uint8Array } & BoxProps) {
  const url = useObjectURL(data)
  return <img style={{ width: '100%', display: 'block' }} src={url} alt="" />
}

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
  image: component({
    preview: (props) => {
      return (
        <BoxWrapper>
          {props.fields.image.value ? (
            <ImagePreview data={props.fields.image.value.data} />
          ) : (
            <Flex direction="column" gap="medium" alignItems="center">
              <ProgressCircle aria-label="Loading…" isIndeterminate />
            </Flex>
          )}
        </BoxWrapper>
      )
    },
    label: 'Image',
    schema: {
      image: fields.image({
        label: 'Image',
        validation: { isRequired: true },
        directory: 'public/images/posts',
      }),
      width: fields.integer({ label: 'Width', defaultValue: 640 }),
      height: fields.integer({ label: 'Height', defaultValue: 480 }),
      altText: fields.text({ label: 'Alt text' }),
      classes: fields.text({ label: 'classnames' }),
      caption: fields.text({ label: 'Caption' }),
    },
  }),
  youtubeVideo: component({
    preview: (props) => (
      <BoxWrapper maxWidth="container.small">
        <YouTubeVideo videoId={props.fields.videoId.value} />
      </BoxWrapper>
    ),
    label: 'YouTube video',
    schema: {
      videoId: fields.text({ label: 'Video ID' }),
    },
  }),
  tweet: component({
    preview: (props) => (
      <TwitterTweetEmbed tweetId={props.fields.tweetId.value} options={{ conversation: 'none' }} />
    ),
    label: 'Tweet',
    schema: {
      tweetId: fields.text({ label: 'Tweet ID' }),
    },
  }),
  iframe: component({
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
