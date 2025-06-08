import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { Box, CircularProgress, Typography } from '@mui/material';

const LoginGoogle = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const user = {
          email: decoded.email,
          role: decoded.role,
          name: decoded.name
        };

        sessionStorage.setItem('token', token);
        sessionStorage.setItem('user', JSON.stringify(user));

        setTimeout(() => {
          if (user.role === 'CLIENTE') {
            navigate('/client/dashboard', { replace: true }); // ⬅ importante
          } else {
            navigate('/', { replace: true });
          }
        }, 1000); // o puedes quitar el delay si quieres
      } catch (error) {
        console.error('❌ Error al decodificar el token:', error);
        navigate('/login', { replace: true });
      }
    } else {
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, #f0f9f9, #c5f2da)',
      }}
    >
      <CircularProgress size={48} sx={{ color: '#1c6f6a', mb: 3 }} />
      <Typography variant="h6" sx={{ color: '#1c6f6a' }}>
        Iniciando sesión con Google...
      </Typography>
    </Box>
  );
};

export default LoginGoogle;