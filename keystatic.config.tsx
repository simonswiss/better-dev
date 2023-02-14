import { config, fields, collection, component } from 'keystatic'

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
      getItemSlug: (data) => data.slug,
      itemLabel: (props) => props.title,
      label: 'Posts',
      directory: 'public/content/posts',
      schema: {
        title: fields.text({ label: 'Title' }),
        slug: fields.text({ label: 'Slug', validation: { length: { min: 4 } } }),
        date: fields.text({ label: 'Date' }),
        excerpt: fields.text({ label: 'Excerpt' }),
        coverImage: fields.image({ label: 'Cover image' }),
        content: fields.document({
          label: 'Post copy',
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
          },
        }),
      },
    }),
  },
})

export default keystaticConfig
