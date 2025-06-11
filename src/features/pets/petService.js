import api from '@/services/api';

export const getMyPets = async () => {
  const response = await api.get('/api/pets');
  return response.data;
};

export const registerPet = async (petData) => {
  const response = await api.post('/api/pets', petData);
  return response.data;
};

export const deletePet = async (petId) => {
  const response = await api.delete(`/api/pets/${petId}`);
  return response.data;
};

export const getPetById = async (id) => {
  const response = await api.get(`/api/pets/${id}`);
  return response.data;
};

export const updatePet = async (id, updateData) => {
  const response = await api.patch(`/api/pets/${id}`, updateData);
  return response.data;
};
