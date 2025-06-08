import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import {
  Box, Typography, Button, Paper
} from '@mui/material';
import NewBookingForm from './NewBookingForm';
import EditBookingModal from './EditBookingModal';

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editOpen, setEditOpen] = useState(false);
  const [editingBooking, setEditingBooking] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookingsRes = await api.get('/client/bookings');
        const employeesRes = await api.get('/admin/employees');
        setBookings(bookingsRes.data || []);
        setEmployees(employeesRes.data || []);
      } catch (err) {
        console.error('Error al cargar datos:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const nextBooking = bookings.length > 0 ? bookings[0] : null;

  const handleCancelBooking = async (id) => {
    if (!window.confirm('¿Estás seguro de que deseas cancelar esta cita?')) return;
    try {
      await api.delete(`/client/bookings/${id}`);
      setBookings(prev => prev.filter(b => b.id !== id));
      alert('Cita cancelada correctamente.');
    } catch (err) {
      console.error('Error al cancelar cita:', err);
      alert('No se pudo cancelar la cita.');
    }
  };

  const handleOpenEdit = (booking) => {
    setEditingBooking(booking);
    setEditOpen(true);
  };

  const handleSaveEdit = async (updatedData) => {
    try {
      const patchRequest = {
        newDate: updatedData.date,
        newTime: updatedData.time,
        newType: updatedData.type,
        reminderRequest: updatedData.reminderRequest,
        newEmployeeId: updatedData.employeeId
      };

      const res = await api.patch(`/bookings/${updatedData.id}`, patchRequest);
      setBookings(prev =>
        prev.map(b => (b.id === updatedData.id ? res.data : b))
      );
    } catch (err) {
      alert('Error al actualizar la cita.');
    }
  };

  return (
    <Box className="max-w-6xl mx-auto p-6">
      <Typography variant="h4" gutterBottom>
        Historial de citas
      </Typography>

      {loading ? (
        <Typography>Cargando...</Typography>
      ) : nextBooking ? (
        <Paper className="p-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center shadow rounded-xl bg-gray-50">
          <Box>
            <Typography variant="h6">Próxima cita</Typography>
            <Typography>Fecha: {nextBooking.date}</Typography>
            <Typography>Hora: {nextBooking.time}</Typography>
            <Typography>Tipo: {nextBooking.type}</Typography>
            <Typography>Mascota: {nextBooking.petName}</Typography>
            <Typography>Profesional: {nextBooking.employeeName}</Typography>
          </Box>
          <Box className="mt-4 md:mt-0 space-x-3">
            <Button variant="outlined" color="primary" onClick={() => handleOpenEdit(nextBooking)}>
              Editar
            </Button>
            <Button variant="outlined" color="error" onClick={() => handleCancelBooking(nextBooking.id)}>
              Cancelar
            </Button>
          </Box>
        </Paper>
      ) : (
        <Typography className="mb-6 text-gray-500">
          No tienes ninguna cita registrada. Agenda la primera a continuación.
        </Typography>
      )}

      <NewBookingForm />

      <EditBookingModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        booking={editingBooking}
        onSave={handleSaveEdit}
        empleados={employees}
      />
    </Box>
  );
};

export default BookingsPage;
