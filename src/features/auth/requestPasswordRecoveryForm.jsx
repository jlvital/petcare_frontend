import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import api from '../../services/api';
import FormField from '../../components/common/FormField';
import CustomSnackbar from '../../components/common/CustomSnackbar'; // ✅ nuevo import

const RequestPasswordRecoveryForm = () => {
  const [email, setEmail] = useState('');

  // ✅ Snackbar state
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/auth/request-password-recovery', { email });

      setSnackbar({
        open: true,
        message: response.data || '✅ Enlace de recuperación enviado.',
        severity: 'success'
      });
    } catch (err) {
      const errorMsg = err.response?.data || "❌ No se pudo procesar la solicitud.";
      setSnackbar({
        open: true,
        message: errorMsg,
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
      <Typography variant="h5" className="text-center mb-4">
        ¿Has olvidado tu contraseña?
      </Typography>
      <Typography variant="body2" className="text-gray-600 mb-4 text-center">
        Introduce el correo con el que estás registrado (clientes) o tu correo personal (empleados).
      </Typography>

      <FormField
        label="Correo electrónico"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button type="submit" variant="contained" fullWidth className="mt-6">
        Enviar enlace de recuperación
      </Button>

      {/* ✅ Snackbar render */}
      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
      />
    </Box>
  );
};

export default RequestPasswordRecoveryForm;
