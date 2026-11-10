import { Container, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PageHero from '../../components/PageHero.jsx'
import CallbackForm from '../../components/CallbackForm.jsx'

const HELP_ITEMS_44 = [
  'Разместить план закупок',
  'Внести изменения в план-график закупок',
  'Отмена закупки в плане-графике',
  'Расчёт СМП, СО НКО',
  'Разработка документации',
  'Установление преференции (ограничения, условия допуска) в отношении иностранной продукции',
  'Особенности закупок у СМП и СО НКО, преимущества организациям инвалидов, учреждениям и предприятиям уголовно-исполнительной системы, запреты',
  'Как написать возражение на жалобу участника закупки',
  'Как внести сведения в реестр контрактов',
  'Регистрация, изменения или расторжение контракта',
]

export default function Page() {
  return (
    <>
      <PageHero
        title="Юридическое сопровождение закупочной деятельности"
        subtitle="Наше агентство оказывает полный комплекс услуг по информационно-правовому сопровождению закупочной деятельности заказчиков."
      />
      <Container maxWidth="lg">
        <Typography variant="h5" component="h2" gutterBottom>
          Например, в решении вопросов:
        </Typography>
        <List sx={{ mb: 6 }}>
          {HELP_ITEMS_44.map((text) => (
            <ListItem key={text} disableGutters>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Typography variant="body1" sx={{ mb: 6, maxWidth: 900 }}>
          Мы поможем устранить ошибки в практике закупочной деятельности и дадим методические
          рекомендации по работе в контрактной системе.
        </Typography>

        <Paper sx={{ p: { xs: 3, md: 5 }, mb: 6 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            В рамках закона о закупках отдельными видами юридических лиц (№ 223-ФЗ)
          </Typography>
          <Typography variant="body1" paragraph>
            Для осуществления закупочной деятельности заказчик утверждает Положение о закупке,
            которое и регламентирует закупочную деятельность заказчика.
          </Typography>
          <Typography variant="body1" paragraph>
            Грамотно разработанное Положение о закупке поможет избежать ошибок в закупочной
            деятельности и существенно её упростит. Сотрудники Агентства помогут в этом.
          </Typography>
          <Typography variant="body1">
            Так же как и в рамках 44-ФЗ, заказчику, работающему по 223-ФЗ, необходимо своевременно
            размещать планы закупок, извещения о проведении закупок, протоколы и отчётность по
            заключённым договорам, в том числе с единственными поставщиками, без проведения
            конкурентной процедуры.
          </Typography>
        </Paper>

        <Grid container justifyContent="center">
          <Grid item xs={12} md={9}>
            <CallbackForm />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
