/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    appDir: true,
  },
  // reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['placehold.it', 'placekitten.com', 'github.com'],
  },
}
