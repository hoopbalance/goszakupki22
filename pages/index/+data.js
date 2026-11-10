import { fetchNewsList } from '../../lib/api.js'

// SSR: данные для главной тоже приходят из API новостей (первые 4 записи).
export const data = async (pageContext) => {
  const items = await fetchNewsList(pageContext.apiBase)
  return { latestNews: items.slice(0, 4) }
}
