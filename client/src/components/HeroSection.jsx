import React, { useState, useEffect } from 'react';

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Background images with college image
  const backgroundImages = [
    '/clgimgae.jpg',
    '/hero-bg-2.jpg', 
    '/hero-bg-3.jpg'
  ];

  // Fallback gradient backgrounds if images don't exist
  const fallbackGradients = [
    'bg-gradient-to-r from-blue-600 to-purple-600',
    'bg-gradient-to-r from-green-600 to-blue-600',
    'bg-gradient-to-r from-red-600 to-orange-600'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden font-poppins">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {index === 0 ? (
              // College image for first slide
              <img 
                src={image} 
                alt="College Background"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.log('Image failed to load:', image);
                  e.target.style.display = 'none';
                }}
              />
            ) : (
              // Fallback gradients for other slides
              <div className={`w-full h-full ${fallbackGradients[index]}`}></div>
            )}
          </div>
        ))}
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

      {/* Image Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection; 