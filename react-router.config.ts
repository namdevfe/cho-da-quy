import type { Config } from '@react-router/dev/config'

const isDev = process.env.NODE_ENV === 'development'

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false
} satisfies Config
