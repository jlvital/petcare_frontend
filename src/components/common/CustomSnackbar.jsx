// src/components/common/CustomSnackbar.jsx
import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import {
  CheckCircleOutline, ErrorOutline, InfoOutlined, ReportProblem
} from '@mui/icons-material';

const CustomSnackbar = ({ open, message, severity = 'info', onClose, duration = 5000 }) => {
  const iconMapping = {
    success: <CheckCircleOutline fontSize="inherit" />,
    error: <ErrorOutline fontSize="inherit" />,
    warning: <ReportProblem fontSize="inherit" />,
    info: <InfoOutlined fontSize="inherit" />
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        icon={iconMapping[severity]}
        sx={{
          borderRadius: '8px',
          fontSize: '0.95rem',
          backgroundColor: {
            success: '#1c6f6a',
            error: '#F53F3F',
            warning: '#FF7D00',
            info: '#14C9C9'
          }[severity],
          color: '#ffffff',
          width: '100%'
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;