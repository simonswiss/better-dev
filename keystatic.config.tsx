import { config, fields, collection, LocalConfig, GitHubConfig } from '@keystatic/core'

import componentBlocks from './component-blocks'

// Storage strategy
const storage: LocalConfig['storage'] | GitHubConfig['storage'] =
  process.env.NODE_ENV === 'development'
    ? { kind: 'local' }
    : {
        kind: 'github',
        repo: {
          owner: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER!,
          name: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG!,
        },
      }

const keystaticConfig = config({
  storage,
  collections: {
    posts: collection({
      label: 'Posts',
      path: 'content/posts/*',
      slugField: 'title',
      format: {
        contentField: 'content',
      },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date', validation: { isRequired: true } }),
        excerpt: fields.text({ label: 'Excerpt' }),
        coverImage: fields.image({ label: 'Cover image', directory: 'public/images/posts' }),
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
