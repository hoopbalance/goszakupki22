import { useState } from 'react'
import {
  AppBar, Box, Container, Toolbar, Typography, Button, IconButton, Drawer,
  List, Stack, useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import GavelIcon from '@mui/icons-material/Gavel'

export const NAV_ITEMS = [
  { href: '/', label: 'Главная' },
  { href: '/news', label: 'Новости' },
  { href: '/customer', label: 'Заказчикам' },
  { href: '/provider', label: 'Поставщикам' },
  { href: '/esp', label: 'ЭЦП' },
  { href: '/legislation', label: 'Законодательство' },
  { href: '/contacts', label: 'Контакты' },
]

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const nav = (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 0, md: 1 }} component="nav">
      {NAV_ITEMS.map((item) => (
        <Button
          key={item.href}
          href={item.href}
          color="inherit"
          sx={{
            justifyContent: 'flex-start',
            fontWeight: 500,
            px: { md: 1.5 },
            '&:hover': { color: 'secondary.main' },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Stack>
  )

  return (
    <Box sx={{ flexShrink: 0 }}>
      <Box sx={{ bgcolor: 'primary.dark', color: '#fff', py: 0.75 }}>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={3} justifyContent="flex-end" sx={{ fontSize: 14 }}>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <EmailIcon fontSize="inherit" />
              <Box component="a" href="mailto:529796@mail.ru" sx={{ color: 'inherit', textDecoration: 'none' }}>
                529796@mail.ru
              </Box>
            </Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <PhoneIcon fontSize="inherit" />
              <Box component="a" href="tel:+73852529796" sx={{ color: 'inherit', textDecoration: 'none' }}>
                (3852) 52-97-96
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <AppBar position="static" color="primary" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ gap: 1, py: 1 }}>
            <GavelIcon sx={{ color: 'secondary.main', fontSize: 34 }} />
            <Typography
              component="a"
              href="/"
              variant="h6"
              sx={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 700,
                lineHeight: 1.2,
                mr: 'auto',
              }}
            >
              Агентство
              <Box component="span" sx={{ display: 'block', fontSize: 13, fontWeight: 400, opacity: 0.85 }}>
                государственного заказа
              </Box>
            </Typography>
            {isMobile ? (
              <IconButton color="inherit" onClick={() => setDrawerOpen(true)} aria-label="Меню">
                <MenuIcon />
              </IconButton>
            ) : (
              nav
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 260, pt: 2 }} onClick={() => setDrawerOpen(false)}>
          <List>{nav}</List>
        </Box>
      </Drawer>
    </Box>
  )
}
