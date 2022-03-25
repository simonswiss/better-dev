export default function PageHeading({ title, children }) {
  return (
    <header>
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 md:pt-20 lg:px-8 2xl:max-w-8xl">
        <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          <h1 className="text-4xl font-bold text-cyan-900 mix-blend-multiply md:text-5xl lg:text-6xl lg:leading-[1.2] xl:text-7xl">
            {title}
          </h1>
          <div className="mt-4 max-w-3xl text-xl text-cyan-800 md:mt-8 md:text-2xl lg:text-3xl">
            {children}
          </div>
        </div>
      </div>
    </header>
  )
}
