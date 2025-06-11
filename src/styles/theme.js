// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1c6f6a',     // verde principal Wegic
      light: '#59c1ae',    // verde claro
      dark: '#154d49',     // verde oscuro
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#20c997',
      contrastText: '#ffffff'
    },
    success: { main: '#00B42A' },
    error:   { main: '#F53F3F' },
    warning: { main: '#FF7D00' },
    info:    { main: '#14C9C9' },
    background: {
      default: '#ffffff',
      paper: '#ffffff'
    },
    text: {
      primary: '#233b53',
      secondary: '#6c757d'  // un gris más natural que #86909C
    }
  },
  typography: {
    fontFamily: ['Montserrat', 'Noto Sans', 'sans-serif'].join(','),
    h1: { fontWeight: 700, fontSize: '2.5rem' },
    h2: { fontWeight: 600, fontSize: '2rem' },
    h3: { fontWeight: 600, fontSize: '1.75rem' },
    h4: { fontWeight: 500, fontSize: '1.5rem' },
    h5: { fontWeight: 500, fontSize: '1.25rem' },
    h6: { fontWeight: 500, fontSize: '1rem' },
    body1: { fontSize: '1rem', fontWeight: 400 },
    body2: { fontSize: '0.875rem', fontWeight: 400 },
    button: { fontWeight: 600, textTransform: 'none' }
  },
  shape: {
    borderRadius: 16
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          paddingInline: 16,
          paddingBlock: 8
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.04)'
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true
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
