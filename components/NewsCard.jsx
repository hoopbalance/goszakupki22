import { Card, CardActionArea, CardContent, Typography, Chip, Stack } from '@mui/material'
import { formatDate } from '../lib/format.js'

export default function NewsCard({ item }) {
  return (
    <Card>
      <CardActionArea component="a" href={`/news/${item.slug}`} sx={{ height: '100%', p: 0.5 }}>
        <CardContent>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
            <Chip size="small" color="primary" variant="outlined" label="Новости" />
            <Typography variant="caption" color="text.secondary">
              {formatDate(item.date)}
            </Typography>
          </Stack>
          <Typography variant="h6" component="h3" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
