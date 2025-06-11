import React from 'react';
import { Typography, Box } from '@mui/material';

const MyPurchases = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Historial de compras
      </Typography>
      <Typography>
        Aquí puedes ver todas las compras que has realizado en la tienda de PetCare360.
      </Typography>
    </Box>
  );
};

export default MyPurchases;
