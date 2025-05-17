import React from 'react';
import { Container } from '@mui/material';
import HeroSection from '../features/home/heroSection';
import ServiceCarousel from '../features/home/serviceCarousel';
import ProductShowcase from '../features/home/productShowcase';
import TestimonialList from '../features/home/testimonialList';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
  <HeroSection /> 
  <div className="bg-[#f0f9f9] py-12">
    <Container maxWidth="lg">
      <ServiceCarousel />
      <ProductShowcase />
      <TestimonialList />
    </Container>
  </div>
</div>
  );
};

export default Home;