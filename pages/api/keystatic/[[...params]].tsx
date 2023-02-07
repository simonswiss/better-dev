import createKeystaticAPIRoute from 'keystatic/api'

function requiredEnv(name: string, val: string | undefined): string {
  if (!val) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return val
}

export default createKeystaticAPIRoute({
  secret: requiredEnv('KEYSTATIC_SECRET', process.env.KEYSTATIC_SECRET),
  clientId: requiredEnv('GITHUB_CLIENT_ID', process.env.GITHUB_CLIENT_ID),
  clientSecret: requiredEnv('GITHUB_CLIENT_SECRET', process.env.GITHUB_CLIENT_SECRET),
  url: requiredEnv('AUTH_URL', process.env.AUTH_URL),
})
