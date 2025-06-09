import React, { useState } from 'react';
import { Box, Divider } from '@mui/material';
import PetList from '@/features/pets/PetList';
import PetForm from '@/features/pets/PetForm';
import CustomSnackbar from '@/components/common/CustomSnackbar';

const MyPets = () => {
  const [reload, setReload] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info'
  });

  const refreshList = () => setReload(!reload);

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleMessage = (message, severity = 'info') => {
    setSnackbar({
      open: true,
      message,
      severity
    });
  };

  return (
    <Box>
      <PetForm onSuccess={refreshList} onMessage={handleMessage} />
      <Divider sx={{ my: 4 }} />
      <PetList key={reload} />
      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleSnackbarClose}
      />
    </Box>
  );
};

export default MyPets;
