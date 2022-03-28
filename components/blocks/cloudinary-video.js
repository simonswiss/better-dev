export default function CloudinaryVideo({ url }) {
  return (
    <iframe
      className="my-8 aspect-video w-full rounded-2xl shadow-2xl"
      src={
        url.includes('player%5Bcolors%5D%5Baccent')
          ? url
          : `${url}&player%5Bcolors%5D%5Baccent%5D=%236366F1`
      }
      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
      allowFullScreen
      frameBorder="0"
    ></iframe>
  )
}
