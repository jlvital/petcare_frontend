import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

import Home from '../pages/home';
import AuthPage from '../pages/AuthPage';
import LoginGoogle from '../pages/LoginGoogle';
import LoginError from '../pages/LoginError';
import ProductCatalog from '../pages/ProductCatalog';
import RecoveryForm from '../features/auth/RecoveryForm';
import RecoverAccount from '../features/auth/RecoverAccount'; // ✅

import Services from '../pages/Services';
import Reviews from '../pages/Reviews';
import Contact from '../pages/Contact';
import AboutUs from '../pages/AboutUs';
import Gallery from '../pages/Gallery';

import AdminDashboardRouter from './AdminDashboardRouter';
import ClientDashboardRouter from './ClientDashboardRouter';
import EmployeeDashboardRouter from './EmployeeDashboardRouter';

import ProtectedRoute from '../components/layout/ProtectedRoute';
import AdminLayout from '../layouts/AdminLayout';
import ClientLayout from '../layouts/ClientLayout';
import EmployeeLayout from '../layouts/EmployeeLayout';

const AppRouter = () => {
  return (
    <Routes>
      {/* 🔹 RUTAS PÚBLICAS CON LAYOUT GENERAL */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ProductCatalog />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/opiniones" element={<Reviews />} />
        <Route path="/quienes-somos" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/galeria" element={<Gallery />} />

        {/* 🔐 AUTENTICACIÓN */}
        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route path="/register" element={<AuthPage mode="register" />} />
        <Route path="/login-success" element={<LoginGoogle />} />
        <Route path="/login-error" element={<LoginError />} />

        {/* 🔐 RECUPERACIÓN */}
        <Route path="/forgot-password" element={<RecoveryForm />} /> {/* Introducir email */}
        <Route path="/recover-account" element={<RecoverAccount />} /> {/* Formulario con token */}
      </Route>

      {/* 🔐 RUTAS PROTEGIDAS */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute allowedRoles={['ADMIN']}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="*" element={<AdminDashboardRouter />} />
      </Route>

      <Route
        path="/client/*"
        element={
          <ProtectedRoute allowedRoles={['CLIENTE']}>
            <ClientLayout />
          </ProtectedRoute>
        }
      >
        <Route path="*" element={<ClientDashboardRouter />} />
      </Route>

      <Route
        path="/employee/*"
        element={
          <ProtectedRoute allowedRoles={['EMPLEADO']}>
            <EmployeeLayout />
          </ProtectedRoute>
        }
      >
        <Route path="*" element={<EmployeeDashboardRouter />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;