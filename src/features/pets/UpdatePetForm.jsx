// src/features/pets/UpdatePetForm.jsx
import React, { useEffect, useState } from 'react';
import {
  Typography, Button, MenuItem, FormControlLabel, Checkbox
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import FormLayout from '@/components/common/FormLayout';
import FormField from '@/components/common/FormField';
import DateField from '@/components/common/DateField';
import PetProfileUploader from '@/features/pets/PetProfileUploader';
import { PET_GENDER_OPTIONS, PET_TYPE_OPTIONS } from '@/constants/enums';
import { getPetById, updatePet } from './petService';

const UpdatePetForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [petData, setPetData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPetById(id)
      .then((data) => {
        if (!data.imageUrl) data.imageUrl = '';
        setPetData(data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (field, value) => {
    setPetData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePet(id, petData);
    navigate('/client/pets');
  };

  if (loading) {
    return (
      <FormLayout title="Editar mascota">
        <div className="flex justify-center py-10">
          <Typography variant="body1" color="textSecondary">
            Cargando datos...
          </Typography>
        </div>
      </FormLayout>
    );
  }

  return (
    <FormLayout title="Editar mascota" onSubmit={handleSubmit}>
      <PetProfileUploader onUpload={(url) => handleChange('imageUrl', url)} />

      {petData.imageUrl && (
        <img
          src={petData.imageUrl}
          alt="foto actual"
          className="max-w-xs rounded-lg mb-4 shadow"
        />
      )}

      <FormField label="Nombre" name="name" value={petData.name || ''} onChange={(e) => handleChange('name', e.target.value)} required />
      <FormField label="Raza" name="breed" value={petData.breed || ''} onChange={(e) => handleChange('breed', e.target.value)} />
      <FormField label="Tipo personalizado" name="customType" value={petData.customType || ''} onChange={(e) => handleChange('customType', e.target.value)} />
      <FormField label="Observaciones" name="observations" value={petData.observations || ''} onChange={(e) => handleChange('observations', e.target.value)} multiline rows={3} />
      <FormField label="Peso (kg)" name="weight" type="number" value={petData.weight || ''} onChange={(e) => handleChange('weight', parseFloat(e.target.value))} />

      <DateField label="Fecha de nacimiento" name="birthDate" value={petData.birthDate} onChange={(e) => handleChange('birthDate', e.target.value)} />
      <DateField label="Fecha de adopción" name="adoptionDate" value={petData.adoptionDate} onChange={(e) => handleChange('adoptionDate', e.target.value)} />
      <DateField label="Fecha de esterilización" name="sterilizationDate" value={petData.sterilizationDate} onChange={(e) => handleChange('sterilizationDate', e.target.value)} />

      <FormField label="Sexo" name="petGender" value={petData.petGender || ''} onChange={(e) => handleChange('petGender', e.target.value)} select>
        {PET_GENDER_OPTIONS.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
        ))}
      </FormField>

      <FormField label="Tipo de mascota" name="type" value={petData.type || ''} onChange={(e) => handleChange('type', e.target.value)} select>
        {PET_TYPE_OPTIONS.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
        ))}
      </FormField>

      <FormControlLabel
        control={<Checkbox checked={petData.sterilized || false} onChange={(e) => handleChange('sterilized', e.target.checked)} />}
        label="Esterilizado"
      />

      <div className="flex justify-end gap-4 pt-4">
        <Button variant="outlined" onClick={() => navigate(-1)}>Cancelar</Button>
        <Button type="submit" variant="contained" className="bg-primary hover:bg-primary-dark text-white">
          Guardar cambios
        </Button>
      </div>
    </FormLayout>
  );
};

export default UpdatePetForm;
