import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: '#f0f9f9', py: 10 }}>
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h2" color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
            PetCare360º 🐾
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Cuidamos de tu mascota como uno más de la familia.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/productos')}
            sx={{ borderRadius: 2, boxShadow: 2 }}
          >
            Ver catálogo de productos
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
