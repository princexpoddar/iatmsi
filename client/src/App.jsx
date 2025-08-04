import './App.css'
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import Homepage from './pages/Homepage';
import AwardsGrantsPage from './pages/AwardsGrantsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'awards-grants':
        return <AwardsGrantsPage />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SubNavbar onPageChange={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App
