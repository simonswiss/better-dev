export default function MarkdownLayout({ children }) {
  return (
    <div className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-8xl">
      <div className="prose prose-slate lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto">
        {children}
      </div>
    </div>
  )
}
