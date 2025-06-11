import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import { useNavigate } from 'react-router-dom';

const EmptyState = () => {
  const navigate = useNavigate();

  return (
    <Box
      className="text-center p-8 rounded-xl border border-dashed border-gray-300 bg-white shadow-sm"
      sx={{ maxWidth: 500, mx: 'auto', mt: 4 }}
    >
     <Box mb={2}>
  <img
    src="/assets/images/gallery/no_pets.png"
    alt="Sin mascotas"
    style={{
      width: 160,
      height: 160,
      objectFit: 'cover',
      borderRadius: '50%',
      margin: '0 auto',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}
  />
</Box>

      <Typography variant="h6" gutterBottom>
        Aún no tienes mascotas registradas
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Comienza registrando tu primera mascota para gestionar sus citas y historial médico.
      </Typography>
      <Button
        variant="contained"
        startIcon={<PetsIcon />}
        onClick={() => navigate('/client/pets/new')}
        sx={{ backgroundColor: '#1c6f6a', '&:hover': { backgroundColor: '#154d49' } }}
      >
        Añadir mascota
      </Button>
    </Box>
  );
};

export default EmptyState;
