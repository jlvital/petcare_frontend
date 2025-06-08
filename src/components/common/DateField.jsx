import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
dayjs.locale('es');

const DateField = ({ label, name, value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
      <DatePicker
        label={label}
        format="DD/MM/YYYY" // ✅ Formato europeo español
        value={value ? dayjs(value, ['YYYY-MM-DD', 'DD/MM/YYYY']) : null}
        onChange={(newValue) => {
          const formatted = newValue ? newValue.format('YYYY-MM-DD') : '';
          onChange({ target: { name, value: formatted } });
        }}
        slotProps={{
          textField: {
            fullWidth: true,
            variant: 'outlined',
            sx: {
              backgroundColor: '#f4f4f4',
              borderRadius: '8px',
              mt: 2
            }
          }
        }}
      />
    </LocalizationProvider>
  );
};

export default DateField;