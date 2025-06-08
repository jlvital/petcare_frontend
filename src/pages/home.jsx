import React from 'react';
import { Container, Box } from '@mui/material';
import HeroSection from '../features/home/HeroSection';
import TestimonialList from '../features/home/TestimonialList';

const Home = () => {
  return (
    <Box className="bg-white">
      <HeroSection />
      <Box className="py-20">
        <Container maxWidth="lg">
          <TestimonialList />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;