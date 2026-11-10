import { Box, Container, Typography } from '@mui/material'

// Промо-блок страницы: заголовок + подзаголовок на цветном фоне.
export default function PageHero({ title, subtitle }) {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: '#fff', py: { xs: 6, md: 9 }, mb: 5 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="h6" sx={{ fontWeight: 400, maxWidth: 760, opacity: 0.92 }}>
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  )
}
