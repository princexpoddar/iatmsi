import React from 'react';

function TeaserSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            IATMSI-2026 Teaser
          </h2>
        </div>

        {/* Video Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Teaser Video 1 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              IATMSI-2026 Teaser-1
            </h3>
            <div className="bg-gray-100 rounded-lg p-4 aspect-video flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <p className="text-gray-600 text-sm">Video Player</p>
                <p className="text-gray-500 text-xs mt-2">0:00 / 1:10</p>
              </div>
            </div>
          </div>

          {/* Teaser Video 2 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              IATMSI-2026 Teaser-2
            </h3>
            <div className="bg-gray-100 rounded-lg p-4 aspect-video flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <p className="text-gray-600 text-sm">Video Player</p>
                <p className="text-gray-500 text-xs mt-2">0:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Conference Highlights
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Watch our teaser videos to get a glimpse of what awaits at IATMSI-2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeaserSection; 