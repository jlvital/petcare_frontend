import { Routes, Route, Navigate } from 'react-router-dom';

import EmployeeBookings from '@/features/employee/EmployeeBookings';
import EmployeeTreatments from '@/features/employee/EmployeeTreatments';
import EmployeeVaccines from '@/features/employee/EmployeeVaccines';
import EmployeeProfile from '@/features/employee/EmployeeProfile';
import EmployeeDashboard from '@/features/employee/EmployeeDashboard';

const EmployeeDashboardRouter = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<EmployeeDashboard />} />
      <Route path="bookings" element={<EmployeeBookings />} />
      <Route path="treatments" element={<EmployeeTreatments />} />
      <Route path="vaccines" element={<EmployeeVaccines />} />
      <Route path="profile" element={<EmployeeProfile />} />

      {/* Ruta por defecto */}
      <Route index element={<Navigate to="employee" replace />} />

    </Routes>
  );
};

export default EmployeeDashboardRouter;
