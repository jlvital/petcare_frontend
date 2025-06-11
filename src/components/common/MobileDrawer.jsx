import React from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Box
} from '@mui/material';

const MobileDrawer = ({ open, onClose, items, onSelect, active }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 250, p: 2 }}>
        <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
          Opciones 🐾
        </Typography>
        <List>
          {items.map(({ key, label }) => (
            <ListItemButton
              key={key}
              selected={key === active}
              onClick={() => onSelect(key)}
              sx={{
                borderRadius: 2,
                mb: 1,
                backgroundColor: key === active ? 'primary.light' : 'transparent',
                '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'primary.dark'
                }
              }}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
