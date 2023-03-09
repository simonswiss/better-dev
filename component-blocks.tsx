import { fields, component } from '@keystatic/core'

import useObjectURL from './lib/use-object-url'
import YouTubeVideo from './components/blocks/youtube-video'

// const ImagePreview = (props) => {
//   const imageSrc = useObjectURL(props.fields.image.value.data) || 'https://placehold.it/600/400'
//   return (
//     <figure>
//       <img
//         src={imageSrc}
//         alt={props.fields.altText.value}
//         style={{ width: '100%', maxHeight: 400, borderRadius: 4 }}
//       />

//       {props.fields.caption.value && (
//         <figcaption
//           className="!mt-3"
//           dangerouslySetInnerHTML={{ __html: props.fields.caption.value }}
//         />
//       )}
//     </figure>
//   )
// }

//
const componentBlocks = {
  imagexx: component({
    preview: (props) => null,
    label: 'Image XX',
    schema: {
      image: fields.image({ label: 'Image', directory: 'public/images/posts' }),
      width: fields.integer({ label: 'Width' }),
      height: fields.integer({ label: 'Height' }),
      altText: fields.text({ label: 'Alt text' }),
      classes: fields.text({ label: 'classnames' }),
      caption: fields.text({ label: 'Caption' }),
    },
  }),
  youtubeVideo: component({
    preview: (props) => <YouTubeVideo videoId={props.fields.videoId.value} />,
    label: 'YouTube video',
    schema: {
      videoId: fields.text({ label: 'Video ID' }),
    },
  }),
  tweet: component({
    preview: () => null,
    label: 'Tweet',
    schema: {
      tweetId: fields.text({ label: 'Tweet ID' }),
    },
  }),
  iframe: component({
    preview: () => null,
    label: 'iframe',
    schema: {
      code: fields.text({ label: 'Code' }),
    },
  }),
}

export default componentBlocks
