import React, { useEffect, useState } from 'react';
import {
  Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton, Tooltip, TextField, Pagination, Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import CustomSnackbar from '../../components/common/CustomSnackbar';
import { getAllUsers, updateUserStatus, deleteUser } from '../../services/userService';

const USERS_PER_PAGE = 10; // Número de usuarios por página

const AccountManager = () => {
  const [users, setUsers] = useState([]);                // Todos los usuarios cargados
  const [search, setSearch] = useState('');              // Valor del campo de búsqueda
  const [page, setPage] = useState(1);                   // Página actual
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info'
  });

  useEffect(() => {
    getAllUsers()
      .then(res => setUsers(res.data))
      .catch(() =>
        setSnackbar({
          open: true,
          message: '❌ Error al cargar usuarios.',
          severity: 'error'
        })
      );
  }, []);

  // Función para alternar el estado entre ACTIVO y BLOQUEADO
  const toggleStatus = async (user) => {
    const newStatus = user.status === 'ACTIVO' ? 'BLOQUEADO' : 'ACTIVO';
    try {
      await updateUserStatus(user.id, newStatus);
      setUsers(prev => prev.map(u => u.id === user.id ? { ...u, status: newStatus } : u));
      setSnackbar({ open: true, message: `✅ Usuario ${newStatus.toLowerCase()}.`, severity: 'success' });
    } catch (err) {
      setSnackbar({ open: true, message: '❌ No se pudo actualizar el estado.', severity: 'error' });
    }
  };

  // Eliminar un usuario permanentemente del listado
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(prev => prev.filter(u => u.id !== id));
      setSnackbar({ open: true, message: '✅ Usuario eliminado.', severity: 'success' });
    } catch (err) {
      setSnackbar({ open: true, message: '❌ No se pudo eliminar.', severity: 'error' });
    }
  };

  // Aplicar búsqueda por nombre o email (ignorando mayúsculas)
  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.username.toLowerCase().includes(search.toLowerCase())
  );

  // Calcular usuarios que se muestran en la página actual
  const startIndex = (page - 1) * USERS_PER_PAGE;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + USERS_PER_PAGE);
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);

  return (
    <Paper className="p-6">
      <Typography variant="h6" gutterBottom>
        Gestión de cuentas de usuario
      </Typography>

      {/* Campo de búsqueda */}
      <Box mb={2}>
        <TextField
          label="Buscar por nombre o correo"
          variant="outlined"
          fullWidth
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // Reiniciar a página 1 si cambia la búsqueda
          }}
        />
      </Box>

      {/* Tabla con los usuarios filtrados y paginados */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Correo</TableCell>
              <TableCell>Rol</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell align="right">
                  <Tooltip title={user.status === 'ACTIVO' ? 'Bloquear' : 'Desbloquear'}>
                    <IconButton onClick={() => toggleStatus(user)}>
                      {user.status === 'ACTIVO' ? <LockIcon /> : <LockOpenIcon />}
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Eliminar">
                    <IconButton onClick={() => handleDelete(user.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
            {paginatedUsers.length === 0 && (
              <TableRow>
                <TableCell colSpan={5}>No hay usuarios que coincidan con la búsqueda.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Paginación solo si hay más de 1 página */}
      {totalPages > 1 && (
        <Box mt={3} display="flex" justifyContent="center">
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
          />
        </Box>
      )}

      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </Paper>
  );
};

export default AccountManager;