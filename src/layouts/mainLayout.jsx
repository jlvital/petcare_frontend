import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9fbfc] text-[#233b53]">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet /> {/* Esto renderiza las páginas como Home, Login, etc. */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
