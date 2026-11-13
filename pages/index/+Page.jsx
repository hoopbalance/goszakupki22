import { useData } from 'vike-react/useData'
import { Box, Button, Card, Container, Link, Stack, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import AssignmentIcon from '@mui/icons-material/Assignment'
import StorefrontIcon from '@mui/icons-material/Storefront'
import CheckIcon from '@mui/icons-material/Check'
import DescriptionIcon from '@mui/icons-material/Description'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import DrawIcon from '@mui/icons-material/Draw'
import HandshakeIcon from '@mui/icons-material/Handshake'
import KeyIcon from '@mui/icons-material/Key'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import PhoneIcon from '@mui/icons-material/Phone'
import NewsCard from '../../components/NewsCard.jsx'
import CallbackForm from '../../components/CallbackForm.jsx'
import SectionHeading from '../../components/SectionHeading.jsx'

const PARTNERS = [
  { name: 'ЕИС zakupki.gov.ru', href: 'https://zakupki.gov.ru/' },
  { name: 'ФАС России', href: 'https://fas.gov.ru/' },
  { name: 'Госуслуги', href: 'https://www.gosuslugi.ru/' },
  { name: 'РТС-тендер', href: 'https://www.rts-tender.ru/' },
  { name: 'Сбербанк-АСТ', href: 'https://sberbank-ast.ru/' },
  { name: 'ЭТП ЭТС', href: 'https://223.etp-ets.ru/' },
  { name: 'Росэлторг', href: 'https://roseltorg.ru/' },
  { name: 'ZakazRF', href: 'https://zakazrf.ru/' },
  { name: 'Lot-online', href: 'https://gz.lot-online.ru/' },
]

const DIRECTIONS = [
  {
    number: '01', icon: AssignmentIcon, title: 'Для заказчиков',
    text: 'Организуем закупочную деятельность по 44-ФЗ и 223-ФЗ: от планирования до реестра контрактов.',
    items: ['Планы и план-графики', 'Закупочная документация', 'Положение о закупке по 223-ФЗ'],
    href: '/customer', action: 'Услуги заказчикам',
  },
  {
    number: '02', icon: StorefrontIcon, title: 'Для поставщиков',
    text: 'Сопровождаем участие в тендерах и электронных торгах, помогаем пройти путь до контракта.',
    items: ['Поиск и анализ закупок', 'Подготовка заявок и аккредитация', 'Протоколы разногласий и жалобы'],
    href: '/provider', action: 'Услуги поставщикам',
  },
]

const STEPS = [
  { icon: ManageSearchIcon, title: 'Разбираем задачу', text: 'Определяем процедуру, требования закона и объём необходимой работы.' },
  { icon: DescriptionIcon, title: 'Готовим документы', text: 'Собираем и проверяем документы, заявки, извещения или закупочную документацию.' },
  { icon: DrawIcon, title: 'Сопровождаем процедуру', text: 'Помогаем с площадками, ЭЦП, разъяснениями, торгами и коммуникацией сторон.' },
  { icon: HandshakeIcon, title: 'Доводим до результата', text: 'Сопровождаем заключение контракта и помогаем при спорных ситуациях.' },
]

export default function Page() {
  const { latestNews } = useData()

  return (
    <>
      <Box component="section" sx={{ position: 'relative', overflow: 'hidden', bgcolor: 'primary.darker', color: 'common.white' }}>
        <Box aria-hidden="true" sx={{ position: 'absolute', width: 480, height: 480, border: '90px solid rgba(118,176,241,0.08)', borderRadius: '50%', right: { xs: -360, md: -120 }, top: -200 }} />
        <Container maxWidth="xl" sx={{ position: 'relative', py: { xs: 6, md: 10 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.25fr 0.75fr' }, gap: { xs: 5, lg: 9 }, alignItems: 'center' }}>
            <Box>
              <Typography variant="overline" component="p" sx={{ color: 'primary.light', mb: 2.5 }}>
                Госзакупки · Тендеры · Электронные торги
              </Typography>
              <Typography variant="h1" component="h1" sx={{ maxWidth: 820, fontSize: { xs: '2.55rem', sm: '3.5rem', lg: '4.15rem' } }}>
                От закупочного плана до подписания контракта
              </Typography>
              <Typography variant="body1" sx={{ mt: 3, maxWidth: 680, color: 'rgba(255,255,255,0.76)', fontSize: { xs: '1.05rem', md: '1.2rem' } }}>
                Юридическое и информационное сопровождение государственных и коммерческих закупок для заказчиков и поставщиков.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                <Button href="/contacts#callback" variant="contained" size="large" endIcon={<ArrowForwardIcon />}>Обсудить задачу</Button>
                <Button href="/provider" variant="outlined" size="large" sx={{ color: 'common.white', borderColor: 'rgba(255,255,255,0.45)', '&:hover': { borderColor: 'common.white', bgcolor: 'rgba(255,255,255,0.06)' } }}>
                  Участвовать в тендере
                </Button>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 3 }} sx={{ mt: 4, color: 'rgba(255,255,255,0.66)', fontSize: 14 }}>
                <Box component="span">44-ФЗ и 223-ФЗ</Box>
                <Box component="span">Барнаул и Алтайский край</Box>
                <Box component="span">Работа с ЭТП и ЭЦП</Box>
              </Stack>
            </Box>

            <Card sx={{ bgcolor: 'common.white', color: 'text.primary', p: { xs: 2.5, md: 3.5 }, borderRadius: 5, boxShadow: '0 24px 64px rgba(0,0,0,0.2)' }}>
              <Typography variant="overline" component="p" color="primary.main">Единый маршрут закупки</Typography>
              <Typography variant="h4" component="h2" sx={{ mt: 1, mb: 3 }}>Понятно на каждом этапе</Typography>
              <Stack spacing={0}>
                {['Анализ задачи и требований', 'Документы и электронная площадка', 'Процедура и протоколы', 'Контракт и дальнейшая поддержка'].map((item, index) => (
                  <Stack key={item} direction="row" spacing={2} sx={{ position: 'relative', pb: index === 3 ? 0 : 2.5 }}>
                    <Stack alignItems="center">
                      <Box sx={{ width: 32, height: 32, flexShrink: 0, display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: index === 3 ? 'success.main' : 'primary.lighter', color: index === 3 ? 'common.white' : 'primary.dark', fontSize: 13, fontWeight: 700 }}>
                        {index === 3 ? <CheckIcon sx={{ fontSize: 18 }} /> : index + 1}
                      </Box>
                      {index < 3 && <Box sx={{ width: 1, flex: 1, bgcolor: 'divider', my: 0.5 }} />}
                    </Stack>
                    <Typography variant="body2" sx={{ fontWeight: 600, pt: 0.5 }}>{item}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Box sx={{ mt: 3, p: 2, borderRadius: 3, bgcolor: 'background.default' }}>
                <Typography variant="body2" color="text.secondary">Не знаете, с чего начать?</Typography>
                <Link href="tel:+73852529796" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mt: 0.5, fontWeight: 700, textDecoration: 'none' }}>
                  <PhoneIcon fontSize="small" />(3852) 52-97-96
                </Link>
              </Box>
            </Card>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" component="section" sx={{ py: { xs: 7, md: 11 } }}>
        <SectionHeading eyebrow="Два направления" title="Работаем с обеими сторонами закупки" text="Заказчик получает выстроенную процедуру, поставщик — грамотную подготовку и сопровождение участия." />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
          {DIRECTIONS.map((direction) => {
            const Icon = direction.icon
            return (
              <Card key={direction.title} variant="outlined" sx={{ p: { xs: 3, md: 4 }, position: 'relative', overflow: 'hidden' }}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <Box sx={{ width: 52, height: 52, display: 'grid', placeItems: 'center', borderRadius: 3, bgcolor: 'primary.lighter', color: 'primary.main' }}><Icon /></Box>
                  <Typography sx={{ color: 'grey.300', fontSize: 44, lineHeight: 1, fontWeight: 750 }}>{direction.number}</Typography>
                </Stack>
                <Typography variant="h3" component="h3" sx={{ mt: 3 }}>{direction.title}</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5 }}>{direction.text}</Typography>
                <Stack spacing={1} sx={{ my: 3 }}>
                  {direction.items.map((item) => <Stack key={item} direction="row" spacing={1.25} alignItems="center"><CheckIcon color="success" sx={{ fontSize: 19 }} /><Typography variant="body2">{item}</Typography></Stack>)}
                </Stack>
                <Button href={direction.href} endIcon={<ArrowForwardIcon />} sx={{ px: 0 }}>{direction.action}</Button>
              </Card>
            )
          })}
        </Box>
      </Container>

      <Box component="section" sx={{ bgcolor: 'common.white', borderBlock: '1px solid', borderColor: 'divider', py: { xs: 7, md: 11 } }}>
        <Container maxWidth="xl">
          <SectionHeading eyebrow="Как мы работаем" title="Без непрозрачных процессов и лишних действий" text="Вы понимаете, что происходит сейчас, какие документы нужны и какой этап будет следующим." />
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }, gap: 4 }}>
            {STEPS.map((step, index) => {
              const Icon = step.icon
              return (
                <Box key={step.title}>
                  <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2.5 }}>
                    <Box sx={{ width: 48, height: 48, display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: 'primary.lighter', color: 'primary.main' }}><Icon /></Box>
                    <Typography variant="caption" sx={{ fontWeight: 700 }}>0{index + 1}</Typography>
                  </Stack>
                  <Typography variant="h5" component="h3">{step.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{step.text}</Typography>
                </Box>
              )
            })}
          </Box>
          <Card sx={{ mt: { xs: 5, md: 7 }, p: { xs: 3, md: 4 }, bgcolor: 'primary.lighter', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, gap: 3 }}>
            <Box sx={{ width: 56, height: 56, display: 'grid', placeItems: 'center', flexShrink: 0, borderRadius: 3, bgcolor: 'primary.main', color: 'common.white' }}><KeyIcon fontSize="large" /></Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" component="h3">Нужна электронная подпись для торгов?</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>Поможем оформить ЭЦП через компанию-партнёра и подготовиться к работе на федеральных и коммерческих площадках.</Typography>
            </Box>
            <Button href="/esp" variant="outlined" endIcon={<ArrowForwardIcon />} sx={{ flexShrink: 0 }}>Подробнее об ЭЦП</Button>
          </Card>
        </Container>
      </Box>

      <Container maxWidth="xl" component="section" sx={{ py: { xs: 7, md: 11 } }}>
        <SectionHeading eyebrow="Изменения в закупках" title="Новости и правовая практика" action={<Button href="/news" endIcon={<ArrowForwardIcon />}>Все новости</Button>} />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
          {latestNews.map((item) => <NewsCard item={item} key={item.slug} />)}
        </Box>
      </Container>

      <Box component="section" sx={{ bgcolor: 'common.white', borderBlock: '1px solid', borderColor: 'divider', py: { xs: 7, md: 9 } }}>
        <Container maxWidth="xl">
          <SectionHeading eyebrow="Официальные ресурсы" title="Площадки и сервисы для работы" />
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 1.5 }}>
            {PARTNERS.map((partner) => (
              <Link key={partner.href} href={partner.href} target="_blank" rel="noopener noreferrer" underline="none" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, minHeight: 54, p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 2, color: 'text.primary', bgcolor: 'background.default', '&:hover': { borderColor: 'primary.light', color: 'primary.dark' } }}>
                {partner.name}<OpenInNewIcon sx={{ fontSize: 17, color: 'text.secondary' }} />
              </Link>
            ))}
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" component="section" sx={{ pt: { xs: 7, md: 11 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '0.7fr 1.3fr' }, gap: { xs: 4, lg: 7 }, alignItems: 'start' }}>
          <Box>
            <Typography variant="overline" component="p" color="primary.main">Первый шаг</Typography>
            <Typography variant="h2" component="h2" sx={{ mt: 1.5 }}>Начнём с вашей ситуации</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>Необязательно заранее разбираться в процедурах и названиях документов. Расскажите, какой результат вам нужен, — мы предложим следующий шаг.</Typography>
            <Stack spacing={1.5} sx={{ mt: 3 }}>
              <Link href="tel:+73852529796" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, fontWeight: 700 }}><PhoneIcon /> (3852) 52-97-96</Link>
              <Typography variant="body2" color="text.secondary">Пн–Пт, 08:30–17:00</Typography>
            </Stack>
          </Box>
          <CallbackForm title="Заказать консультацию" />
        </Box>
      </Container>
    </>
  )
}
