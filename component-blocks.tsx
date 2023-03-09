import { fields, component } from '@keystatic/core'

const componentBlocks = {
  image: component({
    preview: () => null,
    label: 'Image',
    schema: {
      image: fields.image({ label: 'Image', validation: { isRequired: true } }),
      width: fields.integer({ label: 'Width', defaultValue: 640 }),
      height: fields.integer({ label: 'Height', defaultValue: 480 }),
      altText: fields.text({ label: 'Alt text' }),
      classes: fields.text({ label: 'classnames' }),
      caption: fields.text({ label: 'Caption' }),
    },
  }),
  youtubeVideo: component({
    preview: () => null,
    label: 'YouTube video',
    schema: {
      videoId: fields.text({ label: 'Video ID' }),
    },
  }),
  tweet: component({
    preview: () => null,
    label: 'Tweet',
    schema: {
      tweetId: fields.text({ label: 'Tweet ID' }),
    },
  }),
  iframe: component({
    preview: () => null,
    label: 'iframe',
    schema: {
      code: fields.text({ label: 'Code' }),
    },
  }),
}

export default componentBlocks
