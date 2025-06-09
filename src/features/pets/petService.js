import api from '@/services/api';

export const getMyPets = async () => {
  const response = await api.get('/api/pets'); 
  return response.data;
};

export const registerPet = async (petData) => {
  const response = await api.post('/api/pets', petData); 
  return response.data;
};