import createMDX from '@next/mdx'

const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['placehold.it', 'placekitten.com', 'github.com'],
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig)
