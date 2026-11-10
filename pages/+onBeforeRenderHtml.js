import { createServerEmotionCache } from '../lib/emotion-cache.js'

// Создаём emotion-кэш перед серверным рендерингом страницы.
// Один запрос = один рендер (renderToString синхронный), поэтому
// хранить кэш в модуле безопасно.
export default function onBeforeRenderHtml() {
  createServerEmotionCache()
}
