import React from 'react';

function ConferenceStats() {
  const stats = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      mainText: "Conference Record: 68868",
      subText: "IEEE Official Record"
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      mainText: "Scopus Indexed",
      subText: "Academic Excellence"
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      mainText: "Hybrid Event",
      subText: "Online & In-Person"
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
        </svg>
      ),
      mainText: "March 12-14, 2026",
      subText: "Save the Date"
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {/* Icon */}
              <div className="text-blue-600 mb-4">
                {stat.icon}
              </div>
              
              {/* Main Text */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {stat.mainText}
              </h3>
              
              {/* Sub Text */}
              <p className="text-gray-600 text-sm">
                {stat.subText}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              IEEE International Conference
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Interdisciplinary Approaches in Technology and Management for Social Innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConferenceStats; 