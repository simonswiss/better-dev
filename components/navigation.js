import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navigation() {
  return (
    <header>
      <div className="mx-auto max-w-7xl px-4 py-9 md:px-6 lg:px-8 2xl:max-w-8xl">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="mix group relative flex items-center gap-2">
              <span className="absolute h-12 w-12 -translate-x-4 rounded-full bg-indigo-400/50 transition group-hover:bg-indigo-400/25"></span>
              <span className="relative font-semibold">Better Dev Screencasts</span>
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
  const router = useRouter()
  return (
    <Link href={path}>
      <a
        className={`border-b-2 py-1 font-semibold ${
          router.pathname.includes(path) ? 'border-indigo-500' : 'border-transparent'
        }`}
      >
        {children}
      </a>
    </Link>
  )
}
