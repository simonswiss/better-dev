export default function Footer() {
  return (
    <footer>
      <div className="mx-auto mt-32 mb-10 max-w-7xl px-4 md:px-6 lg:px-8 xl:mt-48 2xl:max-w-8xl">
        <p>
          Copyright &copy; {new Date().getFullYear()} Better Dev Screencasts. Built with{' '}
          <a className="underline hover:text-cyan-700" href="https://sanity.io">
            Sanity.io
          </a>
          ,{' '}
          <a className="underline hover:text-cyan-700" href="https://remix.run">
            Remix
          </a>{' '}
          and{' '}
          <a className="underline hover:text-cyan-700" href="https://tailwindcss.com">
            Tailwind CSS
          </a>{' '}
          by{' '}
          <a className="underline hover:text-cyan-700" href="https://simonswiss.com">
            simonswiss
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
