import React from 'react';
import { Typography, Box } from '@mui/material';

const StatisticsPanel = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Estadísticas e informes
      </Typography>
      <Typography>
        Consulta información sobre citas, ingresos, tratamientos y actividad de la clínica por períodos o categorías.
      </Typography>
    </Box>
  );
};

export default StatisticsPanel;
