import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import TestimonialCard from './TestimonialCard';

const testimonios = [
  {
    nombre: 'María Rodríguez',
    cargo: 'Dueña de Max',
    mensaje:
      'Clínica Veterinaria PetCare ha cuidado de mi perro Max por años. Siempre recibimos un trato amable y profesional. ¡Los recomiendo ampliamente!',
    fondo: '/assets/images/vet1.png'
  },
  {
    nombre: 'Carlos M.',
    cargo: 'Cliente habitual',
    mensaje:
      'Atención rápida y con mucho cariño. Todo el equipo transmite confianza y profesionalidad.',
    fondo: '/assets/images/vet2.png'
  },
  {
    nombre: 'Laura G.',
    cargo: 'Dueña de Pelusa',
    mensaje:
      'Mi gata adora venir aquí. Siempre la tratan con dulzura. Estoy encantada.',
    fondo: '/assets/images/vet3.png'
  }
];

const TestimonialList = () => {
  return (
    <Box sx={{ backgroundColor: '#f7fdfd', py: 10 }}>
      <Container maxWidth="xl">
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 6, color: 'primary.main' }}>
          Lo que opinan nuestros clientes
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center" alignItems="stretch">
          {testimonios.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default TestimonialList;
