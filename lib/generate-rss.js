import fs from 'fs'
import { Feed } from 'feed'

import image from '/public/images/social-large.jpg'

export default function generateRSSFeed(posts) {
  const feed = new Feed({
    title: 'Better Dev Screencasts',
    description:
      'A collection of resources to help developers create better screencasts, and level-up their overall video content creation game.',
    id: 'https://betterdevscreencasts.com',
    link: 'https://betterdevscreencasts.com',
    language: 'en',
    image: `https://betterdevscreencasts.com/${image.src}`,
    favicon: 'https://betterdevscreencasts.com/favicon.ico',
    feedLinks: {
      rss2: 'https://betterdevscreencasts.com/rss.xml',
    },
    author: {
      name: 'simonswiss',
      email: 'simon@simonswiss.com',
      link: 'https://twitter.com/simonswiss',
    },
    copyright: 'All rights reserved, Better Dev Screencasts',
  })

  posts.forEach((post) => {
    const { slug, module } = post
    const { meta } = module
    const { title, excerpt, date, image } = meta

    console.log(module.default)

    const url = `https://betterdevscreencasts.com/posts/${slug}`

    feed.addItem({
      title,
      id: url,
      link: url,
      description: excerpt,
      // content,
      author: [
        {
          name: 'simonswiss',
          link: 'https://twitter.com/simonswiss',
        },
      ],
      date: new Date(date),
    })
  })

  fs.writeFileSync('public/rss.xml', feed.rss2())
}
