import { alpha, createTheme, responsiveFontSizes } from '@mui/material/styles'
import cyan from './assets/cyan-blur.js'
import red from './assets/red-blur.js'

const GREY = {
  50: '#F8FAFC',
  100: '#F1F5F9',
  200: '#E2E8F0',
  300: '#CBD5E1',
  400: '#94A3B8',
  500: '#64748B',
  600: '#475569',
  700: '#334155',
  800: '#1E293B',
  900: '#0F172A',
}

const PRIMARY = {
  lighter: '#E8F1FC',
  light: '#76B0F1',
  main: '#2065D1',
  dark: '#174A9C',
  darker: '#102A43',
  contrastText: '#FFFFFF',
}

export const menuSurfaceStyles = {
  backdropFilter: 'blur(20px)',
  backgroundColor: 'white',
  backgroundImage: `url(${cyan}), url(${red})`,
  backgroundSize: '50%, 50%',
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: PRIMARY,
    secondary: {
      lighter: '#F3E8FF',
      light: '#C684FF',
      main: '#8E33FF',
      dark: '#651EC2',
      darker: '#27097A',
      contrastText: '#FFFFFF',
    },
    info: { main: '#007A99', light: '#61DDEA', dark: '#00556B', contrastText: '#FFFFFF' },
    success: { main: '#118D57', light: '#77ED8B', dark: '#065E49', contrastText: '#FFFFFF' },
    warning: { main: '#B76E00', light: '#FFD666', dark: '#7A4100', contrastText: '#FFFFFF' },
    error: { main: '#B71D18', light: '#FFAC82', dark: '#7A0916', contrastText: '#FFFFFF' },
    grey: GREY,
    divider: GREY[200],
    text: { primary: GREY[900], secondary: GREY[600], disabled: GREY[400] },
    background: { paper: '#FFFFFF', default: GREY[50], neutral: GREY[100] },
    action: {
      hover: alpha(PRIMARY.main, 0.06),
      selected: alpha(PRIMARY.main, 0.1),
      focus: alpha(PRIMARY.main, 0.16),
      disabled: alpha(GREY[500], 0.5),
      disabledBackground: GREY[200],
    },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Medeo Sans", ui-sans-serif, system-ui, "Segoe UI", Arial, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: { fontSize: '3.25rem', fontWeight: 750, lineHeight: 1.08, letterSpacing: '-0.035em' },
    h2: { fontSize: '2.25rem', fontWeight: 720, lineHeight: 1.18, letterSpacing: '-0.025em' },
    h3: { fontSize: '1.625rem', fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.015em' },
    h4: { fontSize: '1.375rem', fontWeight: 700, lineHeight: 1.3 },
    h5: { fontSize: '1.125rem', fontWeight: 700, lineHeight: 1.4 },
    h6: { fontSize: '1rem', fontWeight: 650, lineHeight: 1.45 },
    body1: { fontSize: '1rem', lineHeight: 1.7 },
    body2: { fontSize: '0.9375rem', lineHeight: 1.65 },
    button: { textTransform: 'none', fontWeight: 650, letterSpacing: 0 },
    caption: { color: GREY[600], lineHeight: 1.5 },
    overline: { fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', lineHeight: 1.5 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth', scrollPaddingTop: 96 },
        body: { backgroundColor: GREY[50], color: GREY[900], minWidth: 320 },
        'a, button': { touchAction: 'manipulation' },
        'a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible, [tabindex]:focus-visible': {
          outline: `3px solid ${PRIMARY.light}`,
          outlineOffset: 3,
        },
        '::selection': { backgroundColor: PRIMARY.lighter, color: PRIMARY.darker },
        '@media (prefers-reduced-motion: reduce)': {
          'html': { scrollBehavior: 'auto' },
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: { root: { paddingLeft: 20, paddingRight: 20 } },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { minHeight: 44, borderRadius: 10, padding: '10px 18px', cursor: 'pointer' },
        containedPrimary: { '&:hover': { backgroundColor: PRIMARY.dark } },
      },
    },
    MuiIconButton: {
      styleOverrides: { root: { minWidth: 44, minHeight: 44 } },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 16, backgroundImage: 'none' },
      },
    },
    MuiCardContent: {
      styleOverrides: { root: { '&:last-child': { paddingBottom: 24 } } },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: 'none' } },
    },
    MuiChip: {
      styleOverrides: { root: { borderRadius: 8, fontWeight: 600 } },
    },
    MuiAccordion: {
      defaultProps: { disableGutters: true, elevation: 0 },
      styleOverrides: {
        root: {
          border: `1px solid ${GREY[200]}`,
          borderRadius: '12px !important',
          overflow: 'hidden',
          '&:before': { display: 'none' },
          '& + &': { marginTop: 12 },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: { root: { minHeight: 64, padding: '8px 20px' }, content: { margin: '12px 0' } },
    },
    MuiMenu: { styleOverrides: { paper: menuSurfaceStyles } },
    MuiPopover: { styleOverrides: { paper: menuSurfaceStyles } },
  },
})

export default responsiveFontSizes(theme)
