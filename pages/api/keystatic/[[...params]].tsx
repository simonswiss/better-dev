import { makeAPIRouteHandler } from '@keystatic/next/api'
import keystaticConfig from '../../../keystatic.config'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '20mb',
    },
    responseLimit: false,
  },
}

export default makeAPIRouteHandler({ config: keystaticConfig })
