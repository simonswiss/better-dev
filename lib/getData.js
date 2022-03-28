function importAll(r) {
  return r
    .keys()
    .filter((filename) => filename.startsWith('.'))
    .map((filename) => ({
      slug: filename.substr(2).replace(/\/index\.mdx$/, ''),
      filename,
      module: r(filename),
    }))
    .sort((a, b) => dateSortDesc(a.module.meta.date, b.module.meta.date))
}

function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export function getPosts() {
  return importAll(require.context('../pages/posts', true, /\.mdx$/))
}
