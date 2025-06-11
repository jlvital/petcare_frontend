import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';

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

  const filtered = productos.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" fontWeight="bold" color="primary" gutterBottom>
        Catálogo de productos
      </Typography>

      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="block mx-auto w-full sm:w-1/2 px-4 py-2 mt-6 mb-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <Grid container spacing={4}>
        {filtered.map((product, i) => (
          <Grid item key={i} xs={12} sm={6} md={3}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                transition: '0.3s',
                '&:hover': { transform: 'scale(1.03)', boxShadow: 6 },
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={product.imageUrl}
                alt={product.name}
                sx={{ objectFit: 'contain', p: 2 }}
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                  €{product.price.toFixed(2)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled
                >
                  Añadir (simulado)
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filtered.length === 0 && (
        <Typography align="center" sx={{ mt: 6 }} color="text.secondary">
          No se encontraron productos con ese nombre.
        </Typography>
      )}
    </Container>
  );
};

export default ProductCatalog;