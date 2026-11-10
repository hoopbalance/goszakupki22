// Клиент для API. При SSR (на сервере) нужен абсолютный URL — его
// прокидывает сервер через pageContext.apiBase. В браузере fetch идёт
// по относительному пути на тот же origin.

function resolveBase(apiBase) {
  if (typeof window === 'undefined') {
    return apiBase || process.env.INTERNAL_API_URL || 'http://127.0.0.1:3000'
  }
  return ''
}

async function request(apiBase, path) {
  const res = await fetch(`${resolveBase(apiBase)}${path}`)
  if (!res.ok) throw new Error(`API error: ${res.status} ${path}`)
  return res.json()
}

export function fetchNewsList(apiBase) {
  return request(apiBase, '/api/news').then((data) => data.items)
}

export async function fetchNewsItem(apiBase, slug) {
  const res = await fetch(`${resolveBase(apiBase)}/api/news/${encodeURIComponent(slug)}`)
  if (res.status === 404) return null
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  const data = await res.json()
  return data.item
}

export async function sendCallback(apiBase, payload) {
  const res = await fetch(`${resolveBase(apiBase)}/api/callback`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return res.json()
}
