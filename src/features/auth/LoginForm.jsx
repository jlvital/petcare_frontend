import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';
import api from '@/services/api';
import FormField from '@/components/common/FormField';
import PasswordField from '@/components/common/PasswordField';
import CustomSnackbar from '@/components/common/CustomSnackbar';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'error' });

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
      else throw new Error('Rol desconocido');
    } catch (err) {
      const message = err.response?.data?.message || '❌ Error al iniciar sesión.';
      if (message === 'TEMP_LOGIN') {
        sessionStorage.setItem('tempUser', formData.username);
        navigate('/change-password');
      } else {
        setSnackbar({ open: true, message, severity: 'error' });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" className="mb-4">Iniciar Sesión</Typography>

      <FormField
        label="Correo electrónico"
        type="email"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />

      <PasswordField
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Entrar
      </Button>

      <Button
        variant="outlined"
        fullWidth
        sx={{ mt: 2, backgroundColor: '#fff', color: '#000', gap: 1 }}
        startIcon={
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            style={{ width: 20, height: 20 }}
          />
        }
        onClick={() =>
          window.location.href =
          import.meta.env.VITE_GOOGLE_LOGIN_URL || 'https://backend-petcare-5tl0.onrender.com/oauth2/authorization/google'
        }
      >
        Iniciar sesión con Google
      </Button>
      

      <Typography variant="body2" className="mt-4">
        <Link to="/forgot-password" className="text-blue-600 hover:underline">
          ¿Has olvidado tu contraseña?
        </Link>
      </Typography>

      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
      />
    </form>
  );
};

export default LoginForm;