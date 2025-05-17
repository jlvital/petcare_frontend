import React from 'react';
import { Typography, Box } from '@mui/material';

const PetManagement = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Mis mascotas
      </Typography>
      <Typography>
        Aquí podrás registrar nuevas mascotas, editar sus datos o eliminar mascotas que ya no estén a tu cargo.
      </Typography>
    </Box>
  );
};

export default PetManagement;
