import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import TestimonialCard from '../features/home/TestimonialCard';

const opinions = [
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

const Reviews = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 6 }}>
        Opiniones de nuestros clientes
      </Typography>

      <Grid container spacing={4}>
        {opinions.map((t, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <TestimonialCard {...t} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;
