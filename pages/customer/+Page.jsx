import { Box, Button, Card, Container, Stack, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import DescriptionIcon from '@mui/icons-material/Description'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import GavelIcon from '@mui/icons-material/Gavel'
import PageHero from '../../components/PageHero.jsx'
import CallbackForm from '../../components/CallbackForm.jsx'
import SectionHeading from '../../components/SectionHeading.jsx'

const SERVICES = [
  { icon: CalendarMonthIcon, title: 'Планирование закупок', text: 'Планы и план-графики, внесение изменений, отмена закупки, расчёты СМП и СО НКО.' },
  { icon: DescriptionIcon, title: 'Закупочная документация', text: 'Разработка документации, условия допуска, преференции и требования к участникам.' },
  { icon: AppRegistrationIcon, title: 'Контракты и отчётность', text: 'Реестр контрактов, регистрация, изменения и расторжение контрактов, обязательные сведения.' },
  { icon: GavelIcon, title: 'Спорные ситуации', text: 'Возражения на жалобы участников, методические рекомендации и правовая поддержка.' },
]

const HELP_ITEMS = [
  'Особенности закупок у СМП и СО НКО',
  'Преимущества организациям инвалидов и учреждениям УИС',
  'Национальный режим, ограничения и условия допуска',
  'Проверка закупочной практики и устранение ошибок',
]

export default function Page() {
  return (
    <>
      <PageHero
        current="Заказчикам"
        eyebrow="Для заказчиков · 44-ФЗ и 223-ФЗ"
        title="Сопровождение закупочной деятельности заказчиков"
        subtitle="Помогаем организовать госзакупки, подготовить документы, провести процедуру и исполнить требования контрактной системы."
      />

      <Container maxWidth="xl" component="section">
        <SectionHeading eyebrow="Что мы делаем" title="Закрываем ключевые этапы закупки" text="Подключаемся к отдельной задаче или сопровождаем закупочную деятельность комплексно." />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} variant="outlined" sx={{ p: { xs: 3, md: 4 } }}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ width: 48, height: 48, flexShrink: 0, display: 'grid', placeItems: 'center', borderRadius: 2.5, bgcolor: 'primary.lighter', color: 'primary.main' }}><Icon /></Box>
                  <Box>
                    <Typography variant="h4" component="h3">{service.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{service.text}</Typography>
                  </Box>
                </Stack>
              </Card>
            )
          })}
        </Box>
      </Container>

      <Container maxWidth="xl" component="section" sx={{ pt: { xs: 7, md: 10 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 4 }}>
          <Card sx={{ bgcolor: 'primary.darker', color: 'common.white', p: { xs: 3, md: 5 } }}>
            <Typography variant="overline" component="p" sx={{ color: 'primary.light' }}>44-ФЗ</Typography>
            <Typography variant="h3" component="h2" sx={{ mt: 1.5 }}>Контрактная система без пробелов</Typography>
            <Typography variant="body1" sx={{ mt: 2, color: 'rgba(255,255,255,0.72)' }}>
              Сопровождаем подготовку и проведение конкурентных процедур — от документации до определения поставщика и внесения сведений в реестр контрактов.
            </Typography>
            <Stack spacing={1.5} sx={{ mt: 3 }}>
              {HELP_ITEMS.map((item) => <Stack key={item} direction="row" spacing={1.5} alignItems="flex-start"><CheckIcon sx={{ color: 'primary.light', fontSize: 20, mt: 0.25 }} /><Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.88)' }}>{item}</Typography></Stack>)}
            </Stack>
          </Card>

          <Card variant="outlined" sx={{ bgcolor: 'common.white', p: { xs: 3, md: 5 } }}>
            <Typography variant="overline" component="p" color="primary.main">223-ФЗ</Typography>
            <Typography variant="h3" component="h2" sx={{ mt: 1.5 }}>Положение о закупке под вашу работу</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
              Для закупочной деятельности по 223-ФЗ заказчик утверждает Положение о закупке. Грамотно разработанный документ помогает снизить риск ошибок и упростить дальнейшие процедуры.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
              Помогаем с положением, планами закупок, извещениями, протоколами и отчётностью по договорам, включая закупки у единственного поставщика.
            </Typography>
            <Button href="/legislation" endIcon={<ArrowForwardIcon />} sx={{ mt: 3, px: 0 }}>Перейти к законодательству</Button>
          </Card>
        </Box>
      </Container>

      <Container maxWidth="xl" component="section" sx={{ pt: { xs: 7, md: 10 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '0.7fr 1.3fr' }, gap: { xs: 4, lg: 7 }, alignItems: 'start' }}>
          <Box>
            <Typography variant="overline" component="p" color="primary.main">Обсудить задачу</Typography>
            <Typography variant="h2" component="h2" sx={{ mt: 1.5 }}>Какая процедура у вас сейчас?</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>Укажите закон, этап закупки и желаемый результат. Если деталей пока нет, достаточно коротко описать ситуацию.</Typography>
          </Box>
          <CallbackForm title="Получить консультацию заказчика" />
        </Box>
      </Container>
    </>
  )
}
