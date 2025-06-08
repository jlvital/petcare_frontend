import { Routes, Route, Navigate } from 'react-router-dom';

import MyPets from '../features/client/MyPets';
import MyBookings from '../features/client/MyBookings';
import MyPurchases from '../features/client/MyPurchases';
import ClientProfile from '../features/client/ClientProfile';
import ClientDashboard from '../features/client/ClientDashboard';
import NewBookingForm from '../features/client/bookings/NewBookingForm';
import UpdateBookingForm from '../features/client/bookings/UpdateBookingForm';
import BookingPage from '../features/client/bookings/BookingsPage';
const ClientDashboardRouter = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<ClientDashboard />} />
      <Route path="pets" element={<MyPets />} />
      <Route path="bookings" element={<MyBookings />} />
      <Route path="purchases" element={<MyPurchases />} />
      <Route path="profile" element={<ClientProfile />} />
      <Route path="bookings/new" element={<NewBookingForm />} />
      <Route path="bookings/edit/:id" element={<UpdateBookingForm />} />
      <Route path="client" element={<Navigate to="dashboard" replace />} />


      {/* Ruta por defecto */}
      <Route index element={<Navigate to="client" replace />} />

    </Routes>
  );
};

export default ClientDashboardRouter;
