import { fetchNewsList } from '../../lib/api.js'

// SSR: список новостей запрашивается с сервера из API-заглушки.
export const data = async (pageContext) => {
  const items = await fetchNewsList(pageContext.apiBase)
  return { items }
}
