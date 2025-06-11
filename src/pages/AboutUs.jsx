import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box
} from '@mui/material';

const equipo = [
  {
    nombre: 'Dra. Ana López',
    rol: 'Veterinaria generalista',
    descripcion: 'Apasionada por la medicina felina y el diagnóstico por imagen.',
    imagen: '/assets/images/avatars/laura.png', // Puedes sustituir por imagen real de /equipo
  },
  {
    nombre: 'Pedro Sánchez',
    rol: 'Auxiliar técnico veterinario',
    descripcion: 'Encargado de la atención directa a pacientes en quirófano y hospitalización.',
    imagen: '/assets/images/avatars/carlos.png',
  },
  {
    nombre: 'Lucía Martínez',
    rol: 'Técnica de laboratorio',
    descripcion: 'Experta en análisis clínicos y seguimiento de tratamientos.',
    imagen: '/assets/images/avatars/sandra.png',
  }
];

export default function AboutUs() {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color="primary"
        gutterBottom
      >
        Nuestro equipo
      </Typography>

      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        mb={6}
        maxWidth="sm"
        sx={{ mx: 'auto' }}
      >
        En PetCare trabajamos con vocación, experiencia y un profundo amor por los animales. Nuestro equipo está formado por profesionales comprometidos con su bienestar 🐾
      </Typography>

      <Grid container spacing={4}>
        {equipo.map((persona, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              sx={{
                textAlign: 'center',
                p: 3,
                borderRadius: 3,
                transition: 'all 0.3s ease',
                boxShadow: 3,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6
                }
              }}
            >
              <Avatar
                src={persona.imagen}
                alt={persona.nombre}
                sx={{
                  width: 90,
                  height: 90,
                  mx: 'auto',
                  mb: 2,
                  border: '3px solid #8ecae6'
                }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {persona.nombre}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {persona.rol}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {persona.descripcion}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
