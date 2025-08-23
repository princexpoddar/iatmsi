import React from 'react';

function Awards() {
  const awards = [
    "Best Paper Awards",
    "Best Prototype Award", 
    "Best PhD Thesis Award",
    "Best Research Simulation Award",
    "Fellowships"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Awards & Recognition
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {/* Award Icon */}
              <div className="text-purple-600 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              
              {/* Award Title */}
              <h3 className="text-lg font-bold text-gray-900 text-center leading-tight">
                {award}
              </h3>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Recognition & Excellence
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Celebrate outstanding contributions and innovative research across all conference tracks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards; 