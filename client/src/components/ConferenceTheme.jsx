import React from 'react';

function ConferenceTheme() {
  const tracks = [
    {
      id: 1,
      title: "Track 1: Technology",
      description: "Solutions for Healthcare"
    },
    {
      id: 2,
      title: "Track 2: Power, Control,",
      description: "Energy and Intelligent Transportation Technologies"
    },
    {
      id: 3,
      title: "Track 3: Artificial Intelligence (AI), IOT and",
      description: "Computer Vision Enabled Technologies"
    },
    {
      id: 4,
      title: "Track 4: Green Electronics, VLSI, Communication and",
      description: "Sensor Based Technologies"
    },
    {
      id: 5,
      title: "Track 5: IT enabled",
      description: "Management for Social Change"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Theme Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Conference Theme
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            Enabling the Change! Social Innovation for Sustainable Societies
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {/* Track Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                {track.title}
              </h3>
              
              {/* Track Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {track.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Conference Tracks
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Explore cutting-edge research and innovations across five specialized tracks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConferenceTheme; 