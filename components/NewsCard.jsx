import { Box, Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { formatDate } from '../lib/format.js'

export default function NewsCard({ item }) {
  return (
    <Card variant="outlined" sx={{ height: '100%', transition: 'border-color 180ms ease, transform 180ms ease', '&:hover': { borderColor: 'primary.light', transform: 'translateY(-2px)' } }}>
      <CardActionArea component="a" href={`/news/${item.slug}`} sx={{ height: '100%', p: 0 }} aria-label={`Читать новость: ${item.title}`}>
        <CardContent sx={{ p: { xs: 2.5, md: 3 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} sx={{ mb: 2 }}>
            <Typography variant="caption" sx={{ color: 'primary.dark', fontWeight: 650, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Закупки и право
            </Typography>
            <Typography component="time" dateTime={item.date} variant="caption" sx={{ whiteSpace: 'nowrap' }}>
              {formatDate(item.date)}
            </Typography>
          </Stack>
          <Typography variant="h5" component="h3" sx={{ mb: 1.5 }}>
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            {item.excerpt}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'primary.main', fontWeight: 650, fontSize: 14, mt: 'auto' }}>
            Читать <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
