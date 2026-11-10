import { render } from 'vike/abort'
import { fetchNewsItem } from '../../../lib/api.js'

// SSR: детальная новость запрашивается с сервера из API-заглушки.
// Если записи нет — рендерим страницу ошибки с HTTP 404.
export const data = async (pageContext) => {
  const { slug } = pageContext.routeParams
  const item = await fetchNewsItem(pageContext.apiBase, slug)
  if (!item) {
    throw render(404)
  }
  return { item }
}
