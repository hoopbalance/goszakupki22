# goszakupki22 — Агентство государственного заказа

Переписанный под SSR сайт [goszakupki22.ru](http://goszakupki22.ru/):
**Vike + React + MUI (Material UI)**, серверный рендеринг всех страниц.

## Стек

- [Vike](https://vike.dev/) (`vike-react`) — SSR/фреймворк
- React 19 + Vite
- MUI (Material UI) + Emotion — стили MUI при SSR извлекаются и инлайнятся в HTML
  (`pages/+onBeforeRenderHtml.js`, `pages/+onAfterRenderHtml.js`)
- Express — сервер, API-заглушка и Vike middleware

## Страницы

| Путь | Описание |
| --- | --- |
| `/` | Главная (последние новости тоже SSR из API) |
| `/news` | Список новостей — SSR, данные из `/api/news` |
| `/news/:slug` | Детальная новость — SSR, данные из `/api/news/:slug` |
| `/customer` | Заказчикам |
| `/provider` | Поставщикам |
| `/esp` | ЭЦП |
| `/legislation` | Законодательство |
| `/contacts` | Контакты + форма обратного звонка |

## API (заглушка)

| Метод | Путь | Описание |
| --- | --- | --- |
| GET | `/api/news` | Список новостей |
| GET | `/api/news/:slug` | Детальная новость (404, если не найдена) |
| POST | `/api/callback` | Заявка на обратный звонок (пока только лог в консоль) |

Данные новостей — в `server/data/news.js`. Когда появится реальный бэкенд,
достаточно заменить реализацию роутов в `server/index.js` — контракт ответа:
`{ items: NewsItem[] }` и `{ item: NewsItem }`, где
`NewsItem = { slug, title, date, excerpt, body: string[] }`.

## Запуск

```bash
npm install
npm run dev        # dev-режим (Vite dev server + SSR), http://localhost:3000
npm run build      # production-сборка
npm run preview    # запуск собранного приложения, http://localhost:3000
```

Порт задаётся через `PORT`, адрес внутреннего API при SSR — через `INTERNAL_API_URL`
(по умолчанию `http://127.0.0.1:3000`, сервер также прокидывает его в страницы
через `pageContext.apiBase`).

## Структура

```
server/
  index.js        Express: API + Vike SSR
  data/news.js    Заглушка данных новостей
pages/
  +Wrapper.jsx    ThemeProvider + Layout (шапка/подвал) для всех страниц
  +onBeforeRenderHtml.js / +onAfterRenderHtml.js  Инъекция стилей MUI при SSR
  index/          Главная
  news/           Список новостей (+data.js — SSR-запрос к API)
  news/@slug/     Детальная новость (+data.js — SSR-запрос к API)
  customer/ provider/ esp/ legislation/ contacts/
components/       Header, Footer, PageHero, NewsCard, CallbackForm
lib/              api.js (клиент API), format.js, theme.js
```
