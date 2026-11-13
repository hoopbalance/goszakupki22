import { useState } from 'react'
import {
  AppBar, Box, Button, Container, Drawer, IconButton, List, ListItemButton,
  Stack, Toolbar, Typography, useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { usePageContext } from 'vike-react/usePageContext'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Brand from './Brand.jsx'

export const NAV_ITEMS = [
  { href: '/', label: 'Главная' },
  { href: '/customer', label: 'Заказчикам' },
  { href: '/provider', label: 'Поставщикам' },
  { href: '/esp', label: 'ЭЦП' },
  { href: '/legislation', label: 'Законодательство' },
  { href: '/news', label: 'Новости' },
  { href: '/contacts', label: 'Контакты' },
]

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const { urlPathname = '/' } = usePageContext()
  const isActive = (href) => href === '/' ? urlPathname === '/' : urlPathname.startsWith(href)

  return (
    <Box component="header" sx={{ flexShrink: 0 }}>
      <Box sx={{ bgcolor: 'primary.darker', color: 'common.white', py: 1 }}>
        <Container maxWidth="xl">
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.72)', display: { xs: 'none', sm: 'block' } }}>
              Сопровождение закупок в Барнауле и Алтайском крае
            </Typography>
            <Stack direction="row" spacing={{ xs: 2, md: 3 }} sx={{ ml: 'auto' }}>
              <Box component="a" href="mailto:529796@mail.ru" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, minHeight: 32, color: 'inherit', textDecoration: 'none', fontSize: 13 }}>
                <EmailIcon sx={{ fontSize: 16 }} aria-hidden="true" />
                <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>529796@mail.ru</Box>
                <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>Написать</Box>
              </Box>
              <Box component="a" href="tel:+73852529796" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, minHeight: 32, color: 'inherit', textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>
                <PhoneIcon sx={{ fontSize: 16 }} aria-hidden="true" />
                (3852) 52-97-96
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <AppBar position="sticky" color="inherit" elevation={0} sx={{ bgcolor: 'rgba(255,255,255,0.96)', borderBottom: '1px solid', borderColor: 'divider', zIndex: theme.zIndex.appBar }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 78 }, gap: 2 }}>
            <Brand />
            {!isMobile && (
              <Stack component="nav" aria-label="Основная навигация" direction="row" spacing={0.25} sx={{ ml: 'auto' }}>
                {NAV_ITEMS.map((item) => (
                  <Button
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    sx={{
                      px: 1.25,
                      minHeight: 42,
                      color: isActive(item.href) ? 'primary.dark' : 'text.secondary',
                      bgcolor: isActive(item.href) ? 'primary.lighter' : 'transparent',
                      fontSize: 14,
                      whiteSpace: 'nowrap',
                      '&:hover': { color: 'primary.dark', bgcolor: 'primary.lighter' },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
            )}
            <Button href="/contacts#callback" variant="contained" endIcon={<ArrowForwardIcon />} sx={{ display: { xs: 'none', lg: 'inline-flex' }, ml: 1, whiteSpace: 'nowrap' }}>
              Обсудить задачу
            </Button>
            {isMobile && (
              <IconButton onClick={() => setDrawerOpen(true)} aria-label="Открыть меню" sx={{ ml: 'auto', color: 'primary.darker' }}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { width: 'min(88vw, 360px)', p: 2 } }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
          <Brand />
          <IconButton onClick={() => setDrawerOpen(false)} aria-label="Закрыть меню">
            <CloseIcon />
          </IconButton>
        </Stack>
        <List component="nav" aria-label="Мобильная навигация" disablePadding>
          {NAV_ITEMS.map((item) => (
            <ListItemButton
              key={item.href}
              component="a"
              href={item.href}
              selected={isActive(item.href)}
              aria-current={isActive(item.href) ? 'page' : undefined}
              onClick={() => setDrawerOpen(false)}
              sx={{ minHeight: 52, borderRadius: 2, px: 2, mb: 0.5 }}
            >
              {item.label}
            </ListItemButton>
          ))}
        </List>
        <Button href="/contacts#callback" variant="contained" fullWidth size="large" sx={{ mt: 3 }} onClick={() => setDrawerOpen(false)}>
          Обсудить задачу
        </Button>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 3, px: 1 }}>
          Пн–Пт, 08:30–17:00<br />Барнаул, ул. Попова, 55
        </Typography>
      </Drawer>
    </Box>
  )
}
