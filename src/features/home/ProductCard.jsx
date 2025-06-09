import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card
      elevation={3}
      sx={{
        textAlign: 'center',
        height: '100%',
        padding: 2,
        maxWidth: 280,
        margin: '0 auto',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        }
      }}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        loading="lazy"
        style={{
          width: '100%',
          height: '100px',
          objectFit: 'contain',
          borderRadius: '8px',
          marginBottom: '0.5rem'
        }}
      />
      <CardContent sx={{ padding: '8px' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 500, fontSize: '0.95rem' }}>
          {product.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 1, fontWeight: 600, fontSize: '1rem' }}>
          €{product.price.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
