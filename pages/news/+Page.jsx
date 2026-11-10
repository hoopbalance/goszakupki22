import { useData } from 'vike-react/useData'
import { Container, Grid, Typography } from '@mui/material'
import PageHero from '../../components/PageHero.jsx'
import NewsCard from '../../components/NewsCard.jsx'

export default function Page() {
  const { items } = useData()

  return (
    <>
      <PageHero title="Новости" subtitle="Новости законодательства о контрактной системе и закупочной деятельности." />
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Данные загружаются на сервере (SSR) из API <code>/api/news</code> — сейчас это заглушка.
        </Typography>
        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.slug}>
              <NewsCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
