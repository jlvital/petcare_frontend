import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-text">
      <Navbar />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;