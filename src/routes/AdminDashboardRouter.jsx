import { Routes, Route, Navigate } from 'react-router-dom';

import ProductAdmin from '@/features/admin/ProductAdmin';
import RegisterEmployeeForm from '@/features/admin/RegisterEmployeeForm';
import StatisticsPanel from '@/features/admin/StatisticsPanel';
import AccountManager from '@/features/admin/AccountManager';
import AdminDashboard from '@/features/admin/AdminDashboard';

const AdminDashboardRouter = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="products" element={<ProductAdmin />} />
      <Route path="stats" element={<StatisticsPanel />} />
      <Route path="register-employee" element={<RegisterEmployeeForm />} />
      <Route path="users" element={<AccountManager />} />
      <Route path="*" element={<Navigate to="" replace />} />
    </Routes>
  );
};

export default AdminDashboardRouter;
