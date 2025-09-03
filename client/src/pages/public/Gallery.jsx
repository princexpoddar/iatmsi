import React, { useState } from 'react';

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Conference image gallery - these would be actual images from IATMSI conferences
  const galleryImages = [
    {
      id: 1,
      src: "/api/placeholder/400/300",
      alt: "Opening Ceremony IATMSI-2025",
      category: "keynotes",
      title: "Opening Ceremony",
      conference: "IATMSI-2025"
    },
    {
      id: 2,
      src: "/api/placeholder/400/300",
      alt: "Keynote Speaker at IATMSI-2025",
      category: "keynotes", 
      title: "Distinguished Keynote Speaker",
      conference: "IATMSI-2025"
    },
    {
      id: 3,
      src: "/api/placeholder/400/300",
      alt: "Technical Session Discussion",
      category: "technical",
      title: "Technical Session",
      conference: "IATMSI-2025"
    },
    {
      id: 4,
      src: "/api/placeholder/400/300",
      alt: "Poster Presentation Session",
      category: "technical",
      title: "Poster Presentations",
      conference: "IATMSI-2025"
    },
    {
      id: 5,
      src: "/api/placeholder/400/300",
      alt: "Award Ceremony",
      category: "awards",
      title: "Best Paper Awards",
      conference: "IATMSI-2025"
    },
    {
      id: 6,
      src: "/api/placeholder/400/300",
      alt: "Cultural Evening Event",
      category: "cultural",
      title: "Cultural Evening",
      conference: "IATMSI-2025"
    },
    {
      id: 7,
      src: "/api/placeholder/400/300",
      alt: "Panel Discussion",
      category: "technical",
      title: "Expert Panel Discussion",
      conference: "IATMSI-2024"
    },
    {
      id: 8,
      src: "/api/placeholder/400/300",
      alt: "Networking Session",
      category: "cultural",
      title: "Networking & Coffee Break",
      conference: "IATMSI-2024"
    },
    {
      id: 9,
      src: "/api/placeholder/400/300",
      alt: "Conference Venue",
      category: "venue",
      title: "ABV-IIITM Campus",
      conference: "IATMSI-2025"
    },
    {
      id: 10,
      src: "/api/placeholder/400/300",
      alt: "International Participants",
      category: "cultural",
      title: "Global Participation",
      conference: "IATMSI-2025"
    },
    {
      id: 11,
      src: "/api/placeholder/400/300",
      alt: "Research Presentation",
      category: "technical", 
      title: "Research Presentation",
      conference: "IATMSI-2024"
    },
    {
      id: 12,
      src: "/api/placeholder/400/300",
      alt: "Closing Ceremony",
      category: "awards",
      title: "Closing Ceremony",
      conference: "IATMSI-2025"
    }
  ];

  const conferenceStats = [
    { title: "Participants", count: "500+", description: "Global attendees" },
    { title: "Countries", count: "37+", description: "International reach" },
    { title: "Papers", count: "400+", description: "Presented research" },
    { title: "Speakers", count: "20+", description: "Expert keynotes" }
  ];

  const galleryCategories = [
    { id: 'all', title: "All Photos", description: "Complete conference gallery" },
    { id: 'keynotes', title: "Keynote Sessions", description: "Distinguished speakers and presentations" },
    { id: 'technical', title: "Technical Sessions", description: "Research presentations and discussions" },
    { id: 'cultural', title: "Cultural Events", description: "Welcome reception and social activities" },
    { id: 'awards', title: "Award Ceremonies", description: "Recognition and achievement celebrations" },
    { id: 'venue', title: "Venue & Campus", description: "ABV-IIITM Gwalior facilities" }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conference Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Memories and highlights from previous IATMSI conferences showcasing global participation and excellence.
          </p>
        </div>

        {/* Conference Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {conferenceStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.count}</div>
              <div className="text-gray-900 font-semibold mb-1">{stat.title}</div>
              <div className="text-gray-600 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Photo Filter Categories */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Conference Photo Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through memorable moments from IATMSI conferences. Filter by category to explore specific events.
            </p>
          </div>
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                
                {/* Overlay with conference badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {image.conference}
                  </span>
                </div>
              </div>
              
              {/* Image Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show count of filtered images */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing {filteredImages.length} photo{filteredImages.length !== 1 ? 's' : ''} 
            {selectedCategory !== 'all' && (
              <span className="ml-1">
                in {galleryCategories.find(cat => cat.id === selectedCategory)?.title}
              </span>
            )}
          </p>
        </div>





        {/* Conference Theme Highlight */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 mb-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">IATMSI Legacy</h3>
            <p className="text-xl italic mb-4">
              "Capturing Memories of Innovation and Collaboration"
            </p>
            <p className="text-white/90">
              From technical sessions to cultural celebrations, IATMSI brings together the global research community.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Share Your Photos
          </h3>
          <p className="text-gray-600 mb-4">
            Have conference photos? Share them with us.
          </p>
          <a
            href="mailto:iatmsi@iiitm.ac.in"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Share Photos
          </a>
          <p className="text-gray-500 text-xs mt-3">
            iatmsi@iiitm.ac.in | +91-8962280784
          </p>
        </div>
      </div>
    </div>
  );
}

export default Gallery; 