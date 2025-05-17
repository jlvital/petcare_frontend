import React, { useState } from 'react';
import {
  Typography,
  Box,
  Button,
  Alert,
  MenuItem
} from '@mui/material';
import FormField from '../../components/common/FormField';
import api from '../../services/api';

const perfiles = ['VETERINARIO', 'AUXILIAR', 'TECNICO'];

const RegisterEmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName1: '',
    lastName2: '',
    recoveryEmail: '', // ← CAMBIADO aquí
    profile: '',
    startDate: ''
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await api.post('/admin/register-employee', formData);
      setSuccess(`✅ Empleado ${response.data.name} registrado correctamente.`);
      setFormData({
        name: '',
        lastName1: '',
        lastName2: '',
        recoveryEmail: '', // ← CAMBIADO aquí
        profile: '',
        startDate: ''
      });
    } catch (err) {
      const message = err.response?.data?.message || '❌ Error al registrar empleado.';
      setError(message);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-xl shadow-md"
    >
      <Typography variant="h5" mb={3}>
        Registro de Empleado
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      <FormField label="Nombre" name="name" value={formData.name} onChange={handleChange} />
      <FormField label="Primer apellido" name="lastName1" value={formData.lastName1} onChange={handleChange} />
      <FormField label="Segundo apellido" name="lastName2" value={formData.lastName2} onChange={handleChange} />
      <FormField
        label="Correo personal"
        type="email"
        name="recoveryEmail" // ← CAMBIADO aquí
        value={formData.recoveryEmail}
        onChange={handleChange}
      />

      <FormField
        label="Perfil"
        name="profile"
        value={formData.profile}
        onChange={handleChange}
        select
      >
        {perfiles.map((perfil) => (
          <MenuItem key={perfil} value={perfil}>
            {perfil}
          </MenuItem>
        ))}
      </FormField>

      <FormField
        label="Fecha de inicio"
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      />

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
        Registrar empleado
      </Button>
    </Box>
  );
};

export default RegisterEmployeeForm;
