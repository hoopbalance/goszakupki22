import { Alert, Box, Button, Card, Container, Stack, Typography } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import DescriptionIcon from '@mui/icons-material/Description'
import PageHero from '../../components/PageHero.jsx'
import SectionHeading from '../../components/SectionHeading.jsx'

const FILES_BASE = 'http://goszakupki22.ru/wp-content/uploads/2021/02'

const LAWS = [
  { file: 'zakon44-2.pdf', name: 'Федеральный закон от 27.03.2013 № 44-ФЗ', title: 'О контрактной системе в сфере закупок товаров, работ, услуг для обеспечения государственных и муниципальных нужд', format: 'PDF' },
  { file: 'zakon63-2.rtf', name: 'Федеральный закон от 06.04.2011 № 63-ФЗ', title: 'Об электронной подписи', format: 'RTF' },
  { file: 'zakon99-3.rtf', name: 'Федеральный закон от 04.05.2011 № 99-ФЗ', title: 'О лицензировании отдельных видов деятельности', format: 'RTF' },
  { file: 'zakon135-2.rtf', name: 'Федеральный закон от 26.07.2006 № 135-ФЗ', title: 'О защите конкуренции', format: 'RTF' },
  { file: 'zakon184-2.rtf', name: 'Федеральный закон от 27.12.2002 № 184-ФЗ', title: 'О техническом регулировании', format: 'RTF' },
  { file: 'zakon209-2.rtf', name: 'Федеральный закон от 24.07.2007 № 209-ФЗ', title: 'О развитии малого и среднего предпринимательства в Российской Федерации', format: 'RTF' },
  { file: 'zakon223-2.pdf', name: 'Федеральный закон от 18.07.2011 № 223-ФЗ', title: 'О закупках товаров, работ, услуг отдельными видами юридических лиц', format: 'PDF' },
]

export default function Page() {
  return (
    <>
      <PageHero
        current="Законодательство"
        eyebrow="Нормативная база"
        title="Законы о госзакупках и электронной подписи"
        subtitle="Основные федеральные законы, которые регулируют закупочную деятельность, конкуренцию и работу с электронной подписью."
      />
      <Container maxWidth="lg" component="section">
        <SectionHeading eyebrow="Документы" title="База для подготовки закупки" />
        <Stack component="ul" spacing={2} sx={{ p: 0, m: 0, listStyle: 'none' }}>
          {LAWS.map((law) => (
            <Card key={law.file} component="li" variant="outlined" sx={{ p: { xs: 2.5, md: 3 } }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} alignItems={{ sm: 'center' }}>
                <Box sx={{ width: 46, height: 46, flexShrink: 0, display: 'grid', placeItems: 'center', borderRadius: 2.5, bgcolor: 'primary.lighter', color: 'primary.main' }}><DescriptionIcon /></Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography variant="h6" component="h2">{law.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>{law.title}</Typography>
                </Box>
                <Button variant="outlined" startIcon={<DownloadIcon />} href={`${FILES_BASE}/${law.file}`} target="_blank" rel="noopener noreferrer" sx={{ flexShrink: 0, alignSelf: { xs: 'stretch', sm: 'center' } }}>
                  {law.format}
                </Button>
              </Stack>
            </Card>
          ))}
        </Stack>
        <Alert severity="info" sx={{ mt: 4 }}>Файлы открываются с архива оригинального сайта. Перед применением проверяйте актуальную редакцию документа в официальных источниках права.</Alert>
      </Container>
    </>
  )
}
