import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import api from '../../services/api';
import FormField from '../../components/common/FormField';
import CustomSnackbar from '../../components/common/CustomSnackbar'; // ✅

const ChangePasswordForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  useEffect(() => {
    const tempUser = sessionStorage.getItem('tempUser');
    if (tempUser) {
      setFormData(prev => ({ ...prev, email: tempUser }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      setSnackbar({
        open: true,
        message: '❌ Las contraseñas no coinciden.',
        severity: 'error'
      });
      return;
    }

    try {
      const response = await api.post('/auth/change-password', formData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });

      setSnackbar({
        open: true,
        message: response.data,
        severity: 'success'
      });

    } catch (err) {
      setSnackbar({
        open: true,
        message: err.response?.data || '❌ Error al cambiar la contraseña.',
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
        Cambiar contraseña
      </Typography>

      <FormField
        label="Nueva contraseña"
        type="password"
        value={formData.newPassword}
        onChange={handleChange}
        name="newPassword"
      />
      <FormField
        label="Confirmar nueva contraseña"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        name="confirmPassword"
      />

      <Button type="submit" variant="contained" fullWidth className="mt-6">
        Cambiar contraseña
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

export default ChangePasswordForm;
