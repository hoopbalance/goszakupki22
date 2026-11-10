import { Box, Button, Container, Typography } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import { usePageContext } from 'vike-react/usePageContext'

export default function Page() {
  const pageContext = usePageContext()
  const is404 = pageContext.is404
  const Icon = is404 ? SearchOutlinedIcon : ErrorOutlineOutlinedIcon

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', py: 12 }}>
      <Icon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
      <Typography variant="h2" component="h1" gutterBottom>
        {is404 ? 'Страница не найдена' : 'Произошла ошибка'}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        {is404
          ? 'К сожалению, такой страницы не существует. Возможно, она была перемещена или удалена.'
          : 'Что-то пошло не так. Попробуйте обновить страницу или зайдите позже.'}
      </Typography>
      <Button href="/" variant="contained" size="large">
        На главную
      </Button>
    </Container>
  )
}
