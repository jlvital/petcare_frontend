import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Paper, Container } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const servicios = [
  { titulo: 'Consulta Veterinaria', img: '/assets/images/vet1.png' },
  { titulo: 'Vacunas y Tratamientos', img: '/assets/images/vet2.png' },
  { titulo: 'Baño y Peluquería', img: '/assets/images/vet3.png' },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 2 } },
    { breakpoint: 960, settings: { slidesToShow: 1 } },
  ]
};

const ServiceCarousel = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 6, fontWeight: 'bold', color: 'primary.main' }}
      >
        Servicios Destacados
      </Typography>
      <Slider {...settings}>
        {servicios.map((s, idx) => (
          <Box key={idx} sx={{ px: 2 }}>
            <Paper
              elevation={4}
              sx={{
                overflow: 'hidden',
                borderRadius: 2,
                mx: 'auto',
                width: 360,
                height: 280,
                transition: 'transform 0.3s ease-in-out',
                willChange: 'transform',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
              }}
            >
              <Box
                component="img"
                src={s.img}
                alt={s.titulo}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Paper>
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ mt: 2, fontWeight: 500 }}
            >
              {s.titulo}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default ServiceCarousel;
