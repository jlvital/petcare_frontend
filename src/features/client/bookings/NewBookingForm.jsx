import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  Select,
  FormHelperText
} from '@mui/material';
import FormField from '../../../components/common/FormField';
import DateField from '../../../components/common/DateField';
import CustomSnackbar from '../../../components/common/CustomSnackbar';
import api from '../../../services/api';
import { BOOKING_TYPES } from './bookingTypes';


const NewBookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    type: '',
    reminderRequest: false,
    petId: '',
    employeeId: ''
  });

  const [pets, setPets] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const petsRes = await api.get('/client/pets');
        const employeesRes = await api.get('/admin/employees');
        setPets(petsRes.data || []);
        setEmployees(employeesRes.data || []);
      } catch (error) {
        setSnackbar({ open: true, message: '❌ Error al cargar datos.', severity: 'error' });
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setFormData(prev => ({
      ...prev,
      type: selectedType,
      employeeId: '' // resetea selección si cambia tipo
    }));
  };

  const currentBooking = BOOKING_TYPES.find(type => type.value === formData.type);
  const filteredEmployees = currentBooking
    ? employees.filter(emp => emp.profile === currentBooking.requiredProfile)
    : [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/client/bookings', formData);
      setSnackbar({ open: true, message: '✅ Cita agendada correctamente.', severity: 'success' });
      setFormData({
        date: '',
        time: '',
        type: '',
        reminderRequest: false,
        petId: '',
        employeeId: ''
      });
    } catch (err) {
      const msg = err.response?.data?.message || '❌ No se pudo agendar la cita.';
      setSnackbar({ open: true, message: msg, severity: 'error' });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-xl shadow-md"
    >
      <Typography variant="h5" mb={3}>Agendar nueva cita</Typography>

      <DateField
        label="Fecha de la cita"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <FormField
        label="Hora"
        name="time"
        type="time"
        value={formData.time}
        onChange={handleChange}
      />

      <FormControl fullWidth margin="normal">
        <InputLabel id="type-label">Tipo de cita</InputLabel>
        <Select
          labelId="type-label"
          name="type"
          value={formData.type}
          onChange={handleTypeChange}
          label="Tipo de cita"
        >
          {BOOKING_TYPES.map((type) => (
            <MenuItem key={type.value} value={type.value}>
              {type.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormField
        label="Selecciona una mascota"
        name="petId"
        value={formData.petId}
        onChange={handleChange}
        select
      >
        {pets.map(pet => (
          <MenuItem key={pet.id} value={pet.id}>
            {pet.name}
          </MenuItem>
        ))}
      </FormField>

      <FormControl fullWidth margin="normal" disabled={!formData.type}>
        <InputLabel id="employee-label">Profesional disponible</InputLabel>
        <Select
          labelId="employee-label"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          label="Profesional disponible"
        >
          {filteredEmployees.map((emp) => (
            <MenuItem key={emp.id} value={emp.id}>
              {emp.name} {emp.lastName1} ({emp.profile})
            </MenuItem>
          ))}
        </Select>

        {formData.type && filteredEmployees.length === 0 && (
          <FormHelperText>No hay empleados disponibles para este tipo de cita.</FormHelperText>
        )}
      </FormControl>

      <FormField
        label="¿Deseas recibir recordatorio por correo?"
        name="reminderRequest"
        type="checkbox"
        checked={formData.reminderRequest}
        onChange={handleChange}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 3 }}
        disabled={!formData.date || !formData.time || !formData.type || !formData.petId || !formData.employeeId}
      >
        Confirmar cita
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

export default NewBookingForm;
