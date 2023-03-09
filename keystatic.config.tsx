import { config, fields, collection } from '@keystatic/core'

import componentBlocks from 'component-blocks'

const keystaticConfig = config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      path: 'content/posts/*/',
      slugField: 'title',
      schema: {
        title: fields.slug({ name: { label: 'Title', validation: { length: { min: 2 } } } }),
        date: fields.date({ label: 'Date', validation: { isRequired: true } }),
        excerpt: fields.text({ label: 'Excerpt' }),
        coverImage: fields.image({ label: 'Cover image', directory: 'public/images/posts' }),
        content: fields.document({
          label: 'Post copy',
          layouts: [[1, 1]],
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/posts',
            publicPath: '/images/posts',
          },
          componentBlocks,
        }),
      },
    }),
  },
})

export default keystaticConfig
