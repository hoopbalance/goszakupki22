import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline, Box } from '@mui/material'
import theme from '../lib/theme.js'
import 'medeo-font/sans.css'
import { getServerEmotionCache } from '../lib/emotion-cache.js'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function Wrapper({ children }) {
  // На сервере подключаем emotion-кэш, созданный в onBeforeRenderHtml —
  // его стили извлекаются в onAfterRenderHtml и инлайнятся в HTML.
  const serverCache = typeof window === 'undefined' ? getServerEmotionCache() : null

  const content = (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flex: 1 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )

  return serverCache ? <CacheProvider value={serverCache}>{content}</CacheProvider> : content
}
