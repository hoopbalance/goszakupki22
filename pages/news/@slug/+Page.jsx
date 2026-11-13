import { useData } from 'vike-react/useData'
import { Box, Button, Card, Container, Stack, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PageHero from '../../../components/PageHero.jsx'
import { formatDate } from '../../../lib/format.js'

export default function Page() {
  const { item } = useData()

  return (
    <>
      <PageHero current="Новость" eyebrow={`Новости закупок · ${formatDate(item.date)}`} title={item.title} />
      <Container maxWidth="xl">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 760px) 300px' }, gap: { xs: 5, lg: 8 }, justifyContent: 'center', alignItems: 'start' }}>
          <Box component="article">
            <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>{item.excerpt}</Typography>
            {item.body.map((paragraph, index) => (
              <Typography key={`${item.slug}-${index}`} variant="body1" sx={{ mb: 2.5, lineHeight: 1.85 }}>{paragraph}</Typography>
            ))}
            <Button href="/news" startIcon={<ArrowBackIcon />} sx={{ mt: 3, px: 0 }}>Ко всем новостям</Button>
          </Box>
          <Card component="aside" variant="outlined" sx={{ p: 3, bgcolor: 'primary.lighter', position: { lg: 'sticky' }, top: { lg: 110 } }}>
            <Typography variant="h5" component="h2">Нужна помощь с закупкой?</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, mb: 3 }}>Разберём вашу ситуацию и подскажем порядок действий по 44-ФЗ или 223-ФЗ.</Typography>
            <Stack spacing={1.5}>
              <Button href="/contacts#callback" variant="contained" endIcon={<ArrowForwardIcon />}>Обсудить задачу</Button>
              <Button href="/news" variant="text">Другие новости</Button>
            </Stack>
          </Card>
        </Box>
      </Container>
    </>
  )
}
