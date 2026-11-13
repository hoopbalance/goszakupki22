import { Box, Button, Container, Stack, Typography } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import HomeIcon from '@mui/icons-material/Home'
import { usePageContext } from 'vike-react/usePageContext'

export default function Page() {
  const pageContext = usePageContext()
  const is404 = pageContext.is404
  const Icon = is404 ? SearchOutlinedIcon : ErrorOutlineOutlinedIcon

  return (
    <Container maxWidth="md" sx={{ py: { xs: 8, md: 14 } }}>
      <Stack alignItems="center" textAlign="center">
        <Box sx={{ width: 88, height: 88, display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: 'primary.lighter', color: 'primary.main', mb: 3 }}>
          <Icon sx={{ fontSize: 44 }} />
        </Box>
        <Typography variant="overline" component="p" color="primary.main" sx={{ mb: 1.5 }}>{is404 ? 'Ошибка 404' : 'Ошибка сервера'}</Typography>
        <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2.25rem', md: '3.25rem' } }}>
          {is404 ? 'Такой страницы нет' : 'Не удалось открыть страницу'}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, mb: 4, maxWidth: 560 }}>
          {is404
            ? 'Возможно, адрес изменился или в ссылке есть ошибка. Вернитесь на главную или откройте нужный раздел.'
            : 'Попробуйте обновить страницу. Если ошибка повторяется, свяжитесь с нами по телефону (3852) 52-97-96.'}
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button href="/" variant="contained" size="large" startIcon={<HomeIcon />}>На главную</Button>
          <Button href="/contacts" variant="outlined" size="large">Контакты</Button>
        </Stack>
      </Stack>
    </Container>
  )
}
