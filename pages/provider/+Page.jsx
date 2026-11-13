import { Box, Button, Card, Container, Link, Stack, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'
import KeyIcon from '@mui/icons-material/Key'
import GavelIcon from '@mui/icons-material/Gavel'
import PageHero from '../../components/PageHero.jsx'
import CallbackForm from '../../components/CallbackForm.jsx'
import SectionHeading from '../../components/SectionHeading.jsx'

const SERVICES = [
  { icon: ManageSearchIcon, title: 'Поиск и анализ тендеров', text: 'Мониторинг площадок, отбор подходящих закупок и экспертиза документации на соответствие законодательству.' },
  { icon: AssignmentTurnedInIcon, title: 'Заявки и аккредитация', text: 'Подготовка заявок на конкурс, аукцион и другие процедуры, регистрация и аккредитация на ЭТП.' },
  { icon: KeyIcon, title: 'ЭЦП для участия', text: 'Оформление электронной подписи через компанию-партнёра для работы на торговых площадках.' },
  { icon: GavelIcon, title: 'Защита интересов', text: 'Запросы разъяснений, протоколы разногласий, жалобы и юридическая помощь в контролирующих и судебных органах.' },
]

const STEPS = [
  'Определяем подходящую закупку и проверяем требования',
  'Готовим ЭЦП, аккредитацию и комплект документов',
  'Подаём заявку и сопровождаем участие в процедуре',
  'Помогаем с протоколами и подписанием контракта',
]

export default function Page() {
  return (
    <>
      <PageHero
        current="Поставщикам"
        eyebrow="Для участников закупок"
        title="Подготовим и поддержим ваше участие в тендере"
        subtitle="Сопровождаем получение государственного, муниципального и коммерческого заказа — от поиска закупки до подписания контракта."
      />

      <Container maxWidth="xl" component="section">
        <SectionHeading eyebrow="Услуги поставщикам" title="Сосредоточьтесь на предложении, а не на бюрократии" text="Специалисты агентства помогают учесть требования закупки, правила площадки и актуальную правовую практику." />
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

      <Box component="section" sx={{ bgcolor: 'common.white', borderBlock: '1px solid', borderColor: 'divider', py: { xs: 7, md: 10 }, mt: { xs: 7, md: 10 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '0.85fr 1.15fr' }, gap: { xs: 5, lg: 9 } }}>
            <Box>
              <Typography variant="overline" component="p" color="primary.main">Путь участника</Typography>
              <Typography variant="h2" component="h2" sx={{ mt: 1.5 }}>От выбора закупки до контракта</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>Работаем последовательно и заранее обозначаем, какие документы и действия потребуются на каждом этапе.</Typography>
              <Button href="/esp" variant="outlined" endIcon={<ArrowForwardIcon />} sx={{ mt: 3 }}>Подготовить ЭЦП</Button>
            </Box>
            <Stack component="ol" spacing={0} sx={{ m: 0, p: 0, listStyle: 'none' }}>
              {STEPS.map((step, index) => (
                <Stack component="li" key={step} direction="row" spacing={2.5} sx={{ pb: index === STEPS.length - 1 ? 0 : 3 }}>
                  <Stack alignItems="center">
                    <Box sx={{ width: 38, height: 38, display: 'grid', placeItems: 'center', borderRadius: '50%', bgcolor: index === 3 ? 'success.main' : 'primary.lighter', color: index === 3 ? 'common.white' : 'primary.dark', fontWeight: 700 }}>{index === 3 ? <CheckIcon /> : index + 1}</Box>
                    {index < STEPS.length - 1 && <Box sx={{ width: 1, flex: 1, bgcolor: 'divider', my: 0.5 }} />}
                  </Stack>
                  <Typography variant="h6" component="h3" sx={{ pt: 0.75 }}>{step}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" component="section" sx={{ pt: { xs: 7, md: 10 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '0.7fr 1.3fr' }, gap: { xs: 4, lg: 7 }, alignItems: 'start' }}>
          <Box>
            <Typography variant="overline" component="p" color="primary.main">Начать подготовку</Typography>
            <Typography variant="h2" component="h2" sx={{ mt: 1.5 }}>Нашли подходящий тендер?</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>Пришлите номер закупки или опишите задачу. Если закупку ещё не выбрали, поможем определить следующий шаг.</Typography>
            <Typography variant="body2" sx={{ mt: 3 }}>Или позвоните: <Link href="tel:+73852529796" fontWeight={700}>(3852) 52-97-96</Link></Typography>
          </Box>
          <CallbackForm withEmail title="Обсудить участие в закупке" />
        </Box>
      </Container>
    </>
  )
}
