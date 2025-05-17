import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useauth';
import api from "../../services/api";
import FormField from "../../components/common/FormField";
import CustomSnackbar from '../../components/common/CustomSnackbar'; // ✅

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ username: '', password: '' });

  // ✅ Estado Snackbar
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'error'
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSnackbar({ ...snackbar, open: false });

    try {
      const response = await api.post('/auth/login', formData);
      const { token, name, username, role } = response.data;

      login({ name, username, role }, token);

      if (role === 'ADMIN') navigate('/admin/dashboard');
      else if (role === 'CLIENTE') navigate('/client/dashboard');
      else if (role === 'EMPLEADO') navigate('/employee/dashboard');
      else {
        setSnackbar({
          open: true,
          message: 'Rol desconocido. Contacta con el administrador.',
          severity: 'error'
        });
      }

    } catch (err) {
      const message = err.response?.data?.message || '❌ Error al iniciar sesión.';

      if (message === 'TEMP_LOGIN') {
        sessionStorage.setItem('tempUser', formData.username);
        navigate('/change-password');
      } else {
        setSnackbar({
          open: true,
          message,
          severity: 'error'
        });
      }
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-md"
    >
      <Typography variant="h5" className="text-center mb-6">
        Iniciar Sesión
      </Typography>

      <FormField
        label="Correo electrónico"
        type="email"
        value={formData.username}
        onChange={(e) => handleChange({ target: { name: 'username', value: e.target.value } })}
      />
      <FormField
        label="Contraseña"
        type="password"
        value={formData.password}
        onChange={(e) => handleChange({ target: { name: 'password', value: e.target.value } })}
      />

      <Button type="submit" variant="contained" fullWidth className="mt-6">
        Entrar
      </Button>

      <Typography variant="body2" className="mt-4 text-center">
        <Link to="/forgot-password" className="text-blue-600 hover:underline">
          ¿Has olvidado tu contraseña?
        </Link>
      </Typography>

      {/* ✅ Snackbar */}
      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
      />
    </Box>
  );
};

export default LoginForm;
