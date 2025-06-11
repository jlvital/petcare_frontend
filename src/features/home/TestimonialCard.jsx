import React from 'react';
import { Box, Typography } from '@mui/material';

const TestimonialCard = ({ fondo, mensaje, nombre, cargo }) => {
  return (
    <Box
      sx={{
        flex: 1,
        borderRadius: 6,
        overflow: 'hidden',
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 300,
        px: 4,
        py: 6,
        textAlign: 'center',
        position: 'relative',
        boxShadow: 4
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(28, 111, 106, 0.8)',
          zIndex: 1
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: 400, fontSize: '1rem', mb: 3 }}>
          “{mensaje}”
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {nombre}
        </Typography>
        <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
          {cargo}
        </Typography>
      </Box>
    </Box>
  );
};

export default TestimonialCard;