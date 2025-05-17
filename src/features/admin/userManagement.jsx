import React from 'react';
import { Typography, Box } from '@mui/material';

const UserManagement = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Gestión de usuarios
      </Typography>
      <Typography>
        Consulta, edita y elimina cuentas de clientes y empleados. Controla el estado y permisos de cada usuario.
      </Typography>
    </Box>
  );
};

export default UserManagement;
