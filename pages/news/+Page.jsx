import { useData } from 'vike-react/useData'
import { Box, Container } from '@mui/material'
import PageHero from '../../components/PageHero.jsx'
import NewsCard from '../../components/NewsCard.jsx'

export default function Page() {
  const { items } = useData()

  return (
    <>
      <PageHero
        current="Новости"
        eyebrow="Законодательство и практика"
        title="Новости госзакупок и тендеров"
        subtitle="Изменения в контрактной системе, закупочной деятельности и правилах работы участников рынка."
      />
      <Container maxWidth="xl" component="section">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
          {items.map((item) => <NewsCard item={item} key={item.slug} />)}
        </Box>
      </Container>
    </>
  )
}
