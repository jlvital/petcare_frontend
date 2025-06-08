import api from './api';

export const getClientProfile = () => {
  return api.get('/client/profile');
};

export const updateClientProfile = (data) => {
  return api.put('/client/profile', data);
};