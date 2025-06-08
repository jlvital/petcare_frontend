// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4ea8de',     // Azul pastel (color corporativo principal)
      light: '#8ecae6',    // Azul más claro
      dark: '#3b82b1',     // Azul más intenso
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8cd9b3',     // Verde pastel secundario
      light: '#c5f2da',
      dark: '#5cae84',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f0f9f9',  // Fondo muy claro azul/grisáceo
      paper: '#ffffff',    // Tarjetas y modales en blanco
    },
    text: {
      primary: '#233b53',  // Azul grisáceo oscuro (textos principales)
      secondary: '#6b7280',// Gris suave para textos secundarios
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    subtitle1: { fontWeight: 400 },
    subtitle2: { fontWeight: 400 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 },
  },
  shape: {
    borderRadius: 12,  // Bordes redondeados para botones, tarjetas, inputs...
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // No poner todo en mayúsculas
          borderRadius: 12,
          padding: '10px 20px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16, // Las tarjetas Paper con esquinas redondeadas suaves
        },
      },
    },
  },
});

export default theme;
