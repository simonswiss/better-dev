import { config, fields, collection } from '@keystatic/core'

import componentBlocks from './component-blocks'

const keystaticConfig = config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      path: 'content/posts/*',
      format: {
        contentField: 'content',
      },
      entryLayout: 'content',
      slugField: 'title',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date', validation: { isRequired: true } }),
        excerpt: fields.text({ label: 'Excerpt' }),
        coverImage: fields.image({
          label: 'Cover image',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
        }),
        content: fields.document({
          label: 'Post copy',
          layouts: [[1, 1]],
          formatting: true,
          dividers: true,
          links: true,
          componentBlocks,
        }),
      },
    }),
  },
})

export default keystaticConfig
