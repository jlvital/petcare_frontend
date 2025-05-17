import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from "../../services/api";
import FormField from '../../components/common/FormField';
import CustomSnackbar from '../../components/common/CustomSnackbar'; // ✅

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: ''
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
  };

  const { login } = useAuth(); // Añadir esto

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validatePassword(formData.password)) {
      setSnackbar({
        open: true,
        message: '❌ La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial.',
        severity: 'error'
      });
      return;
    }
  
    try {
      const response = await api.post('/auth/register', formData);
      const { token, name, username, role } = response.data;
  
      login({ name, username, role }, token); // ✅ usar hook
  
      setSnackbar({
        open: true,
        message: '✅ Registro completado. Redirigiendo...',
        severity: 'success'
      });
  
      setTimeout(() => {
        if (role === 'ADMIN') navigate('/admin/dashboard');
        else if (role === 'CLIENTE') navigate('/client/dashboard');
        else if (role === 'EMPLEADO') navigate('/employee/dashboard');
        else {
          setSnackbar({
            open: true,
            message: '❌ Rol desconocido. Contacta con el administrador.',
            severity: 'error'
          });
        }
      }, 1500);
    } catch (err) {
      const message = err.response?.data?.message || '❌ Error al registrar. Intenta más tarde.';
      setSnackbar({
        open: true,
        message,
        severity: 'error'
      });
    }
  };  

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-8 mt-10 rounded-xl shadow-md"
    >
      <Typography variant="h5" className="text-center mb-6">
        Registro de Cliente
      </Typography>

      <FormField
        label="Nombre completo"
        type="text"
        value={formData.name}
        onChange={handleChange}
        name="name"
      />
      <FormField
        label="Correo electrónico"
        type="email"
        value={formData.username}
        onChange={handleChange}
        name="username"
      />
      <FormField
        label="Contraseña"
        type="password"
        value={formData.password}
        onChange={handleChange}
        name="password"
      />
      <Typography variant="caption" className="text-gray-500 mt-2 block">
        Mínimo 8 caracteres, una mayúscula y un carácter especial.
      </Typography>

      <Button type="submit" variant="contained" fullWidth className="mt-6">
        Registrarse
      </Button>

      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
      />
    </Box>
  );
};

export default RegisterForm;
