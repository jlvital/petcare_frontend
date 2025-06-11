import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

const DeleteDialog = ({ open, onClose, onConfirm, title, description }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-[#1c6f6a]">{title || '¿Eliminar elemento?'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {description || 'Esta acción no se puede deshacer. ¿Estás seguro de que deseas eliminarlo?'}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined" className="border-[#1c6f6a] text-[#1c6f6a]">
          Cancelar
        </Button>
        <Button onClick={onConfirm} variant="contained" className="bg-red-600 text-white hover:bg-red-700">
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
