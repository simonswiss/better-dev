import { getPosts } from '/lib/getData'
import generateRSSFeed from '/lib/generate-rss'

export default async function handler(req, res) {
  const posts = getPosts()
  await generateRSSFeed(posts)
  res.status(200).json({ posts })
}
