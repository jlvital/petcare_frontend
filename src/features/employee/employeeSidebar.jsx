import React from 'react';
import { List, ListItemButton, ListItemText, Divider } from '@mui/material';

const EmployeeSidebar = ({ onSelect }) => (
  <List component="nav">
    {[
      { key: 'appointments', label: 'Citas asignadas' },
      { key: 'history', label: 'Historial médico' },
      { key: 'stock', label: 'Stock y alertas' } // opcional si el perfil es AUXILIAR
    ].map(({ key, label }) => (
      <ListItemButton key={key} onClick={() => onSelect(key)}>
        <ListItemText primary={label} />
      </ListItemButton>
    ))}
    <Divider />
  </List>
);

export default EmployeeSidebar;
