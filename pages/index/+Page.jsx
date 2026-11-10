import { useData } from 'vike-react/useData'
import {
  Box, Button, Card, CardContent, Container, Grid, Stack, Typography,
} from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AssignmentIcon from '@mui/icons-material/Assignment'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PageHero from '../../components/PageHero.jsx'
import NewsCard from '../../components/NewsCard.jsx'
import CallbackForm from '../../components/CallbackForm.jsx'

const PARTNERS = [
  { name: 'zakupki.gov.ru', href: 'http://zakupki.gov.ru/epz/main/public/home.html' },
  { name: 'fas.gov.ru', href: 'https://fas.gov.ru/' },
  { name: 'gosuslugi.ru', href: 'https://www.gosuslugi.ru/' },
  { name: 'rts-tender.ru', href: 'https://www.rts-tender.ru/' },
  { name: 'sberbank-ast.ru', href: 'http://sberbank-ast.ru/' },
  { name: '223.etp-ets.ru', href: 'https://223.etp-ets.ru/' },
  { name: 'roseltorg.ru', href: 'http://roseltorg.ru/' },
  { name: 'zakazrf.ru', href: 'http://zakazrf.ru/' },
  { name: 'gz.lot-online.ru', href: 'https://gz.lot-online.ru/' },
]

const DIRECTIONS = [
  {
    icon: <AssignmentIcon fontSize="large" color="primary" />,
    title: 'Заказчикам',
    text: 'Полный комплекс услуг по информационно-правовому сопровождению закупочной деятельности: планы и план-графики, документация, реестр контрактов, 44-ФЗ и 223-ФЗ.',
    href: '/customer',
  },
  {
    icon: <StorefrontIcon fontSize="large" color="primary" />,
    title: 'Поставщикам',
    text: 'Сопровождение участия в торгах — от мониторинга площадок до подписания контракта: заявки, аккредитация на ЭТП, аукционы, жалобы, защита интересов.',
    href: '/provider',
  },
]

export default function Page() {
  const { latestNews } = useData()

  return (
    <>
      <PageHero
        title="Агентство государственного заказа"
        subtitle="Ваш помощник в сфере закупок! Наша компания работает как с заказчиками, так и с участниками закупок."
      />

      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom>
          Наша компания работает как с заказчиками, так и с участниками закупок
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 900, mb: 2 }}>
          Заказчики могут обратиться к нам за подготовкой и проведением любой конкурентной
          процедуры — начиная от подготовки документации и до определения поставщика. Являясь
          официально зарегистрированной в ЕИС (zakupki.gov.ru) специализированной организацией,
          мы работаем по всей Алтайской краевой практике, включая Постановление Администрации
          Алтайского края № 712 от 30.12.2013 г.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 900, mb: 6 }}>
          Поставщики получат полный комплекс обслуживания: от подбора информации до заключения
          контракта — получение ЭЦП, подготовка заявки, запросы на разъяснение, аккредитация на
          ЭТП, торги в аукционе, протоколы разногласий, жалобы и многое другое.
        </Typography>

        <Grid container spacing={3} sx={{ mb: 8 }}>
          {DIRECTIONS.map((dir) => (
            <Grid item xs={12} md={6} key={dir.title}>
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Stack spacing={2}>
                    {dir.icon}
                    <Typography variant="h5" component="h3">
                      {dir.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {dir.text}
                    </Typography>
                    <Button href={dir.href} endIcon={<ArrowForwardIcon />} sx={{ alignSelf: 'flex-start' }}>
                      Подробнее
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
          <Typography variant="h4" component="h2">
            Новости
          </Typography>
          <Button href="/news" endIcon={<ArrowForwardIcon />}>
            Все новости
          </Button>
        </Stack>
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {latestNews.map((item) => (
            <Grid item xs={12} md={6} key={item.slug}>
              <NewsCard item={item} />
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" component="h2" gutterBottom>
          Полезные ресурсы
        </Typography>
        <Grid container spacing={2} sx={{ mb: 8 }}>
          {PARTNERS.map((p) => (
            <Grid item xs={6} sm={4} md={3} key={p.href}>
              <Card>
                <CardActionAreaLink p={p} />
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mb: 6 }}>
          <CallbackForm />
        </Box>
      </Container>
    </>
  )
}

function CardActionAreaLink({ p }) {
  return (
    <Box
      component="a"
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        minHeight: 72, p: 2, color: 'primary.main', fontWeight: 600,
        textDecoration: 'none', '&:hover': { color: 'secondary.dark' },
      }}
    >
      {p.name}
    </Box>
  )
}
