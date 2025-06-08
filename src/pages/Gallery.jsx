// src/pages/Gallery.jsx
import React, { useState, useEffect } from 'react';
import UploadGalleryImage from '../features/client/UploadGalleryImage';
import useAuth from '@/hooks/useAuth';
import {
  Box,
  Typography,
  Container,
  Grid,
  Dialog,
  DialogContent,
  CircularProgress,
  Divider
} from '@mui/material';
import axios from 'axios';

const Gallery = () => {
  const { isAuthenticated, role } = useAuth();

  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/galeria`)
      .then(res => setImages(res.data))
      .catch(() => setImages([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box sx={{ py: 10, backgroundColor: '#f0f9f9' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 'bold', color: 'primary.main', mb: 6 }}
        >
          Galería de Mascotas
        </Typography>

        {loading ? (
          <Box textAlign="center">
            <CircularProgress />
          </Box>
        ) : images.length === 0 ? (
          <Typography align="center" color="text.secondary" sx={{ mt: 4 }}>
            Aún no hay imágenes en la galería 🐾
          </Typography>
        ) : (
          <Grid container spacing={4}>
            {images.map((src, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Box
                  component="img"
                  src={src}
                  alt={`mascota-${idx}`}
                  onClick={() => setSelectedImage(src)}
                  sx={{
                    width: '100%',
                    height: 280,
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: 4,
                    cursor: 'pointer',
                    boxShadow: 3,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': { transform: 'scale(1.03)' }
                  }}
                />
              </Grid>
            ))}
          </Grid>
        )}

        {/* Modal de imagen ampliada */}
        <Dialog open={Boolean(selectedImage)} onClose={() => setSelectedImage(null)} maxWidth="md">
          <DialogContent sx={{ p: 0 }}>
            <img
              src={selectedImage}
              alt="mascota"
              style={{ width: '100%', borderRadius: 8 }}
            />
          </DialogContent>
        </Dialog>

        {/* Formulario solo si es CLIENTE */}
        {isAuthenticated && role === 'CLIENTE' && (
          <>
            <Divider sx={{ my: 6 }} />
            <UploadGalleryImage />
          </>
        )}
      </Container>
    </Box>
  );
};

export default Gallery;