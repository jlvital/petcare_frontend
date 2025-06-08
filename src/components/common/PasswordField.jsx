import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const PasswordField = ({ name, value, onChange, label = 'Contraseña' }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      label={label}
      variant="outlined"
      type={showPassword ? 'text' : 'password'}
      name={name}
      value={value}
      onChange={onChange}
      margin="normal"
      fullWidth
      autoComplete="current-password"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
              aria-label="Mostrar u ocultar contraseña"
              sx={{
                color: '#1c6f6a',
                '&:hover': { backgroundColor: 'transparent' }
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )
      }}
      sx={{
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        mt: 2
      }}
    />
  );
};

export default PasswordField;