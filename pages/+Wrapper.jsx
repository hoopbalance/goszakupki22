import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline, Box, Link } from '@mui/material'
import theme from '../lib/theme.js'
import 'medeo-font/sans.css'
import { getServerEmotionCache } from '../lib/emotion-cache.js'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function Wrapper({ children }) {
  const serverCache = typeof window === 'undefined' ? getServerEmotionCache() : null

  const content = (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Link
        href="#main-content"
        sx={{
          position: 'fixed', top: 8, left: 8, zIndex: 2000, p: 1.5,
          bgcolor: 'common.white', color: 'primary.darker', borderRadius: 1,
          transform: 'translateY(-160%)', '&:focus': { transform: 'translateY(0)' },
        }}
      >
        Перейти к содержанию
      </Link>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh', overflowX: 'clip' }}>
        <Header />
        <Box component="main" id="main-content" tabIndex={-1} sx={{ flex: 1 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )

  return serverCache ? <CacheProvider value={serverCache}>{content}</CacheProvider> : content
}
