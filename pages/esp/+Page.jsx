import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Card, Container, Link, Stack, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LaunchIcon from '@mui/icons-material/Launch'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import KeyIcon from '@mui/icons-material/Key'
import PageHero from '../../components/PageHero.jsx'
import SectionHeading from '../../components/SectionHeading.jsx'

const FEDERAL_ETP = [
  { name: 'ЭТП «Сбербанк-АСТ»', href: 'https://www.sberbank-ast.ru' },
  { name: 'РТС-тендер', href: 'https://www.rts-tender.ru' },
  { name: 'Национальная электронная площадка', href: 'https://www.roseltorg.ru' },
  { name: 'Единая электронная торговая площадка', href: 'https://www.etp-ets.ru' },
  { name: 'ZakazRF', href: 'https://www.zakazrf.ru' },
  { name: 'Всероссийская универсальная площадка', href: 'https://gz.lot-online.ru' },
]

const COMMERCIAL_ETP = [
  { name: 'Государственные и муниципальные торги', href: 'https://torgi.gov.ru' },
  { name: 'Торги по банкротству', href: 'https://bankrot.fedresurs.ru' },
  { name: 'Площадка по реализации имущества должников', href: 'https://www.rusauction.ru' },
  { name: 'Аукционы по банкротству', href: 'https://www.tenderpro.ru' },
]

export default function Page() {
  return (
    <>
      <PageHero
        current="ЭЦП"
        eyebrow="Электронная подпись для торгов"
        title="ЭЦП для госзакупок и электронных площадок"
        subtitle="Квалифицированная электронная подпись позволяет работать в ЕИС, подавать заявки и участвовать в государственных и коммерческих торгах."
      />

      <Container maxWidth="xl" component="section">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.25fr 0.75fr' }, gap: { xs: 5, lg: 8 }, alignItems: 'start' }}>
          <Box>
            <SectionHeading eyebrow="Область применения" title="Одна подпись — разные рабочие процессы" />
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="federal-content" id="federal-header">
                <Typography variant="h5" component="h2">Федеральные торговые площадки</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: { xs: 2, md: 3 }, pb: 3 }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>ЭЦП используется для аккредитации, подачи заявок и подписания документов в электронных закупках.</Typography>
                <EtpList items={FEDERAL_ETP} />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="commercial-content" id="commercial-header">
                <Typography variant="h5" component="h2">Коммерческие торговые площадки</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: { xs: 2, md: 3 }, pb: 3 }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Коммерческие площадки используются для закупок организаций и торгов имуществом. Требования зависят от конкретной процедуры.</Typography>
                <EtpList items={COMMERCIAL_ETP} />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="gazprom-content" id="gazprom-header">
                <Typography variant="h5" component="h2">ЭТП «Газпромбанк»</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: { xs: 2, md: 3 }, pb: 3 }}>
                <Typography variant="body1">Площадка предъявляет особые требования к электронной подписи. Перед оформлением сертификата важно проверить совместимость с выбранной площадкой и предстоящими процедурами.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="law-content" id="law-header">
                <Typography variant="h5" component="h2">44-ФЗ, 223-ФЗ и 63-ФЗ</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: { xs: 2, md: 3 }, pb: 3 }}>
                <Typography variant="body1" paragraph>Электронная подпись применяется при размещении сведений в ЕИС и проведении закупок по 44-ФЗ и 223-ФЗ.</Typography>
                <Typography variant="body1">Использование электронной подписи регулируется Федеральным законом от 06.04.2011 № 63-ФЗ «Об электронной подписи».</Typography>
                <Link href="/legislation" underline="hover">Открыть раздел «Законодательство»</Link>
              </AccordionDetails>
            </Accordion>
          </Box>

          <Box component="aside" sx={{ position: { lg: 'sticky' }, top: { lg: 110 } }}>
            <Card sx={{ bgcolor: 'primary.darker', color: 'common.white', p: { xs: 3, md: 4 } }}>
              <Box sx={{ width: 52, height: 52, display: 'grid', placeItems: 'center', borderRadius: 3, bgcolor: 'rgba(255,255,255,0.1)', color: 'primary.light' }}><KeyIcon fontSize="large" /></Box>
              <Typography variant="h3" component="h2" sx={{ mt: 3 }}>Как оформить ЭЦП</Typography>
              <Stack component="ol" spacing={2} sx={{ my: 3, pl: 2.5, color: 'rgba(255,255,255,0.78)' }}>
                <Typography component="li" variant="body2">Определите площадки и задачи</Typography>
                <Typography component="li" variant="body2">Подготовьте документы владельца</Typography>
                <Typography component="li" variant="body2">Получите сертификат и настройте рабочее место</Typography>
              </Stack>
              <Button href="/contacts#callback" variant="contained" fullWidth endIcon={<ArrowForwardIcon />}>Оставить заявку</Button>
            </Card>
            <Alert severity="warning" sx={{ mt: 2, border: '1px solid', borderColor: 'warning.light' }}>Проверьте срок действия сертификата до подачи заявки.</Alert>
          </Box>
        </Box>
      </Container>
    </>
  )
}

function EtpList({ items }) {
  return (
    <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'grid', gap: 1 }}>
      {items.map((item) => (
        <Box component="li" key={item.name}>
          <Link href={item.href} target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, minHeight: 46, p: 1.5, borderRadius: 2, bgcolor: 'background.default', textDecoration: 'none', '&:hover': { bgcolor: 'primary.lighter' } }}>
            {item.name}<LaunchIcon sx={{ fontSize: 17, flexShrink: 0 }} />
          </Link>
        </Box>
      ))}
    </Box>
  )
}
