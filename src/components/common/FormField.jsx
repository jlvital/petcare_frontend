import React from 'react';
import { TextField } from '@mui/material';

const FormField = ({ label, type = 'text', name, value, onChange }) => (
  <TextField
    label={label}
    name={name}
    type={type}
    fullWidth
    margin="normal"
    variant="outlined"
    value={value}
    onChange={onChange}
  />
);

export default FormField;
