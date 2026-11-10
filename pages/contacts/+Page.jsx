import { Container, Grid, Paper, Stack, Typography } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PlaceIcon from '@mui/icons-material/Place'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import PrintIcon from '@mui/icons-material/Print'
import PageHero from '../../components/PageHero.jsx'
import CallbackForm from '../../components/CallbackForm.jsx'

export default function Page() {
  return (
    <>
      <PageHero title="Контакты" subtitle="Мы всегда рады ответить на ваши вопросы." />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <ContactCard
                icon={<AccessTimeIcon color="primary" />}
                title="Режим работы"
                lines={['ПН–ПТ: 08:30 – 17:00', 'СБ–ВС: выходной']}
              />
              <ContactCard
                icon={<PlaceIcon color="primary" />}
                title="Наш адрес"
                lines={['656044, РФ, Алтайский край,', 'г. Барнаул, ул. Попова, 55']}
              />
              <ContactCard
                icon={<PhoneIcon color="primary" />}
                title="Телефоны"
                lines={['(3852) 53-20-87,', '52-97-96,', '53-25-83']}
              />
              <ContactCard
                icon={<PrintIcon color="primary" />}
                title="Факс"
                lines={['(3852) 43-05-29']}
              />
              <ContactCard
                icon={<EmailIcon color="primary" />}
                title="E-mail"
                lines={['529796@mail.ru']}
                href="mailto:529796@mail.ru"
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <CallbackForm />
          </Grid>
        </Grid>

        <Paper sx={{ mt: 6, overflow: 'hidden' }} variant="outlined">
          <iframe
            title="Карта: Барнаул, ул. Попова, 55"
            src="https://www.openstreetmap.org/export/embed.html?bbox=83.75%2C53.33%2C83.83%2C53.37&layer=mapnik&marker=53.349%2C83.79"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
          />
        </Paper>
      </Container>
    </>
  )
}

function ContactCard({ icon, title, lines, href }) {
  return (
    <Paper sx={{ p: 3 }} variant="outlined">
      <Stack direction="row" spacing={2} alignItems="flex-start">
        {icon}
        <Stack spacing={0.5}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          {lines.map((line) =>
            href ? (
              <Typography key={line} component="a" href={href} variant="body2" sx={{ color: 'inherit', display: 'block' }}>
                {line}
              </Typography>
            ) : (
              <Typography key={line} variant="body2" color="text.secondary">
                {line}
              </Typography>
            ),
          )}
        </Stack>
      </Stack>
    </Paper>
  )
}
