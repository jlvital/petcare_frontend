import React, { useState } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import AdminSidebar from '../../features/admin/adminSidebar';
import UserManagement from '../../features/admin/userManagement';
import ProductAdmin from '../../features/admin/productAdmin';
import StatisticsPanel from '../../features/admin/statsPanel';
import RegisterEmployeeForm from "../../features/admin/registerEmployeeForm";
import AuthActions from '../../components/common/AuthActions';

const AdminDashboard = () => {
  const [view, setView] = useState('users');

  const renderView = () => {
    switch (view) {
      case 'users': return <UserManagement />;
      case 'products': return <ProductAdmin />;
      case 'stats': return <StatisticsPanel />;
      case 'register': return <RegisterEmployeeForm />;
      default: return null;
    }
  };

  return (
    <Box className="p-6">
      <Typography variant="h4" gutterBottom>
        Panel del Administrador 🛠️
      </Typography>

      <Grid container columns={12} spacing={2}>
  <Grid gridColumn="span 12" md="span 3">
          <Paper elevation={3} className="p-4">
            <AdminSidebar onSelect={setView} />
          </Paper>
        </Grid>

        <Grid gridColumn="span 12" md="span 9">
          <Paper elevation={3} className="p-4">
            {renderView()}
          </Paper>
        </Grid>
      </Grid>

      <AuthActions />
    </Box>
  );
};

export default AdminDashboard;
