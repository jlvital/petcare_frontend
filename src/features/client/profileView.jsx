import React from 'react';
import { Typography, Box } from '@mui/material';

const ProfileView = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Información del perfil
      </Typography>
      <Typography>
        Aquí podrás ver y actualizar tu información personal como nombre, correo y foto de perfil.
      </Typography>
    </Box>
  );
};

export default ProfileView;
