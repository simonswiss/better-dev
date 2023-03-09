export default function Footer() {
  return (
    <footer>
      <div className="mx-auto mt-20 mb-10 max-w-7xl px-4 md:px-6 lg:mt-32 lg:px-8 2xl:max-w-8xl">
        <p className="text-center">
          Copyright &copy; {new Date().getFullYear()} Better Dev Screencasts. Built with{' '}
          <a className="underline  hover:text-indigo-500" href="https://keystatic.thinkmill.com.au">
            Keystatic
          </a>
          ,{' '}
          <a className="underline  hover:text-indigo-500" href="https://nextjs.org">
            Next.js
          </a>{' '}
          and{' '}
          <a className="underline  hover:text-indigo-500" href="https://tailwindcss.com">
            Tailwind CSS
          </a>{' '}
          by{' '}
          <a className="underline  hover:text-indigo-500" href="https://simonswiss.com">
            simonswiss
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
