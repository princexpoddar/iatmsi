import React from 'react';
import HeroSection from '../components/HeroSection';
import ImageGallery from '../components/ImageGallery';

function Homepage() {
  return (
    <main className="w-full">
      <HeroSection />
      <ImageGallery />
      {/* Add more sections below the hero section */}
    </main>
  );
}

export default Homepage; 