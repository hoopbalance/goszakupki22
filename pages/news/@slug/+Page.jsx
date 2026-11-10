import { useData } from 'vike-react/useData'
import { Breadcrumbs, Button, Container, Divider, Stack, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import PageHero from '../../../components/PageHero.jsx'
import { formatDate } from '../../../lib/format.js'

export default function Page() {
  const { item } = useData()

  return (
    <>
      <PageHero title={item.title} subtitle={formatDate(item.date)} />
      <Container maxWidth="md">
        <Breadcrumbs sx={{ mb: 4 }}>
          <Typography component="a" href="/" color="inherit">Главная</Typography>
          <Typography component="a" href="/news" color="inherit">Новости</Typography>
          <Typography color="text.primary">{formatDate(item.date)}</Typography>
        </Breadcrumbs>

        {item.body.map((paragraph, i) => (
          <Typography key={i} variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            {paragraph}
          </Typography>
        ))}

        <Divider sx={{ my: 4 }} />
        <Stack direction="row" spacing={2}>
          <Button href="/news" startIcon={<ArrowBackIcon />}>
            Ко всем новостям
          </Button>
          <Button href="/customer" variant="outlined">
            Заказать обратный звонок
          </Button>
        </Stack>
      </Container>
    </>
  )
}
