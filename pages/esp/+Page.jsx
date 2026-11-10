import { Container, Link, Paper, Typography, Accordion, AccordionSummary, AccordionDetails, Alert } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LaunchIcon from '@mui/icons-material/Launch'
import PageHero from '../../components/PageHero.jsx'

const FEDERAL_ETP = [
  { name: 'ЭТП «Сбербанк-АСТ»', href: 'http://www.sberbank-ast.ru' },
  { name: 'РТС-тендер', href: 'https://www.rts-tender.ru' },
  { name: 'Национальная электронная площадка', href: 'http://www.roseltorg.ru' },
  { name: 'Единая электронная торговая площадка', href: 'https://www.etp-ets.ru' },
  { name: 'ZakazRF', href: 'http://www.zakazrf.ru' },
  { name: 'Всероссийская универсальная площадка', href: 'http://gz.lot-online.ru' },
]

const COMMERCIAL_ETP = [
  { name: 'Официальный сайт по продаже государственного, муниципального имущества, а также имущества должников', href: 'http://www.torgi.gov.ru' },
  { name: 'Торги по банкротству', href: 'http://bankrot.fedresurs.ru' },
  { name: 'Торговая площадка по реализации имущества должников', href: 'http://www.rusauction.ru' },
  { name: 'Единый федеральный реестр сведений о банкротстве', href: 'https://bankrot.fedresurs.ru' },
  { name: 'Аукционы по банкротству (несостоятельности)', href: 'https://www.tenderpro.ru' },
  { name: 'Спецтехника с торгов по банкротству', href: 'https://www.specstroj.ru' },
]

export default function Page() {
  return (
    <>
      <PageHero
        title="Электронная цифровая подпись"
        subtitle="Использование электронной подписи предусмотрено Федеральным законом № 44-ФЗ «О контрактной системе в сфере закупок»."
      />
      <Container maxWidth="md">
        <Typography variant="body1" paragraph sx={{ maxWidth: 800 }}>
          Имея сертификат квалифицированной электронной подписи, вы получаете доступ к
          государственным и коммерческим торговым площадкам.
        </Typography>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Федеральные торговые площадки</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <EtpList items={FEDERAL_ETP} />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Коммерческие торговые площадки</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary" paragraph>
              В отличие от государственных торговых площадок, альтернативные структуры допускают
              участие в торгах коммерческих заказчиков.
            </Typography>
            <EtpList items={COMMERCIAL_ETP} />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Электронная торговая площадка «Газпромбанк»</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Отличительной характеристикой данной торговой площадки является обязательное
              использование ЭЦП «Газпромбанка», при этом требования к составу электронной подписи
              в системе Газпромбанка имеют особенности, не позволяющие использовать другие
              варианты ЭЦП.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">223-ФЗ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              Федеральный закон № 223 «О закупках товаров, работ, услуг отдельными видами юридических
              лиц» предусматривает использование данного типа электронной подписи заказчиками.
            </Typography>
            <Typography variant="body1" paragraph>
              ЭЦП позволяет государственным заказчикам размещать информацию в Единой информационной
              системе. Структура электронной подписи — это набор зашифрованных символов, для применения
              которых используется специализированное программное обеспечение, а также носитель
              информации.
            </Typography>
            <Typography variant="body1">
              Использование электронной подписи для торгов регулируется Федеральным законом от
              06.04.2011 № 63-ФЗ «Об электронной подписи».
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Alert severity="warning" sx={{ mt: 4 }}>
          Контролируйте срок действия электронной подписи!
        </Alert>

        <Paper sx={{ p: 3, mt: 4 }} variant="outlined">
          <Typography variant="body2" color="text.secondary">
            Нужна электронная подпись для участия в торгах? Мы поможем оформить ЭЦП через
            компанию-партнёра — <Link href="/provider">узнайте подробности в разделе «Поставщикам»</Link> или
            позвоните нам по телефону (3852) 52-97-96.
          </Typography>
        </Paper>
      </Container>
    </>
  )
}

function EtpList({ items }) {
  return (
    <Container component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
      {items.map((item) => (
        <Container component="li" key={item.name} sx={{ p: 0, mb: 1 }}>
          <Link href={item.href} target="_blank" rel="noopener noreferrer" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
            {item.name}
            <LaunchIcon fontSize="inherit" />
          </Link>
        </Container>
      ))}
    </Container>
  )
}
