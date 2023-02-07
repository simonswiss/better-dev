import { config, fields } from 'keystatic'

const keystaticConfig = config({
  repo: {
    name: 'better-dev',
    owner: 'simonswiss',
  },
  collections: {
    posts: {
      label: 'Posts',
      itemLabel: (props) => props.title,
      directory: 'content/posts',
      getItemSlug: (data) => data.slug,
      schema: {
        title: fields.text({ label: 'Title' }),
        slug: fields.text({ label: 'Slug', validation: { length: { min: 4 } } }),
        date: fields.text({ label: 'Date' }),
        excerpt: fields.text({ label: 'Excerpt' }),
        coverImage: fields.image({ label: 'Cover image' }),
        content: fields.document({
          label: 'Post copy',
          componentBlocks: {
            youtubeVideo: {
              preview: () => null,
              label: 'YouTube video',
              schema: {
                videoId: fields.text({ label: 'Video ID' }),
              },
            },
          },
        }),
      },
    },
  },
})

export default keystaticConfig
