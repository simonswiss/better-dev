import PageHeading from '/components/page-heading'
import PageMeta from '/components/page-meta'
import GridList from '/components/grid-list'

import { getVideos } from '/lib/getData'

const meta = {
  title: 'Video',
  description: `They say an image is worth a thousand words... That means a video is worth... a lot!`,
}

const data = getVideos()

export default function Video() {
  return (
    <div>
      <PageMeta meta={meta} />
      <PageHeading title="Videos">
        <p>They say an image is worth a thousand words... That means a video is worth.. a lot!</p>
      </PageHeading>
      <GridList data={data} />
    </div>
  )
}
