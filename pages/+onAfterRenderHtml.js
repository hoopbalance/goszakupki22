import createEmotionServer from '@emotion/server/create-instance'
import { getServerEmotionCache } from '../lib/emotion-cache.js'

// После серверного рендеринга вытаскиваем CSS emotion и инлайним его
// перед разметкой страницы, чтобы избежать вспышки нестилизованного контента.
export default function onAfterRenderHtml(pageContext) {
  if (!pageContext.pageHtmlString) return
  const cache = getServerEmotionCache()
  if (!cache) return
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache)
  const chunks = extractCriticalToChunks(pageContext.pageHtmlString)
  const styles = constructStyleTagsFromChunks(chunks)
  pageContext.pageHtmlString = styles + pageContext.pageHtmlString
}
