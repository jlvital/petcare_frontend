import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const ClientLayout = () => {
  return (
    <Box className="flex flex-col min-h-screen bg-[#f9fbfc] text-[#233b53]">
  <Navbar />
  <main className="flex-grow px-4 py-8 max-w-7xl mx-auto w-full">
    <Outlet />
  </main>
  <Footer />
</Box>

  );
};

export default ClientLayout;
