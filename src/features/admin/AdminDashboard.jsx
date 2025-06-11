import React from 'react';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const Card = ({ title, subtitle, buttonText, to }) => (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        borderRadius: 6,
        height: '100%',
        minHeight: 220,
        backgroundColor: '#ffffff',
        boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <Box>
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 1 }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.5,
              maxWidth: '90%',
              mx: 'auto',
              textAlign: 'left',
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>

      <Button
        variant="contained"
        onClick={() => navigate(to)}
        sx={{
          mt: 3,
          backgroundColor: '#1c6f6a',
          fontWeight: 600,
          borderRadius: 5,
          px: 4,
          py: 1.2,
          fontSize: '0.9rem',
          minWidth: 200,
          maxWidth: 240,
          '&:hover': { backgroundColor: '#154d49' },
        }}
      >
        {buttonText}
      </Button>
    </Paper>
  );

  return (
    <Box sx={{
      mt: 4,
      px: { xs: 2, sm: 4, md: 6 },
    }}>
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontWeight: 600,
          mb: 4,
          color: '#1c6f6a',
        }}
      >
        ¡Bienvenid@ al panel de administración, Jose! 👋
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        sx={{
          maxWidth: '1000px',
          mx: 'auto',
          px: 2
        }}
      >
        {[
          {
            title: 'Gestión de usuarios',
            subtitle: 'Aquí podrás consular la lista de usuarios registrados',
            buttonText: 'Gestionar usuarios',
            to: '/admin/users',
          },
          {
            title: 'Registro de empleados',
            subtitle: 'Formulario para registrar nuevos empleados',
            buttonText: 'Registrar empleado',
            to: '/admin/register-employee',
          },
          {
            title: 'Estadísticas',
            subtitle: 'Resumen de citas, clientes y productos',
            buttonText: 'Ver estadísticas',
            to: '/admin/stats',
          },
          {
            title: 'Gestión de stock',
            subtitle: 'Control y actualización de productos',
            buttonText: 'Gestionar productos',
            to: '/admin/products',
          },
        ].map((card, index) => (
          <Grid
            key={index}
            sx={{
              width: { xs: '100%', sm: '47%' },
              minWidth: 280,
            }}
          >
            <Card {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminDashboard;