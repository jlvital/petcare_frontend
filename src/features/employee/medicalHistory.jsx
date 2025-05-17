import React from 'react';
import { Typography, Box } from '@mui/material';

const MedicalHistory = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Historial médico de mascotas
      </Typography>
      <Typography>
        Consulta y actualiza el historial médico, diagnósticos y tratamientos de cada mascota.
      </Typography>
    </Box>
  );
};

export default MedicalHistory;
