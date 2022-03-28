function importAll(r, category) {
  return r
    .keys()
    .filter((filename) => filename.startsWith('.'))
    .map((filename) => ({
      slug: filename.substr(2).replace(/\/index\.mdx$/, ''),
      category,
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
  return importAll(require.context('../pages/posts', true, /\.mdx$/), 'posts')
}
export function getHotTips() {
  return importAll(require.context('../pages/hot-tips', true, /\.mdx$/), 'hot-tips')
}
export function getVideos() {
  return importAll(require.context('../pages/videos', true, /\.mdx$/), 'videos')
}
export function getDeepDives() {
  return importAll(require.context('../pages/deep-dives', true, /\.mdx$/), 'deep-dives')
}
export function getAllFiles() {
  return [
    ...importAll(require.context('../pages/hot-tips', true, /\.mdx$/), 'hot-tips'),
    ...importAll(require.context('../pages/videos', true, /\.mdx$/), 'videos'),
    ...importAll(require.context('../pages/deep-dives', true, /\.mdx$/), 'deep-dives'),
  ].sort((a, b) => dateSortDesc(a.module.meta.date, b.module.meta.date))
}
