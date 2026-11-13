import { Box, Stack, Typography } from '@mui/material'

export default function Brand({ light = false }) {
  return (
    <Stack
      component="a"
      href="/"
      direction="row"
      spacing={1.5}
      alignItems="center"
      aria-label="Агентство государственного заказа — на главную"
      sx={{ color: light ? 'common.white' : 'text.primary', textDecoration: 'none', flexShrink: 0 }}
    >
      <Box
        aria-hidden="true"
        sx={{
          width: 46,
          height: 46,
          display: 'grid',
          placeItems: 'center',
          borderRadius: 2.5,
          bgcolor: light ? 'common.white' : 'primary.main',
          color: light ? 'primary.darker' : 'common.white',
          fontWeight: 800,
          fontSize: 21,
          letterSpacing: '-0.06em',
        }}
      >
        22
      </Box>
      <Box>
        <Typography component="span" sx={{ display: 'block', fontWeight: 750, fontSize: 16, lineHeight: 1.15 }}>
          Агентство
        </Typography>
        <Typography component="span" sx={{ display: 'block', fontSize: 12, lineHeight: 1.3, opacity: light ? 0.72 : 0.68 }}>
          государственного заказа
        </Typography>
      </Box>
    </Stack>
  )
}
