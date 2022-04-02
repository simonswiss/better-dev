export default function YouTubeVideo({ videoId }) {
  return (
    <iframe
      className="my-8 aspect-video w-full rounded-2xl shadow-2xl"
      src={`https://www.youtube.com/embed/${videoId}?controls=0`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}
