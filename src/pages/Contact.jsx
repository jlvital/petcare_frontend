import React from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Box,
} from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight="bold" align="center" color="primary" gutterBottom>
        Contáctanos
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" mb={6}>
        ¿Tienes dudas o necesitas ayuda? Puedes escribirnos, llamarnos o venir a visitarnos. ¡Estaremos encantados de ayudarte!
      </Typography>

      <Grid container spacing={6}>
        {/* Información de contacto */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom>Información de contacto</Typography>
            <Box sx={{ mb: 2 }}>
              <strong>📍 Dirección:</strong> Calle de las Mascotas, 10, 28001 Madrid
            </Box>
            <Box sx={{ mb: 2 }}>
              <strong>📞 Teléfono:</strong> 666 123 456
            </Box>
            <Box sx={{ mb: 2 }}>
              <strong>📧 Email:</strong> contacto@petcare.es
            </Box>
            <Box>
              <strong>🕐 Horario:</strong><br />
              Lunes a Viernes: 9:00 - 20:00<br />
              Sábados: 10:00 - 14:00
            </Box>
          </Paper>
        </Grid>

        {/* Formulario de contacto */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom>Formulario de contacto</Typography>
            <Box component="form" noValidate>
              <TextField fullWidth label="Nombre" margin="normal" />
              <TextField fullWidth label="Correo electrónico" margin="normal" />
              <TextField fullWidth label="Mensaje" margin="normal" multiline rows={4} />
              <Button variant="contained" color="primary" sx={{ mt: 2 }} disabled>
                Enviar (no funcional)
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Mapa simulado */}
      <Box sx={{ mt: 10 }}>
        <Typography variant="h6" gutterBottom>¿Dónde estamos?</Typography>
        <Box
          sx={{
            width: '100%',
            height: 300,
            backgroundColor: '#e0e0e0',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: 18,
          }}
        >
          [Aquí iría un mapa de Google Maps incrustado]
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
