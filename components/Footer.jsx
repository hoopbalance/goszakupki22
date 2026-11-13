import { Box, Container, Divider, Link, Stack, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PlaceIcon from '@mui/icons-material/Place'
import Brand from './Brand.jsx'
import { NAV_ITEMS } from './Header.jsx'

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.darker', color: 'common.white', mt: { xs: 8, md: 12 }, pt: { xs: 6, md: 8 }, pb: 3 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1.4fr 0.7fr 1fr' }, gap: { xs: 5, md: 8 } }}>
          <Box>
            <Brand light />
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.72)', maxWidth: 400, mt: 3 }}>
              Информационно-правовое сопровождение госзакупок и тендеров для заказчиков и поставщиков по 44-ФЗ и 223-ФЗ.
            </Typography>
          </Box>
          <Box>
            <Typography variant="overline" component="h2" sx={{ color: 'rgba(255,255,255,0.55)', display: 'block', mb: 2 }}>
              Разделы
            </Typography>
            <Stack spacing={0.5}>
              {NAV_ITEMS.slice(1).map((item) => (
                <Link key={item.href} href={item.href} underline="hover" sx={{ color: 'rgba(255,255,255,0.82)', py: 0.5, width: 'fit-content' }}>
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Box>
          <Box>
            <Typography variant="overline" component="h2" sx={{ color: 'rgba(255,255,255,0.55)', display: 'block', mb: 2 }}>
              Контакты
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.25} alignItems="flex-start">
                <PlaceIcon sx={{ fontSize: 20, mt: 0.25, color: 'primary.light' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.78)' }}>
                  656044, Алтайский край,<br />г. Барнаул, ул. Попова, 55, 1 этаж
                </Typography>
              </Stack>
              <Stack spacing={0.5}>
                <Link href="tel:+73852532087" sx={{ color: 'common.white', fontWeight: 650 }}>(3852) 53-20-87</Link>
                <Link href="tel:+73852529796" sx={{ color: 'common.white' }}>(3852) 52-97-96</Link>
                <Link href="tel:+73852532583" sx={{ color: 'common.white' }}>(3852) 53-25-83</Link>
              </Stack>
              <Link href="mailto:529796@mail.ru" sx={{ color: 'common.white', display: 'inline-flex', alignItems: 'center', gap: 1, width: 'fit-content' }}>
                <EmailIcon sx={{ fontSize: 19 }} />529796@mail.ru
              </Link>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)' }}>Пн–Пт: 08:30–17:00</Typography>
            </Stack>
          </Box>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.14)', my: 4 }} />
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={1}>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.55)' }}>© 2021–2026 Агентство государственного заказа</Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.55)' }}>Барнаул · Алтайский край</Typography>
        </Stack>
      </Container>
    </Box>
  )
}
