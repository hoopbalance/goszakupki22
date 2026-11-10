import { Box, Container, Grid, Stack, Typography, Divider } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import PlaceIcon from '@mui/icons-material/Place'
import { NAV_ITEMS } from './Header.jsx'

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.dark', color: '#fff', mt: 8, py: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Typography variant="h6" gutterBottom>
              Агентство государственного заказа
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.85, maxWidth: 380 }}>
              Ваш помощник в сфере закупок. Работаем как с заказчиками, так и с участниками
              закупок по 44-ФЗ и 223-ФЗ.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" gutterBottom sx={{ color: 'secondary.main' }}>
              Разделы
            </Typography>
            <Stack spacing={0.75}>
              {NAV_ITEMS.map((item) => (
                <Box
                  key={item.href}
                  component="a"
                  href={item.href}
                  sx={{ color: 'inherit', textDecoration: 'none', opacity: 0.85, '&:hover': { opacity: 1 } }}
                >
                  {item.label}
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom sx={{ color: 'secondary.main' }}>
              Наш адрес
            </Typography>
            <Stack spacing={1} sx={{ opacity: 0.9 }}>
              <Stack direction="row" spacing={1}>
                <PlaceIcon fontSize="small" />
                <Typography variant="body2">
                  656044, РФ, Алтайский край, г. Барнаул, ул. Попова, 55 — 1 этаж
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">(3852) 53-20-87, 52-97-96, 53-25-83</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon fontSize="small" />
                <Box component="a" href="mailto:529796@mail.ru" sx={{ color: 'inherit' }}>
                  529796@mail.ru
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', my: 3 }} />
        <Typography variant="body2" sx={{ opacity: 0.7, textAlign: 'center' }}>
          Агентство государственного заказа © 2021–2026
        </Typography>
      </Container>
    </Box>
  )
}
