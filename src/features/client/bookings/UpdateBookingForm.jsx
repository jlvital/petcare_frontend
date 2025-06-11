import React, { useEffect, useState } from 'react';
import { Box, Button, MenuItem, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import api from '@/services/api';
import FormField from '@/components/common/FormField';
import DateField from '@/components/common/DateField';
import CustomSnackbar from '@/components/common/CustomSnackbar';

const UpdateBookingForm = () => {
  const { id } = useParams(); // id de la cita a modificar
  const [formData, setFormData] = useState({
    newDate: '',
    newTime: '',
    newType: '',
    reminderRequest: false,
    newEmployeeId: ''
  });

  const [employees, setEmployees] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booking = await api.get(`/client/bookings/${id}`);
        const employeesRes = await api.get('/admin/employees');

        setFormData({
          newDate: booking.data.date || '',
          newTime: booking.data.time || '',
          newType: booking.data.type || '',
          reminderRequest: booking.data.reminderRequest,
          newEmployeeId: booking.data.employee?.id || ''
        });

        setEmployees(employeesRes.data || []);
      } catch (error) {
        setSnackbar({ open: true, message: '❌ Error al cargar los datos de la cita.', severity: 'error' });
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/client/bookings/${id}`, formData);
      setSnackbar({ open: true, message: '✅ Cita actualizada correctamente.', severity: 'success' });
    } catch (err) {
      const msg = err.response?.data?.message || '❌ No se pudo actualizar la cita.';
      setSnackbar({ open: true, message: msg, severity: 'error' });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-xl shadow-md"
    >
      <Typography variant="h5" mb={3}>Modificar cita</Typography>

      <DateField
        label="Nueva fecha"
        name="newDate"
        value={formData.newDate}
        onChange={handleChange}
      />

      <FormField
        label="Nueva hora"
        name="newTime"
        type="time"
        value={formData.newTime}
        onChange={handleChange}
      />

      <FormField
        label="Nuevo tipo"
        name="newType"
        value={formData.newType}
        onChange={handleChange}
        select
      >
        <MenuItem value="REVISION">Revisión</MenuItem>
        <MenuItem value="VACUNA">Vacuna</MenuItem>
        <MenuItem value="URGENCIA">Urgencia</MenuItem>
      </FormField>

      <FormField
        label="¿Recordatorio por email?"
        name="reminderRequest"
        type="checkbox"
        checked={formData.reminderRequest}
        onChange={handleChange}
      />

      <FormField
        label="Nuevo profesional"
        name="newEmployeeId"
        value={formData.newEmployeeId}
        onChange={handleChange}
        select
      >
        {employees.map(emp => (
          <MenuItem key={emp.id} value={emp.id}>
            {`${emp.name} ${emp.lastName1}`}
          </MenuItem>
        ))}
      </FormField>

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
        Guardar cambios
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

export default UpdateBookingForm;
