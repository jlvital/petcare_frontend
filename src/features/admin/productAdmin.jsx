import React from 'react';
import { Typography, Box } from '@mui/material';

const ProductAdmin = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Catálogo de productos
      </Typography>
      <Typography>
        Añade, edita o elimina productos del catálogo. Gestiona precios, categorías y promociones activas.
      </Typography>
    </Box>
  );
};

export default ProductAdmin;
