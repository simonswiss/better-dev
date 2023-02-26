import { config, fields, collection, component } from '@keystatic/core'

const keystaticConfig = config({
  storage: {
    kind: 'github',
    repo: {
      name: 'better-dev',
      owner: 'simonswiss',
    },
  },
  collections: {
    posts: collection({
      label: 'Posts',
      directory: 'public/content/posts',
      slugField: 'slug',
      schema: {
        title: fields.text({ label: 'Title' }),
        slug: fields.text({ label: 'Slug', validation: { length: { min: 4 } } }),
        date: fields.text({ label: 'Date' }),
        excerpt: fields.text({ label: 'Excerpt' }),
        coverImage: fields.image({ label: 'Cover image' }),
        content: fields.document({
          label: 'Post copy',
          layouts: [[1, 1]],
          formatting: true,
          dividers: true,
          links: true,
          componentBlocks: {
            image: component({
              preview: () => null,
              label: 'Image',
              schema: {
                image: fields.image({ label: 'Image' }),
                width: fields.integer({ label: 'Width' }),
                height: fields.integer({ label: 'Height' }),
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
          },
        }),
      },
    }),
  },
})

export default keystaticConfig
