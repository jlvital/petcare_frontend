// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1c6f6a',       // verde principal Wegic
      light: '#59c1ae',      // hover o tonos suaves
      dark: '#154d49',       // énfasis
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#20c997',
      contrastText: '#ffffff'
    },
    success: {
      main: '#00B42A'
    },
    error: {
      main: '#F53F3F'
    },
    warning: {
      main: '#FF7D00'
    },
    info: {
      main: '#14C9C9'
    },
    background: {
      default: '#ffffff',   // limpio, sin gradientes
      paper: '#ffffff'
    },
    text: {
      primary: '#233b53',       // texto principal
      secondary: '#86909C'      // texto complementario
    }
  },
  typography: {
    fontFamily: ['Montserrat', 'Noto Sans', 'sans-serif'].join(','),
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 }
  },
  shape: {
    borderRadius: 16
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
          fontWeight: 600
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)' // sombra suave
        }
      }
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg'
      }
    }
  }
});

export default theme;