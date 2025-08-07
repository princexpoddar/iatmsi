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
    <section className="py-12 bg-gradient-to-br from-purple-900 to-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Awards
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              {/* Award Icon */}
              <div className="text-white mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              
              {/* Award Title */}
              <h3 className="text-lg font-bold text-white text-center leading-tight">
                {award}
              </h3>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Recognition & Excellence
            </h3>
            <p className="text-white/90 text-lg leading-relaxed">
              Celebrate outstanding contributions and innovative research across all conference tracks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards; 