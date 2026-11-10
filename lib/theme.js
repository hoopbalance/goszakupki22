import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    primary: { main: '#17497a', light: '#4a74a3', dark: '#0e3054', contrastText: '#fff' },
    secondary: { main: '#f2a104', dark: '#b97800', contrastText: '#1c1c1c' },
    background: { default: '#f4f6f9', paper: '#ffffff' },
  },
  typography: {
    fontFamily: ['Roboto', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: { defaultProps: { disableElevation: true } },
    MuiCard: {
      styleOverrides: {
        root: { height: '100%' },
      },
    },
  },
})

theme = responsiveFontSizes(theme)
export { theme }
