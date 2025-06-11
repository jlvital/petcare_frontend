import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import api from '@/services/api';
import FormField from '@/components/common/FormField';
import PasswordField from '@/components/common/PasswordField';
import CustomSnackbar from '@/components/common/CustomSnackbar';

const RegisterForm = () => {
  const [formData, setFormData] = useState({ name: '', username: '', password: '' });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSnackbar({ ...snackbar, open: false });

    try {
      await api.post('/auth/register', formData);
      setSnackbar({
        open: true,
        message: '✅ Bienvenido a PetCare. Revisa tu correo por favor.',
        severity: 'success'
      });
      setFormData({ name: '', username: '', password: '' });
    } catch (error) {
      setSnackbar({
        open: true,
        message: '❌ Se ha producido un error durante el registro.',
        severity: 'error'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" className="mb-4">Crear Cuenta</Typography>

      <FormField
        label="Nombre completo"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <FormField
        label="Correo electrónico"
        type="email"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />

      <PasswordField
        label="Contraseña"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <Button type="submit" variant="contained" fullWidth className="mt-6">
        Registrarse
      </Button>

      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
      />
    </form>
  );
};

export default RegisterForm;