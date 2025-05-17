import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Box,
} from '@mui/material';
import ProductCard from '../features/home/productCard';

const productos = [
  {
    name: 'Collar antipulgas',
    price: 12.99,
    description: 'Protege a tu mascota de pulgas y garrapatas.',
    imageUrl: '/assets/images/products/collar.png',
  },
  {
    name: 'Champú suave',
    price: 8.99,
    description: 'Limpieza natural para el pelaje de tu mascota.',
    imageUrl: '/assets/images/products/champu.png',
  },
  {
    name: 'Juguete interactivo',
    price: 5.5,
    description: 'Diversión asegurada para tu perro o gato.',
    imageUrl: '/assets/images/products/juguete.png',
  },
  {
    name: 'Snacks saludables',
    price: 4.25,
    description: 'Premios nutritivos para entrenar a tu mascota.',
    imageUrl: '/assets/images/products/snacks.png',
  },
];

const ProductCatalog = () => {
  const [search, setSearch] = useState('');

  const filteredProducts = productos.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box className="bg-[#f0f9f9] min-h-screen py-10">
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 6, fontWeight: 'bold', color: 'primary.main' }}
        >
          Catálogo de Productos
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 6 }}
        />

        {filteredProducts.length > 0 ? (
          <Grid container columns={12} spacing={4}>
          {filteredProducts.map((product, idx) => (
            <Grid gridColumn="span 12" sm="span 6" md="span 3" key={idx}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
        ) : (
          <Typography
            variant="body1"
            align="center"
            sx={{ mt: 8, color: 'text.secondary' }}
          >
            No se encontraron productos con ese nombre.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default ProductCatalog;
