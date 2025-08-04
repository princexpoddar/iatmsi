import React from 'react';
import HeroSection from '../components/HeroSection';
import ConferenceStats from '../components/ConferenceStats';
import AboutConference from '../components/AboutConference';
import CallForPapers from '../components/CallForPapers';
import ImageGallery from '../components/ImageGallery';

function Homepage() {
  return (
    <main className="w-full">
      <HeroSection />
      <ConferenceStats />
      <AboutConference />
      <CallForPapers />
      <ImageGallery />
      {/* Add more sections below the hero section */}
    </main>
  );
}

export default Homepage; 