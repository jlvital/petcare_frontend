import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout';
import Home from '../pages/home';
import AuthPage from '../pages/AuthPage';
import ProductCatalog from '../pages/productCatalog';
import AdminDashboard from '../pages/dashboard/adminDashboard';
import ClientDashboard from '../pages/dashboard/clientDashboard';
import EmployeeDashboard from '../pages/dashboard/employeeDashboard';
import RegisterEmployeeForm from '../features/admin/registerEmployeeForm';

import RequestPasswordRecoveryForm from '../features/auth/requestPasswordRecoveryForm';
import ResetPasswordForm from '../features/auth/resetPasswordForm';
import ChangePasswordForm from '../features/auth/changePasswordForm';

import ProtectedRoute from '../components/layout/ProtectedRoute';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route path="/register" element={<AuthPage mode="register" />} />
        <Route path="/productos" element={<ProductCatalog />} /> 
        <Route path="/forgot-password" element={<RequestPasswordRecoveryForm />} />
        <Route path="/reset-password" element={<ResetPasswordForm />} />
        <Route path="/change-password" element={<ChangePasswordForm />} />

        <Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute allowedRoles={['ADMIN']}>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/client/dashboard"
  element={
    <ProtectedRoute allowedRoles={['CLIENTE']}>
      <ClientDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/employee/dashboard"
  element={
    <ProtectedRoute allowedRoles={['EMPLEADO']}>
      <EmployeeDashboard />
    </ProtectedRoute>
  }
/>

      </>
    </Routes>
  );
};

export default AppRouter;
