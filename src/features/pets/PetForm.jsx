import React, { useState } from 'react';
import {
  Box, Button, Typography, Grid, MenuItem, Checkbox, FormControlLabel
} from '@mui/material';
import FormField from '@/components/common/FormField';
import { registerPet } from './petService';

const GENDER_OPTIONS = ['MACHO', 'HEMBRA', 'OTRO'];
const TYPE_OPTIONS = ['PERRO', 'GATO', 'AVE', 'REPTIL', 'ROEDOR', 'OTRO'];

const PetForm = ({ onSuccess, onMessage }) => {
  const [form, setForm] = useState({
    name: '',
    petGender: '',
    customGender: '',
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
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
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
        customGender: form.petGender === 'OTRO' ? form.customGender : null,
        customType: form.type === 'OTRO' ? form.customType : null,
      };

      await registerPet(payload);
      if (onMessage) onMessage('✅ Mascota registrada con éxito.', 'success');
      if (onSuccess) onSuccess();
      setForm({
        name: '',
        petGender: '',
        customGender: '',
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
      });
    } catch (err) {
      if (onMessage) onMessage('❌ Error al registrar la mascota. Revisa los datos e intenta de nuevo.', 'error');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>Registrar nueva mascota</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormField label="Nombre" name="name" value={form.name} onChange={handleChange} required />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormField
            label="Sexo"
            name="petGender"
            value={form.petGender}
            onChange={handleChange}
            select
            required
          >
            {GENDER_OPTIONS.map((opt) => (
              <MenuItem key={opt} value={opt}>{opt}</MenuItem>
            ))}
          </FormField>
        </Grid>

        {form.petGender === 'OTRO' && (
          <Grid item xs={12} md={6}>
            <FormField
              label="Género personalizado"
              name="customGender"
              value={form.customGender}
              onChange={handleChange}
              required
            />
          </Grid>
        )}

        <Grid item xs={12} md={6}>
          <FormField
            label="Tipo"
            name="type"
            value={form.type}
            onChange={handleChange}
            select
            required
          >
            {TYPE_OPTIONS.map((opt) => (
              <MenuItem key={opt} value={opt}>{opt}</MenuItem>
            ))}
          </FormField>
        </Grid>

        {form.type === 'OTRO' && (
          <Grid item xs={12} md={6}>
            <FormField
              label="Tipo personalizado"
              name="customType"
              value={form.customType}
              onChange={handleChange}
              required
            />
          </Grid>
        )}

        <Grid item xs={12} md={6}>
          <FormField label="Número de chip" name="chipNumber" value={form.chipNumber} onChange={handleChange} />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormField label="Raza" name="breed" value={form.breed} onChange={handleChange} />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormField label="Fecha de nacimiento" name="birthDate" type="date" value={form.birthDate} onChange={handleChange} />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormField label="Fecha de adopción" name="adoptionDate" type="date" value={form.adoptionDate} onChange={handleChange} />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormField label="Peso (kg)" name="weight" type="number" value={form.weight} onChange={handleChange} />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControlLabel
            control={
              <Checkbox checked={form.sterilized} onChange={handleChange} name="sterilized" />
            }
            label="Esterilizado"
          />
          {form.sterilized && (
            <FormField
              label="Fecha de esterilización"
              name="sterilizationDate"
              type="date"
              value={form.sterilizationDate}
              onChange={handleChange}
            />
          )}
        </Grid>

        <Grid item xs={12}>
          <FormField
            label="Observaciones"
            name="observations"
            multiline
            rows={3}
            value={form.observations}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Button type="submit" variant="contained" sx={{ mt: 3 }}>
        Registrar
      </Button>
    </Box>
  );
};

export default PetForm;