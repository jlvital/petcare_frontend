import React, { useEffect, useState } from 'react';
import { Typography, List, ListItem, ListItemText, CircularProgress } from '@mui/material';
import { getMyPets } from './petService';

const PetList = ({ reloadTrigger }) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // para mostrar el spinner en cada recarga
    getMyPets()
      .then(setPets)
      .finally(() => setLoading(false));
  }, [reloadTrigger]); 

  if (loading) return <CircularProgress />;

  return (
    <>
      <Typography variant="h6" gutterBottom>Mis mascotas registradas</Typography>
      <List>
        {pets.map((pet) => (
          <ListItem key={pet.id}>
            <ListItemText primary={`${pet.name} (${pet.species})`} secondary={`Raza: ${pet.breed}`} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default PetList;
