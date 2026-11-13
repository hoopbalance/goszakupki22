import { alpha, createTheme, responsiveFontSizes } from '@mui/material/styles'
import cyan from './assets/cyan-blur.png'
import red from './assets/red-blur.png'

// ----------------------------------------------------------------------

// SETUP COLORS (Minimal Kit palette)
const GREY = {
  0: '#FFFFFF',
  50: '#FCFDFD',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#1C252E',
  900: '#141A21',
}

const PRIMARY = {
  lighter: '#D1E9FC',
  light: '#76B0F1',
  main: '#2065D1',
  dark: '#103996',
  darker: '#061B64',
  contrastText: '#fff',
}

const SECONDARY = {
  lighter: '#EFD6FF',
  light: '#C684FF',
  main: '#8E33FF',
  dark: '#5119B7',
  darker: '#27097A',
  contrastText: '#fff',
}

const INFO = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#fff',
}

const SUCCESS = {
  lighter: '#D3FCD2',
  light: '#77ED8B',
  main: '#22C55E',
  dark: '#118D57',
  darker: '#065E49',
  contrastText: GREY[800],
}

const WARNING = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: GREY[800],
}

const ERROR = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#fff',
}

const customChip = {
  lighter: 'rgba(255, 255, 255, 0.7)',
  light: 'rgb(255, 255, 255)',
  main: 'rgb(33, 43, 54)',
  dark: 'rgb(0, 0, 0)',
  darker: 'rgba(0, 0, 0, 0.7)',
  contrastText: 'rgb(255, 255, 255)',
}

const palette = {
  common: { black: '#000', white: '#fff' },
  common2: { white: '#fff', black: '#000' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  customChip: customChip,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: '#fff',
    default: GREY[100],
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    hoverOpacityBg: 0.78,
    disabledOpacity: 0.48,
  },
}

// ----------------------------------------------------------------------

// Поверхность для выпадающих списков и меню: белое «стекло» с блюром
// поверх cyan/red пятен (lib/assets/*.png — Vite сам их захэширует и раздаст).
export const menuSurfaceStyles = {
  backdropFilter: 'blur(20px)',
  backgroundColor: 'white',
  backgroundImage: `url(${cyan}), url(${red})`,
  backgroundSize: '50%, 50%',
}

// Мягкие тени на базе серого
const SHADOWS = [
  'none',
  '0 1px 2px 0 rgba(145, 158, 171, 0.16)',
  '0 2px 4px -1px rgba(145, 158, 171, 0.2)',
  '0 4px 8px -2px rgba(145, 158, 171, 0.24)',
  '0 8px 16px -4px rgba(145, 158, 171, 0.28)',
  '0 12px 24px -6px rgba(145, 158, 171, 0.32)',
  '0 16px 32px -8px rgba(145, 158, 171, 0.36)',
  '0 20px 40px -10px rgba(145, 158, 171, 0.4)',
  '0 24px 48px -12px rgba(145, 158, 171, 0.44)',
  '0 28px 56px -14px rgba(145, 158, 171, 0.48)',
  '0 32px 64px -16px rgba(145, 158, 171, 0.52)',
  '0 36px 72px -18px rgba(145, 158, 171, 0.56)',
  '0 40px 80px -20px rgba(145, 158, 171, 0.6)',
  ...Array(12).fill('0 40px 80px -20px rgba(145, 158, 171, 0.6)'),
]

const theme = createTheme({
  palette,
  shape: { borderRadius: 8 },
  shadows: SHADOWS,
  typography: {
    fontFamily: '"Medeo Sans", ui-sans-serif, system-ui, "Segoe UI", Roboto, Arial, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: { fontWeight: 800, lineHeight: 1.25, fontSize: '2.5rem' },
    h2: { fontWeight: 800, lineHeight: 1.3, fontSize: '2rem' },
    h3: { fontWeight: 700, lineHeight: 1.4, fontSize: '1.625rem' },
    h4: { fontWeight: 700, lineHeight: 1.5, fontSize: '1.375rem' },
    h5: { fontWeight: 700, lineHeight: 1.5, fontSize: '1.125rem' },
    h6: { fontWeight: 600, lineHeight: 1.6, fontSize: '1rem' },
    subtitle1: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 700 },
    caption: { color: GREY[600] },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
        containedPrimary: {
          '&:hover': { backgroundColor: PRIMARY.dark },
        },
      },
      defaultProps: { disableElevation: true },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: SHADOWS[1],
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 600,
        },
      },
    },
    // Выпадающие списки и меню — «стеклянная» поверхность с блюром
    MuiMenu: {
      styleOverrides: { paper: menuSurfaceStyles },
    },
    MuiPopover: {
      styleOverrides: { paper: menuSurfaceStyles },
    },
  },
})

export default responsiveFontSizes(theme)
