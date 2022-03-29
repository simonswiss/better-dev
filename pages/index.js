import PageHeading from '/components/page-heading'
import GridList from '/components/grid-list'
import PageMeta from '/components/page-meta'

import { getPosts } from '/lib/getData'

const meta = {
  title: 'Helping developers create better screencasts',
  description: `A collection of resources to help developers create better screencasts, and level-up their overall video content creation game.`,
}

const data = getPosts()

export default function Home() {
  return (
    <>
      <PageMeta meta={meta} />
      <PageHeading title={meta.title}>
        <p>{meta.description}</p>
      </PageHeading>
      <GridList data={data} />
    </>
  )
}
