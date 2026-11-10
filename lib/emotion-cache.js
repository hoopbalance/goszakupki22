// Серверный emotion-кэш для извлечения стилей MUI при SSR.
// На клиенте не используется — там работает кэш emotion по умолчанию.
import createCache from '@emotion/cache'

let serverCache = null

export function createServerEmotionCache() {
  serverCache = createCache({ key: 'mui' })
  return serverCache
}

export function getServerEmotionCache() {
  return serverCache
}
