'use client'

import { TwitterTweetEmbed } from 'react-twitter-embed'

type Props = {
  tweetId: string
}

export default function TwitterEmbed({ tweetId }: Props) {
  return <TwitterTweetEmbed tweetId={tweetId} options={{ conversation: 'none' }} />
}
