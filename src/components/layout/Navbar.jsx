import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItemButton, ListItemText, Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, logout, role } = useAuth();
  const navigate = useNavigate();

  const toggleDrawer = (value) => () => setOpen(value);

  const publicLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Equipo', path: '/quienes-somos' },
    { label: 'Galería', path: '/galeria' },
    { label: 'Catálogo', path: '/productos' },
  ];

  let navLinks = publicLinks;
  if (isAuthenticated) {
    if (role === 'CLIENTE') {
      navLinks.push({ label: 'Perfil', path: '/client/profile' });
    } else if (role === 'EMPLEADO') {
      navLinks = [
        { label: 'Inicio', path: '/' },
        { label: 'Equipo', path: '/quienes-somos' },
        { label: 'Agenda', path: '/employee/bookings' },
        { label: 'Perfil', path: '/employee/profile' },
      ];
    } else if (role === 'ADMIN') {
      navLinks = [
        { label: 'Inicio', path: '/' },
        { label: 'Equipo', path: '/quienes-somos' },
        { label: 'Galería', path: '/galeria' },
      ];
    }
  }

  return (
    <>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white', color: '#1c6f6a' }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/assets/logo/petcare.png" alt="PetCare" style={{ height: 36, marginRight: 8 }} />
            <Typography variant="h6" fontWeight="bold" sx={{ color: '#1c6f6a' }}>
              PetCare
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
            {navLinks.map(({ label, path }) => (
              <Button
                key={path}
                component={Link}
                to={path}
                sx={{
                  color: '#1c6f6a',
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': { color: '#154d49' }
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {!isAuthenticated ? (
              <>
                <Button
                  component={Link}
                  to="/login"
                  variant="outlined"
                  sx={{
                    borderColor: '#1c6f6a',
                    color: '#1c6f6a',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#e6f4f2',
                      borderColor: '#154d49',
                      color: '#154d49'
                    }
                  }}
                >
                  Iniciar sesión
                </Button>
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  sx={{
                    backgroundColor: '#1c6f6a',
                    color: '#ffffff',
                    fontWeight: 600,
                    '&:hover': { backgroundColor: '#154d49' }
                  }}
                >
                  Registrarse
                </Button>
              </>
            ) : (
              <Button
                onClick={logout}
                sx={{
                  backgroundColor: '#1c6f6a',
                  color: 'white',
                  fontWeight: 600,
                  borderRadius: 2,
                  px: 3,
                  py: 1,
                  fontSize: '0.9rem',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  '&:hover': {
                    backgroundColor: '#154d49',
                  },
                }}
              >
                Cerrar sesión
              </Button>
            )}
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton onClick={toggleDrawer(true)} sx={{ color: '#1c6f6a' }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, mt: 4 }}>
          <List>
            {navLinks.map(({ label, path }) => (
              <ListItemButton key={path} component={Link} to={path} onClick={toggleDrawer(false)}>
                <ListItemText primary={label} />
              </ListItemButton>
            ))}
          </List>

          {!isAuthenticated && (
            <Box sx={{ px: 2 }}>
              <Divider sx={{ my: 2 }} />
              <Button fullWidth variant="outlined" onClick={() => { navigate('/login'); setOpen(false); }} sx={{ mb: 1 }}>
                Iniciar sesión
              </Button>
              <Button fullWidth variant="contained" onClick={() => { navigate('/register'); setOpen(false); }}>
                Registrarse
              </Button>
            </Box>
          )}
          {isAuthenticated && (
            <ListItemButton onClick={() => { logout(); setOpen(false); }}>
              <ListItemText primary="Cerrar sesión" />
            </ListItemButton>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
