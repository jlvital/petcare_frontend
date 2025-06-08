import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import api from '../../services/api';
import PasswordField from '../../components/common/PasswordField';
import CustomSnackbar from '../../components/common/CustomSnackbar';

const RecoverAccount = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?\-+]).{8,}$/;
    if (!passwordRegex.test(formData.newPassword)) {
      setSnackbar({
        open: true,
        message: "❌ La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, un número y un carácter especial.",
        severity: "error"
      });
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setSnackbar({
        open: true,
        message: "❌ Las contraseñas no coinciden.",
        severity: "error"
      });
      return;
    }

    try {
      const response = await api.post('/auth/recover-account', {
        token,
        newPassword: formData.newPassword,
        confirmPassword: formData.confirmPassword
      });

      setSnackbar({
        open: true,
        message: response.data?.message || "✅ Tu contraseña ha sido actualizada.",
        severity: "success"
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setSnackbar({
        open: true,
        message: err.response?.data?.message || "❌ Error al recuperar la cuenta. Inténtalo de nuevo.",
        severity: "error"
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
        Recuperar cuenta y restablecer contraseña
      </Typography>

      <PasswordField
        label="Nueva contraseña"
        name="newPassword"
        value={formData.newPassword}
        onChange={handleChange}
      />
      <PasswordField
        label="Confirmar nueva contraseña"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      <Button type="submit" variant="contained" fullWidth className="mt-6">
        Restablecer contraseña
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

export default RecoverAccount;