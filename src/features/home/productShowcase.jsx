import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import ProductCard from './ProductCard';

const productos = [
  {
    name: 'Collar antipulgas',
    price: 12.99,
    description: 'Protege a tu mascota de pulgas y garrapatas.',
    imageUrl: '/assets/images/products/collar.png'
  },
  {
    name: 'Champú suave',
    price: 8.99,
    description: 'Limpieza natural para el pelaje de tu mascota.',
    imageUrl: '/assets/images/products/champu.png'
  },
  {
    name: 'Juguete interactivo',
    price: 5.50,
    description: 'Diversión asegurada para tu perro o gato.',
    imageUrl: '/assets/images/products/juguete.png'
  }
];

const ProductShowcase = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      <Typography variant="h5" align="center" sx={{ mb: 6, fontWeight: 'bold' }}>
        Productos recomendados
      </Typography>
      <Grid container spacing={4}>
      {productos.map((product, idx) => (
  <Grid gridColumn="span 12" sm="span 6" md="span 4" key={idx}>
    <ProductCard product={product} />
  </Grid>
))}
      </Grid>
    </Container>
  );
};

export default ProductShowcase;
