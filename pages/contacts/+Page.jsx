import { Box, Card, Container, Link, Stack, Typography } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PlaceIcon from '@mui/icons-material/Place'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import PrintIcon from '@mui/icons-material/Print'
import PageHero from '../../components/PageHero.jsx'
import CallbackForm from '../../components/CallbackForm.jsx'
import SectionHeading from '../../components/SectionHeading.jsx'

export default function Page() {
  return (
    <>
      <PageHero
        current="Контакты"
        eyebrow="Барнаул · Алтайский край"
        title="Свяжитесь с агентством"
        subtitle="Расскажите о закупке или задайте вопрос. Отвечаем по телефону, по электронной почте и при личной встрече в офисе."
      />
      <Container maxWidth="xl" component="section">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '0.75fr 1.25fr' }, gap: { xs: 4, lg: 7 }, alignItems: 'start' }}>
          <Stack spacing={2}>
            <ContactCard icon={PhoneIcon} title="Телефоны">
              <Stack spacing={0.5}>
                <Link href="tel:+73852532087" color="text.primary" fontWeight={650}>(3852) 53-20-87</Link>
                <Link href="tel:+73852529796" color="text.primary">(3852) 52-97-96</Link>
                <Link href="tel:+73852532583" color="text.primary">(3852) 53-25-83</Link>
              </Stack>
            </ContactCard>
            <ContactCard icon={EmailIcon} title="Электронная почта">
              <Link href="mailto:529796@mail.ru" color="text.primary" sx={{ overflowWrap: 'anywhere' }}>529796@mail.ru</Link>
            </ContactCard>
            <ContactCard icon={PlaceIcon} title="Адрес офиса">
              <Typography variant="body2" color="text.secondary">656044, Алтайский край,<br />г. Барнаул, ул. Попова, 55, 1 этаж</Typography>
            </ContactCard>
            <ContactCard icon={AccessTimeIcon} title="Режим работы">
              <Typography variant="body2" color="text.secondary">Понедельник–пятница: 08:30–17:00<br />Суббота и воскресенье: выходной</Typography>
            </ContactCard>
            <ContactCard icon={PrintIcon} title="Факс">
              <Typography variant="body2" color="text.secondary">(3852) 43-05-29</Typography>
            </ContactCard>
          </Stack>
          <CallbackForm title="Напишите нам" />
        </Box>
      </Container>

      <Container maxWidth="xl" component="section" sx={{ pt: { xs: 7, md: 10 } }}>
        <SectionHeading eyebrow="Как нас найти" title="Офис в Барнауле" text="Улица Попова, 55, первый этаж. Перед визитом рекомендуем позвонить и согласовать время встречи." />
        <Card variant="outlined" sx={{ overflow: 'hidden', bgcolor: 'background.neutral' }}>
          <iframe
            title="Карта: Барнаул, ул. Попова, 55"
            src="https://www.openstreetmap.org/export/embed.html?bbox=83.75%2C53.33%2C83.83%2C53.37&layer=mapnik&marker=53.349%2C83.79"
            width="100%"
            height="420"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
          />
        </Card>
      </Container>
    </>
  )
}

function ContactCard({ icon: Icon, title, children }) {
  return (
    <Card variant="outlined" sx={{ p: 2.5 }}>
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Box sx={{ width: 42, height: 42, flexShrink: 0, display: 'grid', placeItems: 'center', borderRadius: 2, bgcolor: 'primary.lighter', color: 'primary.main' }}><Icon sx={{ fontSize: 21 }} /></Box>
        <Box sx={{ minWidth: 0 }}>
          <Typography variant="h6" component="h2" sx={{ mb: 0.75 }}>{title}</Typography>
          {children}
        </Box>
      </Stack>
    </Card>
  )
}
