import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Button, RadioGroup, FormControlLabel, Radio, Alert, FormLabel
} from '@mui/material';
import FormField from '../../components/common/FormField';
import DateField from '../../components/common/DateField';
import CustomSnackbar from '../../components/common/CustomSnackbar';
import { getClientProfile, updateClientProfile } from '../../services/clientService';
import { formContainerStyle } from '../../styles/formStyles';

const ClientProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName1: '',
    lastName2: '',
    recoveryEmail: '',
    phoneNumber: '',
    address: '',
    profilePictureUrl: '',
    notificationStatus: 'DESACTIVADAS',
    birthDate: '',
    gender: '',
    customGender: ''
  });

  const [loading, setLoading] = useState(true);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    getClientProfile()
      .then(res => {
        setFormData(prev => ({ ...prev, ...res.data }));
        setLoading(false);
      })
      .catch(() => {
        setSnackbar({ open: true, message: '❌ Error al cargar el perfil.', severity: 'error' });
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.lastName1.trim()) {
      setSnackbar({
        open: true,
        message: '❌ El nombre y el primer apellido son obligatorios.',
        severity: 'error'
      });
      return;
    }

    if (!formData.notificationStatus || !formData.gender) {
  setSnackbar({
    open: true,
    message: '❌ Debes seleccionar un género.',
    severity: 'error'
  });
  return;
}

    if (formData.phoneNumber && !/^\d{9}$/.test(formData.phoneNumber)) {
      setSnackbar({
        open: true,
        message: '❌ El teléfono debe tener 9 dígitos.',
        severity: 'error'
      });
      return;
    }

    try {
      await updateClientProfile(formData);
      setSnackbar({
        open: true,
        message: '✅ Perfil actualizado correctamente.',
        severity: 'success'
      });
    } catch {
      setSnackbar({
        open: true,
        message: '❌ No se pudo actualizar el perfil.',
        severity: 'error'
      });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={formContainerStyle}>
      <Typography variant="h5" mb={3}>
        Mi perfil
      </Typography>

      {loading ? (
        <Alert severity="info">Cargando datos...</Alert>
      ) : (
        <>
          <FormField label="Nombre" name="name" value={formData.name} onChange={handleChange} required />
          <FormField label="Primer apellido" name="lastName1" value={formData.lastName1} onChange={handleChange} required />
          <FormField label="Segundo apellido" name="lastName2" value={formData.lastName2} onChange={handleChange} />
          <FormField label="Correo de recuperación" type="email" name="recoveryEmail" value={formData.recoveryEmail} onChange={handleChange} />
          <FormField label="Teléfono" name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleChange} />
          <FormField label="Dirección" name="address" value={formData.address} onChange={handleChange} />
          <FormField label="Foto de perfil (URL)" name="profilePictureUrl" type="url" value={formData.profilePictureUrl} onChange={handleChange} />

          <DateField
            label="Fecha de nacimiento"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />

          <FormLabel component="legend" sx={{ mt: 3 }}>Notificaciones</FormLabel>
          <RadioGroup
            row
            name="notificationStatus"
            value={formData.notificationStatus}
            onChange={handleChange}
          >
            <FormControlLabel value="ACTIVADAS" control={<Radio />} label="Activadas" />
            <FormControlLabel value="DESACTIVADAS" control={<Radio />} label="Desactivadas" />
          </RadioGroup>

          <FormLabel component="legend" sx={{ mt: 3 }}>Género</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="HOMBRE" control={<Radio />} label="Hombre" />
            <FormControlLabel value="MUJER" control={<Radio />} label="Mujer" />
            <FormControlLabel value="OTRO" control={<Radio />} label="Otro" />
          </RadioGroup>

          {formData.gender === 'OTRO' && (
            <FormField
              label="Especifica tu género"
              name="customGender"
              value={formData.customGender}
              onChange={handleChange}
            />
          )}

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
            Guardar cambios
          </Button>
        </>
      )}

      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
      />
    </Box>
  );
};

export default ClientProfile;