// src/components/common/FormField.jsx
import React from 'react';
import { TextField } from '@mui/material';

const FormField = ({ label, type = 'text', name, value, onChange, ...props }) => (
  <TextField
    label={label}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    fullWidth
    margin="dense"
    variant="outlined"
    sx={{
      backgroundColor: '#f4f4f4',
      borderRadius: '8px',
      width: '100%',
    }}
    {...props}
  />
);

export default FormField;