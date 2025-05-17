import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Container,
  Box,
  Avatar
} from '@mui/material';

const testimonios = [
  {
    nombre: 'Laura G.',
    comentario: '¡Excelente atención para mi gato! Muy recomendable.',
    avatar: '/assets/images/avatars/laura.png',
  },
  {
    nombre: 'Carlos M.',
    comentario: 'Rápidos, profesionales y muy humanos. ¡Gracias!',
    avatar: '/assets/images/avatars/carlos.png',
  },
  {
    nombre: 'Sandra R.',
    comentario: 'Mi perro adora venir aquí. Se nota el amor por los animales.',
    avatar: '/assets/images/avatars/sandra.png',
  },
];

const TestimonialList = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      <Typography
        variant="h5"
        align="center"
        sx={{ mb: 6, fontWeight: 'bold', color: 'primary.main' }}
      >
        Lo que opinan nuestros clientes
      </Typography>
      <Grid container columns={12} spacing={4}>
  {testimonios.map((t, idx) => (
    <Grid gridColumn="span 12" md="span 4" key={idx}>
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          borderRadius: 3,
          height: '100%',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 6,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Avatar
            src={t.avatar || undefined}
            alt={t.nombre}
            sx={{ width: 56, height: 56, mb: 2 }}
          >
            {!t.avatar && t.nombre.charAt(0)}
          </Avatar>
          <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.primary', mb: 2 }}>
            "{t.comentario}"
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary', mt: 'auto' }}>
            — {t.nombre}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  ))}
</Grid>
    </Container>
  );
};

export default TestimonialList;
