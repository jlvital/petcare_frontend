import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Grid, Card, CardContent, CardActions, Button, Avatar, Stack
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import { useNavigate } from 'react-router-dom';

import { getMyPets, deletePet } from '@/features/pets/petService';
import EmptyState from './EmptyState';
import DeleteDialog from '../../components/common/DeleteDialog';

const ClientPets = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedPetId, setSelectedPetId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getMyPets()
      .then(setPets)
      .finally(() => setLoading(false));
  }, []);

  const openDeleteDialog = (petId) => {
    setSelectedPetId(petId);
    setDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    try {
      await deletePet(selectedPetId);
      setPets((prev) => prev.filter((p) => p.id !== selectedPetId));
      setDeleteDialogOpen(false);
    } catch (err) {
      console.error('Error al eliminar mascota', err);
    }
  };

  if (loading) {
    return <Typography className="text-center mt-10">Cargando mascotas...</Typography>;
  }

  if (pets.length === 0) {
    return <EmptyState />;
  }

  return (
    <Box className="p-4">
      <Box className="flex justify-between items-center mb-6">
        <Typography variant="h5" className="text-center w-full">
          Mis mascotas registradas
        </Typography>
        <Button
          variant="contained"
          startIcon={<PetsIcon />}
          onClick={() => navigate('/client/pets/new')}
          sx={{ backgroundColor: '#1c6f6a', '&:hover': { backgroundColor: '#154d49' }, ml: 'auto' }}
        >
          Añadir mascota
        </Button>
      </Box>

      <Grid container spacing={3}>
        {pets.map((pet) => (
          <Grid item xs={12} sm={6} md={4} key={pet.id}>
            <Card className="shadow-md rounded-2xl h-full p-2">
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" className="mb-3">
                  <Avatar
                    src={pet.imageUrl || '/assets/images/gallery/no_pets.png'}
                    alt={pet.name}
                    sx={{ width: 64, height: 64 }}
                  />
                  <Box>
                    <Typography variant="h6" className="text-primary">
                      {pet.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {pet.species} - {pet.breed}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Fecha de nacimiento: {pet.birthDate || 'Desconocida'}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
              <CardActions className="flex justify-between px-4 pb-4">
                <Button size="small" onClick={() => navigate(`/client/pets/edit/${pet.id}`)}>
                  Editar
                </Button>
                <Button size="small" onClick={() => navigate(`/client/bookings?petId=${pet.id}`)}>
                  Citas
                </Button>
                <Button size="small" onClick={() => navigate(`/client/medical-history/${pet.id}`)}>
                  Historial
                </Button>
                <Button size="small" color="error" onClick={() => openDeleteDialog(pet.id)}>
                  Eliminar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <DeleteDialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleDelete}
        title="¿Eliminar mascota?"
        description="Esta acción no se puede deshacer. ¿Estás seguro de que deseas eliminar esta mascota?"
      />
    </Box>
  );
};

export default ClientPets;