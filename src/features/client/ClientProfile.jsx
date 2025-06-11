import React, { useEffect, useState } from 'react';
import {
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Box
} from '@mui/material';
import FormLayout from '@/components/common/FormLayout';
import FormField from '@/components/common/FormField';
import DateField from '@/components/common/DateField';
import UploadImageField from '@/components/common/UploadImageField';
import CustomSnackbar from '@/components/common/CustomSnackbar';
import PrimaryButton from '@/components/common/PrimaryButton';
import { getClientProfile, updateClientProfile } from '@/services/clientService';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/dcnshxts9/image/upload/v1749641792/profile_dfaols.png';

const getTransformedImage = (url) => {
  if (!url.includes('cloudinary')) return url;
  return url.replace('/upload/', '/upload/c_fill,w_90,h_90,g_face/');
};

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

  const [previewImage, setPreviewImage] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    getClientProfile()
      .then(res => setFormData(prev => ({ ...prev, ...res.data })))
      .catch(() => setSnackbar({ open: true, message: '❌ Error al cargar el perfil.', severity: 'error' }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (url) => {
    setFormData(prev => ({ ...prev, profilePictureUrl: url }));
    setPreviewImage(null); // Limpia la preview tras subir
  };

  const handleImageSelected = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.lastName1.trim()) {
      setSnackbar({ open: true, message: '❌ Nombre y primer apellido obligatorios.', severity: 'error' });
      return;
    }

    if (formData.phoneNumber && !/^[0-9]{9}$/.test(formData.phoneNumber)) {
      setSnackbar({ open: true, message: '❌ Teléfono inválido.', severity: 'error' });
      return;
    }

    try {
      await updateClientProfile(formData);
      setSnackbar({ open: true, message: '✅ Perfil actualizado.', severity: 'success' });
    } catch {
      setSnackbar({ open: true, message: '❌ No se pudo actualizar el perfil.', severity: 'error' });
    }
  };

  return (
    <FormLayout>
      <Box className="flex justify-between items-start mb-6">
        <Typography variant="h5" className="text-[#1c6f6a] font-semibold">
          Mi perfil
        </Typography>

        <Box className="flex flex-col items-center gap-3 min-w-[100px] mt-1">
          <Box className="w-[90px] h-[90px] rounded-full overflow-hidden border border-[#1c6f6a] shadow-md">
            <img
              src={previewImage || getTransformedImage(formData.profilePictureUrl || DEFAULT_IMAGE)}
              alt="preview"
              className="w-full h-full object-cover rounded-full"
            />
          </Box>

          <UploadImageField
            onUpload={handleImageUpload}
            existingUrl={formData.profilePictureUrl}
            onImageSelect={handleImageSelected}
          />
        </Box>
      </Box>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <FormField label="Nombre *" name="name" value={formData.name} onChange={handleChange} required />
        <FormField label="Primer apellido *" name="lastName1" value={formData.lastName1} onChange={handleChange} required />
        <FormField label="Segundo apellido" name="lastName2" value={formData.lastName2} onChange={handleChange} />

        <FormLabel className="mt-4">Género</FormLabel>
        <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
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

        <FormField label="Correo de recuperación" name="recoveryEmail" value={formData.recoveryEmail} onChange={handleChange} />
        <FormField label="Teléfono" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        <FormField label="Dirección" name="address" value={formData.address} onChange={handleChange} />
        <DateField label="Fecha de nacimiento" name="birthDate" value={formData.birthDate} onChange={handleChange} />

        <Box>
          <FormLabel className="mt-4">Notificaciones</FormLabel>
          <RadioGroup row name="notificationStatus" value={formData.notificationStatus} onChange={handleChange}>
            <FormControlLabel value="ACTIVADAS" control={<Radio />} label="Activadas" />
            <FormControlLabel value="DESACTIVADAS" control={<Radio />} label="Desactivadas" />
          </RadioGroup>
        </Box>

        <div className="flex justify-center mt-4">
          <PrimaryButton type="submit">Guardar cambios</PrimaryButton>
        </div>
      </form>

      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
      />
    </FormLayout>
  );
};

export default ClientProfile;