'use client'

import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export default function YouTubeVideo({ videoId }) {
  return (
    <div className="w-full my-8 overflow-hidden shadow-2xl aspect-video rounded-2xl">
      <LiteYouTubeEmbed id={videoId} poster="maxresdefault" />
    </div>
  )
}
