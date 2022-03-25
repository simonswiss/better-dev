import Link from 'next/link'

export default function Navigation() {
  return (
    <header>
      <div className="mx-auto max-w-7xl px-4 py-9 md:px-6 lg:px-8 2xl:max-w-8xl">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="relative flex items-center gap-2 font-black text-cyan-900 hover:opacity-75"
          >
            <a>
              <img className="h-12" src="/images/bds-logo.png" alt="Better Dev Screencasts logo" />
              {/* <span className="absolute h-12 w-12 -translate-x-4 rounded-full bg-cyan-400/50 transition group-hover:bg-cyan-400/75"></span> */}
              {/* <span className="relative">Better Dev Screencasts</span> */}
            </a>
          </Link>
          <nav className="flex gap-12">
            <LinkItem path="/hot-tips">Hot Tips</LinkItem>
            <LinkItem path="/videos">Videos</LinkItem>
            <LinkItem path="/deep-dives">Deep Dives</LinkItem>
          </nav>
        </div>
      </div>
    </header>
  )
}

// type Item = {
//   path: string
//   children: string
// }

function LinkItem({ path, children }) {
  return (
    <Link href={path}>
      <a className="py-1 font-semibold text-cyan-900">{children}</a>
    </Link>
  )
}
