import PageHeading from '/components/page-heading'
import GridList from '/components/grid-list'
import PageMeta from '/components/page-meta'

import { getHotTips } from '/lib/getData'

const meta = {
  title: 'Hot tips',
  description: 'Short, but effective tips to take your video production to the next level!',
}

const data = getHotTips()

export default function HotTips() {
  return (
    <div>
      <PageMeta meta={meta} />
      <PageHeading title="Hot tips">
        <p>Short, but effective tips to take your video production to the next level!</p>
      </PageHeading>
      <GridList data={data} />
    </div>
  )
}
