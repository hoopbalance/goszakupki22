import { Box, Stack, Typography } from '@mui/material'

export default function SectionHeading({ eyebrow, title, text, action, align = 'left' }) {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={3}
      alignItems={{ xs: 'flex-start', md: 'flex-end' }}
      justifyContent="space-between"
      sx={{ mb: { xs: 3, md: 5 }, textAlign: align }}
    >
      <Box sx={{ maxWidth: 760, mx: align === 'center' ? 'auto' : 0 }}>
        {eyebrow && (
          <Typography variant="overline" component="p" color="primary.main" sx={{ mb: 1.5 }}>
            {eyebrow}
          </Typography>
        )}
        <Typography variant="h2" component="h2">
          {title}
        </Typography>
        {text && (
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 680 }}>
            {text}
          </Typography>
        )}
      </Box>
      {action}
    </Stack>
  )
}
