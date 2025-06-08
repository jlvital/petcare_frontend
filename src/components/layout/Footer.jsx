import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e0e0e0',
        py: 3,
        mt: 10,
        color: '#6b7280',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="body2" fontWeight={500}>
          Cuidamos de tu mascota como uno más de la familia 🐾
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 4,
            flexWrap: 'wrap',
            mt: 2,
            fontSize: '0.875rem',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOnIcon fontSize="small" /> Sevilla, España
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon fontSize="small" /> 954 335 599
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon fontSize="small" /> info@petcare.com
          </Box>
        </Box>

        <Typography variant="caption" sx={{ display: 'block', mt: 2 }}>
          © {new Date().getFullYear()} PetCare. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;