import Link from 'next/link'
import Image from 'next/image'

export default function Grid({ data }) {
  if (data.length === 0) {
    return (
      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 md:mt-16 lg:mt-24 lg:px-8 2xl:max-w-8xl">
        <footer className="inline-block max-w-xl rounded-lg bg-indigo-50 p-8 shadow-sm">
          <div className="space-y-4">
            <p className="text-indigo-9d00">
              There are no posts in this category... yet. Check back soon!
            </p>
          </div>
        </footer>
      </div>
    )
  }
  return (
    <div className="mx-auto mt-12 grid max-w-7xl gap-x-8 gap-y-12 px-4 sm:px-6 md:mt-16 lg:mt-24 lg:grid-cols-2 lg:gap-y-16 lg:px-8 2xl:max-w-8xl 2xl:grid-cols-3">
      {data.map((item) => (
        <div className="relative" key={item.slug}>
          <Link href={`/posts/${item.slug}`} className="hover:opacity-80">
            <Image
              className="aspect-video rounded-md object-cover shadow-lg"
              src={item.module.meta?.image || '/images/social-large.jpg'}
              alt=""
              width={800}
              height={450}
            />
          </Link>

          <h2 className="mt-4 text-lg font-semibold">
            <Link href={`/posts/${item.slug}`} className="hover:underline">
              {item.module.meta.title}
            </Link>
          </h2>
          <p className="mt-2 text-slate-700">{item.module.meta.excerpt}</p>
          <Link
            href={`/posts/${item.slug}`}
            className="mt-4 block font-medium text-indigo-500 hover:underline"
          >
            Read more &rarr;
          </Link>
        </div>
      ))}
    </div>
  )
}
