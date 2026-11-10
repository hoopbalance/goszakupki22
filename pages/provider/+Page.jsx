import { Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PageHero from '../../components/PageHero.jsx'
import CallbackForm from '../../components/CallbackForm.jsx'

const SERVICES = [
  'Услуги по сопровождению участия в торгах (от мониторинга сайтов до подписания контрактов, используя новейшее программное обеспечение, что существенно снижает возможность «пропуска» закупки)',
  'Квалифицированная юридическая помощь по спорным вопросам и защите интересов Участника размещения заказа в контролирующих и судебных органах',
  'Экспертиза документаций на предмет их соответствия законодательству',
  'Подготовка заявок на участие в конкурсе/аукционе или любой другой процедуре',
  'Выдача ЭЦП (электронно-цифровой подписи) для участия в торгах через компанию-партнера',
]

export default function Page() {
  return (
    <>
      <PageHero
        title="Комплексное сопровождение участников закупок"
        subtitle="Мы окажем полный комплекс услуг в области получения государственного, муниципального и коммерческого заказа."
      />
      <Container maxWidth="lg">
        <Typography variant="h5" component="h2" gutterBottom>
          Наши услуги:
        </Typography>
        <List sx={{ mb: 4 }}>
          {SERVICES.map((text) => (
            <ListItem key={text} disableGutters alignItems="flex-start">
              <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Typography variant="body1" sx={{ mb: 6, maxWidth: 900 }}>
          Специалисты компании «Агентство государственного заказа» имеют большой опыт по организации
          и проведению торгов, владеют всей необходимой информацией о тонкостях и нюансах размещения
          заказов, отслеживают практику контролирующих органов и судов, разъяснения законодательства,
          хорошо осведомлены о последних изменениях в законодательстве и умеют выполнять свою работу
          качественно.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          В помощь поставщику. Работа с ЭТП
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          Раздел с материалами по работе с электронными торговыми площадками находится в разработке.
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={9}>
            <CallbackForm withEmail />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
