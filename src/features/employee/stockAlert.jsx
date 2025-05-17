import React from 'react';
import { Typography, Box } from '@mui/material';

const StockAlert = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Alertas de stock
      </Typography>
      <Typography>
        Visualiza productos con bajo stock y gestiona pedidos de reposición si es necesario.
      </Typography>
    </Box>
  );
};

export default StockAlert;
