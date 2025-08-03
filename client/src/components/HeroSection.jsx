import React from 'react';

function HeroSection() {
  return (
    <section className="relative h-[82.5vh] w-full overflow-hidden font-poppins">
      {/* Single Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/clgim.jpg" 
          alt="College Background"
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.7) contrast(1.1)'
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
            Welcome to IATMSI-26
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 max-w-6xl mx-auto leading-relaxed drop-shadow-lg uppercase tracking-wide">
            IEEE International Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation
          </p>
          <p className="text-base md:text-lg lg:text-xl font-semibold drop-shadow-lg">
            (Conference Record: 68868) Scopus Indexed, Hybrid Event, March 12-14, 2026
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection; 