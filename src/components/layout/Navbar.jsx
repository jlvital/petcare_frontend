
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#ffffff',
        color: '#333',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 1,
          }}
        >
          {/* Logo + texto */}
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Box
              component="img"
              src="/assets/logo/petcare.png"
              alt="PetCare360º"
              sx={{ height: 40, width: 40, mr: 1 }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', color: '#1c6f6a' }}
            >
              PetCare360º
            </Typography>
          </Box>

          {/* Navegación */}
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <Button component={Link} to="/" color="inherit">
              Inicio
            </Button>
            <Button component={Link} to="/productos" color="inherit">
              Productos
            </Button>
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              size="small"
              color="primary"
              sx={{ borderRadius: 2 }}
            >
              Iniciar sesión
            </Button>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              size="small"
              color="primary"
              sx={{ borderRadius: 2 }}
            >
              Registrarse
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
