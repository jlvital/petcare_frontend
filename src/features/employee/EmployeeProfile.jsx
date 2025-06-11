import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button, Alert, CircularProgress } from '@mui/material';
import api from '@/services/api';

const EmployeeProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName1: '',
    lastName2: '',
    recoveryEmail: '',
    phoneNumber: '',
    address: ''
  });

  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  useEffect(() => {
    api.get('/employee/profile')
      .then(res => {
        const { name, lastName1, lastName2, recoveryEmail, phoneNumber, address } = res.data;
        setFormData({ name, lastName1, lastName2, recoveryEmail, phoneNumber, address });
        setLoading(false);
      })
      .catch(() => {
        setFeedback({ type: 'error', message: 'No se pudo cargar el perfil del empleado.' });
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback({ type: '', message: '' });

    try {
      await api.put('/employee/profile', formData);
      setFeedback({ type: 'success', message: '✅ Perfil actualizado correctamente.' });
    } catch (err) {
      const msg = err.response?.data?.message || '❌ Error al actualizar el perfil.';
      setFeedback({ type: 'error', message: msg });
    }
  };

  if (loading) return <CircularProgress />;

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Mi perfil 👤
      </Typography>

      {feedback.message && (
        <Alert severity={feedback.type} sx={{ mb: 2 }}>
          {feedback.message}
        </Alert>
      )}

      <TextField
        label="Nombre"
        name="name"
        value={formData.name || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Primer apellido"
        name="lastName1"
        value={formData.lastName1 || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Segundo apellido"
        name="lastName2"
        value={formData.lastName2 || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Correo de recuperación"
        name="recoveryEmail"
        value={formData.recoveryEmail || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Teléfono"
        name="phoneNumber"
        value={formData.phoneNumber || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Dirección"
        name="address"
        value={formData.address || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Guardar cambios
      </Button>
    </Box>
  );
};

export default EmployeeProfile;