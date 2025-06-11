import React, { useState } from 'react';
import {
  FormControl, FormLabel, FormControlLabel,
  RadioGroup, Radio, Checkbox
} from '@mui/material';
import FormLayout from '@/components/common/FormLayout';
import FormField from '@/components/common/FormField';
import DateField from '@/components/common/DateField';
import PrimaryButton from '@/components/common/PrimaryButton';
import PetProfileUploader from './PetProfileUploader';
import { PET_GENDER_OPTIONS, PET_TYPE_OPTIONS } from '@/constants/enums';
import { registerPet } from './petService';

const PetForm = ({ onSuccess, onMessage }) => {
  const [form, setForm] = useState({
    name: '',
    petGender: '',
    type: '',
    customType: '',
    chipNumber: '',
    breed: '',
    birthDate: '',
    adoptionDate: '',
    weight: '',
    sterilized: false,
    sterilizationDate: '',
    observations: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageUpload = (url) => {
    setForm(prev => ({ ...prev, imageUrl: url }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        birthDate: form.birthDate || null,
        adoptionDate: form.adoptionDate || null,
        sterilizationDate: form.sterilized ? form.sterilizationDate || null : null,
        weight: form.weight ? parseFloat(form.weight) : null,
        customType: form.type === 'OTRO' ? form.customType : null,
      };

      await registerPet(payload);
      onMessage?.('✅ Mascota registrada con éxito.', 'success');
      onSuccess?.();

      setForm({
        name: '',
        petGender: '',
        type: '',
        customType: '',
        chipNumber: '',
        breed: '',
        birthDate: '',
        adoptionDate: '',
        weight: '',
        sterilized: false,
        sterilizationDate: '',
        observations: '',
        imageUrl: '',
      });
    } catch (err) {
      onMessage?.('❌ Error al registrar la mascota.', 'error');
    }
  };

  return (
    <FormLayout title="Registrar nueva mascota" onSubmit={handleSubmit}>
      <div className="max-w-[480px] mx-auto space-y-4">
        <PetProfileUploader onUpload={handleImageUpload} />

        {form.imageUrl && (
          <img
            src={form.imageUrl}
            alt="preview"
            className="max-w-xs rounded-lg shadow mb-4"
          />
        )}

        <FormField
          label="Nombre *"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <FormControl required>
          <FormLabel className="mt-2">Sexo</FormLabel>
          <RadioGroup row name="petGender" value={form.petGender} onChange={handleChange}>
            {PET_GENDER_OPTIONS.map((opt) => (
              <FormControlLabel
                key={opt.value}
                value={opt.value}
                control={<Radio />}
                label={opt.label}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl required>
          <FormLabel className="mt-2">Tipo</FormLabel>
          <RadioGroup row name="type" value={form.type} onChange={handleChange}>
            {PET_TYPE_OPTIONS.map((opt) => (
              <FormControlLabel
                key={opt.value}
                value={opt.value}
                control={<Radio />}
                label={opt.label}
              />
            ))}
          </RadioGroup>
        </FormControl>

        {form.type === 'OTRO' && (
          <FormField
            label="Tipo personalizado"
            name="customType"
            value={form.customType}
            onChange={handleChange}
            required
          />
        )}

        <FormField
          label="Número de chip"
          name="chipNumber"
          value={form.chipNumber}
          onChange={handleChange}
        />

        <FormField
          label="Raza"
          name="breed"
          value={form.breed}
          onChange={handleChange}
        />

        <DateField
          label="Fecha de nacimiento"
          name="birthDate"
          value={form.birthDate}
          onChange={handleChange}
        />

        <DateField
          label="Fecha de adopción"
          name="adoptionDate"
          value={form.adoptionDate}
          onChange={handleChange}
        />

        <FormField
          label="Peso (kg)"
          name="weight"
          type="number"
          value={form.weight}
          onChange={handleChange}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={form.sterilized}
              onChange={handleChange}
              name="sterilized"
            />
          }
          label="Esterilizado"
        />

        {form.sterilized && (
          <DateField
            label="Fecha de esterilización"
            name="sterilizationDate"
            value={form.sterilizationDate}
            onChange={handleChange}
          />
        )}

        <FormField
          label="Observaciones"
          name="observations"
          multiline
          rows={3}
          value={form.observations}
          onChange={handleChange}
        />

        <div className="flex justify-center pt-2">
          <PrimaryButton type="submit">
            Registrar
          </PrimaryButton>
        </div>
      </div>
    </FormLayout>
  );
};

export default PetForm;