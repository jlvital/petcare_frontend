import React, { useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginError = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Error de acceso | PetCare';
  }, []);

  return (
    <Box sx={{ py: 10, backgroundColor: '#f0f9f9', minHeight: '70vh' }}>
      <Container maxWidth="sm" sx={{
        textAlign: 'center',
        backgroundColor: '#ffffff',
        p: 5,
        borderRadius: 4,
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
      }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            mb: 2
          }}
        >
          ¡Vaya, algo ha ido mal! 😿
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
          No hemos podido iniciar sesión con tu cuenta de Google. <br />
          Puede que aún no estés registrado o que tu cuenta no tenga permisos.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'primary.light',
              color: '#ffffff',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'primary.main'
              }
            }}
            onClick={() => navigate('/login')}
          >
            Intentar de nuevo
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: 'primary.main',
              color: 'primary.main',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#e6f4f1',
                borderColor: 'primary.dark',
                color: 'primary.dark'
              }
            }}
            onClick={() => navigate('/')}
          >
            Ir al inicio
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginError;