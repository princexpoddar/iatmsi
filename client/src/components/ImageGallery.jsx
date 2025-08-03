import React, { useState, useEffect } from 'react';

function ImageGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images for the gallery (you can replace these with actual images)
  const galleryImages = [
    'https://images.unsplash.com/photo-1523050854058-8df90110cfe1?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
  ];

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % galleryImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % galleryImages.length
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Conference Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore moments from our previous conferences and events
          </p>
        </div>

        {/* Image Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Image Container */}
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Image overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
            ))}
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'ring-2 ring-blue-500 ring-offset-2' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Description */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Previous Conference Highlights
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our conferences bring together researchers, industry professionals, and students 
            from around the world to share knowledge and foster innovation in technology and management.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ImageGallery; 