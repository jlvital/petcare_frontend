import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%', backgroundColor: '#1c6f6a', py: { xs: 10, md: 14 }, color: 'white' }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2.2rem', md: '3.4rem' },
            textAlign: 'center',
            mb: 2
          }}
        >
          Cuidado y bienestar para tu compañero
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            color: '#d6f2f0',
            mb: 4,
            maxWidth: 600,
            mx: 'auto',
            textAlign: 'center'
          }}
        >
          En PetCare, ofrecemos servicios veterinarios integrales para asegurar la salud y felicidad de tu compañero.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, mb: 6 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#59c1ae',
              fontWeight: 600,
              px: 3,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#154d49'
              }
            }}
            onClick={() => navigate('/servicios')}
          >
            Conoce nuestros servicios
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              color: '#ffffff',
              borderColor: '#ffffff',
              fontWeight: 600,
              px: 3,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)'
              }
            }}
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate('/contacto')}
          >
            Contacta con nosotros
          </Button>
        </Box>

        {/* Imagen centrada y contenida */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            src="/assets/images/gallery/main.jpeg"
            alt="Mascota feliz"
            sx={{
              width: { xs: '100%', sm: '90%', md: '75%' },
              maxWidth: '700px',
              borderRadius: 6,
              objectFit: 'cover',
              boxShadow: 3
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
