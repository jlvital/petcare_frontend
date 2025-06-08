import React, { useState, useEffect } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, MenuItem
} from '@mui/material';
import DateField from '../../../components/common/DateField';
import FormField from '../../../components/common/FormField';
import { BOOKING_TYPES } from './bookingTypes';

const EditBookingModal = ({ open, onClose, booking, onSave, empleados }) => {
  const [formData, setFormData] = useState({ ...booking });

  useEffect(() => {
    if (booking) {
      setFormData({ ...booking });
    }
  }, [booking]);

  const currentBooking = BOOKING_TYPES.find(type => type.value === formData.type);
  const filteredEmployees = currentBooking
    ? empleados.filter(emp => emp.profile === currentBooking.requiredProfile)
    : [];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  if (!booking) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Editar cita</DialogTitle>
      <DialogContent className="space-y-4">
        <DateField
          label="Fecha"
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

        <FormField
          label="Tipo de cita"
          name="type"
          value={formData.type}
          onChange={handleChange}
          select
        >
          {BOOKING_TYPES.map(type => (
            <MenuItem key={type.value} value={type.value}>
              {type.label}
            </MenuItem>
          ))}
        </FormField>

        <FormField
          label="Profesional asignado"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          select
        >
          {filteredEmployees.map(emp => (
            <MenuItem key={emp.id} value={emp.id}>
              {emp.name} {emp.lastName1} ({emp.profile})
            </MenuItem>
          ))}
        </FormField>

        <FormField
          label="¿Deseas recibir recordatorio?"
          name="reminderRequest"
          type="checkbox"
          checked={formData.reminderRequest}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" onClick={handleSubmit}>Guardar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditBookingModal;
