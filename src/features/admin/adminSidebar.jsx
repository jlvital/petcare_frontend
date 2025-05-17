import React from 'react';
import { List, ListItemButton, ListItemText, Divider } from '@mui/material';

const AdminSidebar = ({ onSelect }) => (
  <List component="nav">
    {[
      { key: 'users', label: 'Gestión de usuarios' },
      { key: 'products', label: 'Catálogo de productos' },
      { key: 'stats', label: 'Estadísticas' },
      { key: 'register', label: 'Registrar empleado' }
    ].map(({ key, label }) => (
      <ListItemButton key={key} onClick={() => onSelect(key)}>
        <ListItemText primary={label} />
      </ListItemButton>
    ))}
    <Divider />
  </List>
);

export default AdminSidebar;
