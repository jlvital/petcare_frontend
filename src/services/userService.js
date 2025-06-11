import api from './api';

export const getAllUsers = () => api.get('/admin/users');

export const updateUserStatus = (id, status) =>
  api.patch(`/admin/user/${id}/status?status=${status}`);

export const deleteUser = (id) =>
  api.delete(`/admin/users/definitive/${id}`);
