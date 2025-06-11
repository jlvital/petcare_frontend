// src/components/common/FormLayout.jsx
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const FormLayout = ({ title, onSubmit, children }) => {
  return (
    <Box className="min-h-screen flex items-center justify-center bg-[#f9fbfc] px-4 py-10">
      <Paper
        component="form"
        onSubmit={onSubmit}
        elevation={4}
        className="w-full max-w-[480px] p-6 rounded-2xl shadow-lg bg-white"
      >
        {title && (
          <Typography
            variant="h5"
            align="center"
            className="text-[#1c6f6a] font-semibold mb-5"
          >
            {title}
          </Typography>
        )}

        <div className="space-y-3">{children}</div>
      </Paper>
    </Box>
  );
};

export default FormLayout;