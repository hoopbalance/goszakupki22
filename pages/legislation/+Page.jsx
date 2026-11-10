import { Button, Container, List, ListItem, ListItemText, Paper, Typography } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import PageHero from '../../components/PageHero.jsx'

const FILES_BASE = 'http://goszakupki22.ru/wp-content/uploads/2021/02'

const LAWS = [
  {
    file: 'zakon44-2.pdf',
    name: 'Федеральный закон от 27 марта 2013 г. № 44-ФЗ',
    title: '«О контрактной системе в сфере закупок товаров, работ, услуг для обеспечения государственных и муниципальных нужд»',
  },
  {
    file: 'zakon63-2.rtf',
    name: 'Федеральный закон от 06 апреля 2011 г. № 63-ФЗ',
    title: '«Об электронной подписи»',
  },
  {
    file: 'zakon99-3.rtf',
    name: 'Федеральный закон от 04 мая 2011 г. № 99-ФЗ',
    title: '«О лицензировании отдельных видов деятельности»',
  },
  {
    file: 'zakon135-2.rtf',
    name: 'Федеральный закон от 26 июля 2006 г. № 135-ФЗ',
    title: '«О защите конкуренции»',
  },
  {
    file: 'zakon184-2.rtf',
    name: 'Федеральный закон от 27 декабря 2002 г. № 184-ФЗ',
    title: '«О техническом регулировании»',
  },
  {
    file: 'zakon209-2.rtf',
    name: 'Федеральный закон от 24 июля 2007 г. № 209-ФЗ',
    title: '«О развитии малого и среднего предпринимательства в Российской Федерации»',
  },
  {
    file: 'zakon223-2.pdf',
    name: 'Федеральный закон от 13 июля 2011 г. № 223-ФЗ',
    title: '«О закупках товаров, работ, услуг отдельными видами юридических лиц»',
  },
]

export default function Page() {
  return (
    <>
      <PageHero
        title="Законодательство"
        subtitle="Основные федеральные законы, регулирующие закупочную деятельность и электронную подпись."
      />
      <Container maxWidth="md">
        <List sx={{ p: 0 }}>
          {LAWS.map((law) => (
            <Paper key={law.file} component="li" sx={{ listStyle: 'none', mb: 2, p: { xs: 2, md: 3 } }} variant="outlined">
              <ListItem disableGutters
                secondaryAction={
                  <Button
                    variant="outlined" size="small" startIcon={<DownloadIcon />}
                    href={`${FILES_BASE}/${law.file}`} target="_blank" rel="noopener noreferrer"
                  >
                    Скачать
                  </Button>
                }
              >
                <ListItemText
                  primary={law.name}
                  secondary={law.title}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItem>
            </Paper>
          ))}
        </List>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
          Файлы открываются с оригинального сайта. При переезде их можно перенести в папку
          <code> public/docs </code> и обновить ссылки в файле <code>pages/legislation/+Page.jsx</code>.
        </Typography>
      </Container>
    </>
  )
}
