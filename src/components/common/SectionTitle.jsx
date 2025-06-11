import React from 'react';
import { Typography, Box } from '@mui/material';

const SectionTitle = ({ children }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: 'primary.main',
          borderBottom: '2px solid',
          borderColor: 'primary.light',
          display: 'inline-block',
          pb: 1
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
