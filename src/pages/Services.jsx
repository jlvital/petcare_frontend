import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box
} from '@mui/material';

const servicios = [
  {
    titulo: 'Consulta veterinaria',
    descripcion: 'Valoración general de tu mascota con seguimiento personalizado.',
    imagen: '/assets/images/vet1.png',
  },
  {
    titulo: 'Vacunación y desparasitación',
    descripcion: 'Protección completa frente a enfermedades comunes. Planes anuales.',
    imagen: '/assets/images/vet2.png',
  },
  {
    titulo: 'Peluquería y baño',
    descripcion: 'Corte, baño y cuidado del pelaje con productos específicos.',
    imagen: '/assets/images/vet3.png',
  },
  {
    titulo: 'Urgencias 24h',
    descripcion: 'Atención inmediata para situaciones que no pueden esperar.',
    imagen: '/assets/images/vet1.png',
  },
];

const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color="primary"
        gutterBottom
      >
        Servicios veterinarios
      </Typography>

      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        mb={6}
        maxWidth="sm"
        sx={{ mx: 'auto' }}
      >
        Descubre todo lo que PetCare puede hacer por ti y tu mascota. Nuestro equipo está preparado para cuidar con experiencia y dedicación 🐶🐱
      </Typography>

      <Grid container spacing={4}>
        {servicios.map((servicio, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card
              sx={{
                textAlign: 'center',
                height: '100%',
                transition: 'all 0.3s ease',
                borderRadius: 3,
                boxShadow: 3,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={servicio.imagen}
                alt={servicio.titulo}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {servicio.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {servicio.descripcion}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
