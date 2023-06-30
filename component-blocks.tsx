import { fields, component } from '@keystatic/core'
import { TwitterTweetEmbed } from 'react-twitter-embed'

import YouTubeVideo from './components/blocks/youtube-video'

const componentBlocks = {
  image: component({
    preview: () => null,
    label: 'Image',
    schema: {
      image: fields.image({
        label: 'Image',
        validation: { isRequired: true },
        directory: 'public/images/posts',
        publicPath: 'images/posts/',
      }),
      width: fields.integer({ label: 'Width', defaultValue: 640 }),
      height: fields.integer({ label: 'Height', defaultValue: 480 }),
      altText: fields.text({ label: 'Alt text' }),
      classes: fields.text({ label: 'classnames' }),
      caption: fields.text({ label: 'Caption' }),
    },
  }),
  youtubeVideo: component({
    preview: (props) => <YouTubeVideo videoId={props.fields.videoId.value} />,
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
      <div
        style={{ width: '100%' }}
        dangerouslySetInnerHTML={{ __html: props.fields.code.value }}
      />
    ),
    label: 'iframe',
    schema: {
      code: fields.text({ label: 'Code' }),
    },
  }),
}

export default componentBlocks
