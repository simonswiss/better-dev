/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

export default function Custom404() {
  return (
    <header>
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 md:pt-20 lg:px-8 2xl:max-w-8xl">
        <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          <h1 className="text-4xl font-bold text-cyan-900 mix-blend-multiply md:text-5xl lg:text-6xl lg:leading-[1.2] xl:text-7xl">
            404 - Page not found
          </h1>
          <div className="mt-4 max-w-3xl space-y-6 text-xl text-cyan-800 md:mt-8 md:text-2xl lg:text-3xl">
            <p>Whoopsie, looks like you've landed in some unexplored territory.</p>
            <p>
              Shall we go back to the{' '}
              <Link href="/" className="text-indigo-500 underline hover:text-indigo-700">
                homepage
              </Link>
              ?
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
