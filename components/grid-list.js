import Link from 'next/link'
import Image from 'next/image'

export default function Grid({ data, showCategory = false }) {
  return (
    <div className="mx-auto mt-12 grid max-w-7xl gap-x-8 gap-y-12 px-4 sm:px-6 md:mt-16 lg:mt-24 lg:grid-cols-2 lg:gap-y-16 lg:px-8 2xl:max-w-8xl 2xl:grid-cols-3">
      {data.map((item) => (
        <div className="relative" key={item.slug}>
          {showCategory && <CategoryBadge category={item.category} />}
          <Link href={`/${item.category}/${item.slug}`}>
            <a>
              <Image
                className="aspect-video rounded-md object-cover shadow-lg"
                src={item.module.meta?.image || '/images/bds-logo.png'}
                alt=""
                width={800}
                height={450}
              />
            </a>
          </Link>
          <h2 className="mt-4 text-lg font-semibold">{item.module.meta.title}</h2>
          <p className="mt-2 text-gray-700">{item.module.meta.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

function CategoryBadge({ category }) {
  switch (category) {
    case 'hot-tips':
      return <Badge colorClasses="bg-yellow-200 text-yellow-900">Hot tip</Badge>
      break
    case 'videos':
      return <Badge colorClasses="bg-pink-200 text-pink-900">Video</Badge>
      break
    case 'deep-dives':
      return <Badge colorClasses="bg-indigo-200 text-indigo-900">Deep dive</Badge>
      break
    default:
      break
  }
}

function Badge({ colorClasses, children }) {
  return (
    <p
      className={`z-10 place-items-cener absolute -top-3 -left-3 grid -rotate-12 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider shadow-lg ${colorClasses}`}
    >
      {children}
    </p>
  )
}
