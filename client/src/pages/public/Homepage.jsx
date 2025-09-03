import React from 'react';
import HeroSection from '../../components/HeroSection';
import ConferenceStats from '../../components/ConferenceStats';
import ConferenceTheme from '../../components/ConferenceTheme';
import AboutConference from '../../components/AboutConference';
import CallForPapers from '../../components/CallForPapers';
import Awards from '../../components/Awards';
import ImageGallery from '../../components/ImageGallery';
import TeaserSection from '../../components/TeaserSection';
import PatronChairs from '../../components/PatronChairs';
import Supporters from '../../components/Supporters';

function Homepage() {
  return (
    <main className="w-full">
      <HeroSection />
      <ConferenceStats />
      <AboutConference />
      <CallForPapers />
      <ConferenceTheme />
      <Awards />
      <ImageGallery />
      <TeaserSection />
      <PatronChairs />
      <Supporters />
      {/* Add more sections below the hero section */}
    </main>
  );
}

export default Homepage; 