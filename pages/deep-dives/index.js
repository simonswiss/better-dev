/* eslint-disable react/no-unescaped-entities */
import PageHeading from '/components/page-heading'
import GridList from '/components/grid-list'
import PageMeta from '/components/page-meta'

import { getDeepDives } from '/lib/getData'

const meta = {
  title: 'Deep dives',
  description: `Hold your breath... We're going down a rabbit hole, and we're going deep.`,
}

const data = getDeepDives()

export default function Home() {
  return (
    <div>
      <PageMeta meta={meta} />
      <PageHeading title="Deep dives">
        <p>Hold your breath... We're going down a rabbit hole, and we're going deep.</p>
      </PageHeading>
      <GridList data={data} />
    </div>
  )
}
