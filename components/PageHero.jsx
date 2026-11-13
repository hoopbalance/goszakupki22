import { Box, Breadcrumbs, Container, Link, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

export default function PageHero({ title, subtitle, eyebrow = 'Госзакупки · 44-ФЗ · 223-ФЗ', current }) {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'primary.lighter',
        borderBottom: '1px solid',
        borderColor: 'divider',
        py: { xs: 5, md: 8 },
        mb: { xs: 5, md: 8 },
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          width: 340,
          height: 340,
          border: '64px solid',
          borderColor: 'rgba(32,101,209,0.06)',
          borderRadius: '50%',
          right: { xs: -220, md: -60 },
          top: -140,
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <Breadcrumbs separator={<NavigateNextIcon sx={{ fontSize: 16 }} />} sx={{ mb: 3 }} aria-label="Хлебные крошки">
          <Link href="/" underline="hover" color="text.secondary">Главная</Link>
          <Typography variant="body2" color="text.primary">{current || title}</Typography>
        </Breadcrumbs>
        <Typography variant="overline" component="p" color="primary.dark" sx={{ mb: 2 }}>
          {eyebrow}
        </Typography>
        <Typography variant="h1" component="h1" sx={{ maxWidth: 1000, fontSize: { xs: '2.25rem', md: '3.4rem' } }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body1" color="text.secondary" sx={{ mt: 3, maxWidth: 760, fontSize: { md: '1.125rem' } }}>
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  )
}
