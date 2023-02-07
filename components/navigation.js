import Link from 'next/link'

export default function Navigation() {
  return (
    <header>
      <div className="mx-auto max-w-7xl px-4 py-9 md:px-6 lg:px-8 2xl:max-w-8xl">
        <div className="ml-4">
          <Link href="/" className="mix group relative flex items-center gap-2">
            <span className="absolute h-12 w-12 -translate-x-4 rounded-full bg-indigo-400/50 transition group-hover:bg-indigo-400/25"></span>
            <span className="relative font-semibold">Better Dev Screencasts</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
