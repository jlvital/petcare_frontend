import React, { useState } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import EmployeeSidebar from '../../features/employee/employeeSidebar';
import AppointmentManagement from '../../features/employee/appointmentManagement';
import MedicalHistory from '../../features/employee/medicalHistory';
import StockAlert from '../../features/employee/stockAlert';
import AuthActions from '../../components/common/AuthActions';

const EmployeeDashboard = () => {
  const [view, setView] = useState('appointments');

  const renderView = () => {
    switch (view) {
      case 'appointments': return <AppointmentManagement />;
      case 'history': return <MedicalHistory />;
      case 'stock': return <StockAlert />;
      default: return null;
    }
  };

  return (
    <Box className="p-6">
      <Typography variant="h4" gutterBottom>
        Panel del Empleado 👩‍⚕️
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} className="p-4">
            <EmployeeSidebar onSelect={setView} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={9}>
          <Paper elevation={3} className="p-4">
            {renderView()}
          </Paper>
        </Grid>
      </Grid>

      <AuthActions />
    </Box>
  );
};

export default EmployeeDashboard;
