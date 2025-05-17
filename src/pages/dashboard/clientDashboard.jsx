import React, { useState } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import ClientSidebar from '../../features/client/clientSidebar';
import ProfileView from '../../features/client/profileView';
import PetManagement from '../../features/client/petManagement';
import AppointmentHistory from '../../features/client/appointmentHistory';
import PurchaseHistory from '../../features/client/purchaseHistory';
import AuthActions from '../../components/common/AuthActions';

const ClientDashboard = () => {
  const [view, setView] = useState('profile');

  const renderView = () => {
    switch (view) {
      case 'profile': return <ProfileView />;
      case 'pets': return <PetManagement />;
      case 'appointments': return <AppointmentHistory />;
      case 'purchases': return <PurchaseHistory />;
      default: return null;
    }
  };

  return (
    <Box className="p-6">
      <Typography variant="h5" gutterBottom>
        Panel del Cliente 🐾
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} className="p-4">
            <ClientSidebar onSelect={setView} />
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

export default ClientDashboard;
