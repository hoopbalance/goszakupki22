import express from 'express'
import { renderPage, createDevMiddleware } from 'vike/server'
import { newsList, getNewsBySlug } from './data/news.js'

// Production-режим включается через NODE_ENV=production или флаг --prod
// (флаг удобен для Windows/PowerShell, где инлайн-переменные не работают).
const isProduction =
  process.env.NODE_ENV === 'production' || process.argv.includes('--prod')
const port = process.env.PORT || 3000

const app = express()
app.use(express.json())

// ---------- API (заглушка новостей + обратный звонок) ----------
app.get('/api/news', (_req, res) => {
  res.json({ items: newsList })
})

app.get('/api/news/:slug', (req, res) => {
  const item = getNewsBySlug(req.params.slug)
  if (!item) return res.status(404).json({ error: 'not_found' })
  res.json({ item })
})

app.post('/api/callback', (req, res) => {
  // Заглушка: здесь позже появится отправка письма / запись в БД.
  console.log('[callback] Новая заявка на обратный звонок:', req.body)
  res.json({ ok: true })
})

// ---------- Vike SSR ----------
if (isProduction) {
  app.use(express.static('dist/client', { maxAge: '1h', index: false }))
} else {
  const { devMiddleware } = await createDevMiddleware({ root: process.cwd() })
  app.use(devMiddleware)
}

app.use(async (req, res, next) => {
  const pageContextInit = {
    urlOriginal: req.originalUrl,
    // Прокидываем во все страницы, чтобы +data ходил в API без хардкода порта
    apiBase: `http://127.0.0.1:${port}`,
  }
  const result = await renderPage(pageContextInit)
  // httpResponse есть всегда, даже для abort'ов (redirect/render(404)) —
  // Vike при этом рендерит страницу ошибки с нужным статусом.
  const { httpResponse } = result
  if (httpResponse) {
    return res.status(httpResponse.statusCode).type(httpResponse.contentType).send(await httpResponse.getBody())
  }
  if (result.errorWhileRendering) return next(result.errorWhileRendering)
  next()
})

app.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port} (${isProduction ? 'production' : 'dev'})`)
})
