import React from 'react';
import { Paper } from '@mui/material';

const CardContainer = ({ children }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}
    >
      {children}
    </Paper>
  );
};

export default CardContainer;
