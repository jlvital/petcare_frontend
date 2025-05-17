import React from 'react';
import { Typography, Box } from '@mui/material';

const AppointmentManagement = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Gestión de citas
      </Typography>
      <Typography>
        Consulta, confirma o modifica las citas asignadas a tu perfil. Las citas con menos de 72h no pueden anularse.
      </Typography>
    </Box>
  );
};

export default AppointmentManagement;
