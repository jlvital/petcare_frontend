import React, { useState } from 'react';
import {
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Paper,
  Typography
} from '@mui/material';

const menuItems = [
  { key: 'profile', label: '👤 Mi perfil' },
  { key: 'pets', label: '🐶 Mis mascotas' },
  { key: 'appointments', label: '📅 Mis citas' },
  { key: 'purchases', label: '🛒 Historial de compras' }
];

const ClientSidebar = ({ onSelect }) => {
  const [active, setActive] = useState('profile');

  const handleSelect = (key) => {
    setActive(key);
    onSelect(key);
  };

  return (
    <Paper elevation={3} sx={{ borderRadius: 3 }}>
      <Typography
        variant="h6"
        sx={{
          px: 2,
          pt: 2,
          pb: 1,
          color: 'primary.main',
          fontWeight: 600
        }}
      >
        Opciones
      </Typography>

      <List component="nav" disablePadding>
        {menuItems.map(({ key, label }) => (
          <ListItemButton
            key={key}
            onClick={() => handleSelect(key)}
            selected={active === key}
            sx={{
              borderRadius: 2,
              mx: 1,
              my: 0.5,
              color: active === key ? 'primary.main' : 'text.primary',
              backgroundColor: active === key ? 'primary.light' : 'transparent',
              '&:hover': {
                backgroundColor: 'primary.light',
                color: 'primary.dark'
              }
            }}
          >
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>

      <Divider sx={{ mt: 1 }} />
    </Paper>
  );
};

export default ClientSidebar;
