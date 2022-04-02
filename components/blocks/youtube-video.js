import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export default function YouTubeVideo({ videoId }) {
  return (
    <div className="my-8 aspect-video w-full overflow-hidden rounded-2xl shadow-2xl">
      <LiteYouTubeEmbed id={videoId} poster="maxresdefault" />
    </div>
  )
}
