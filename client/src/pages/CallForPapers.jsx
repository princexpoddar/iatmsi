import React from 'react';

function CallForPapers() {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Call for Papers
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Submit your research papers for IATMSI-2026 and contribute to the advancement of technology and management for social innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Paper Submission Guidelines
              </h2>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-white/10 rounded-lg">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Paper Format</h3>
                    <p className="text-white/90 text-sm">IEEE format, maximum 6 pages including references</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white/10 rounded-lg">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Language</h3>
                    <p className="text-white/90 text-sm">English only</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white/10 rounded-lg">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Submission System</h3>
                    <p className="text-white/90 text-sm">Electronic submission through EasyChair</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white/10 rounded-lg">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Review Process</h3>
                    <p className="text-white/90 text-sm">Double-blind peer review</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Important Dates
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-white/90">Paper Submission Deadline</span>
                  <span className="text-orange-400 font-semibold">December 15, 2025</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-white/90">Notification of Acceptance</span>
                  <span className="text-orange-400 font-semibold">January 15, 2026</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-white/90">Camera Ready Submission</span>
                  <span className="text-orange-400 font-semibold">February 15, 2026</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-white/90">Conference Dates</span>
                  <span className="text-orange-400 font-semibold">March 12-14, 2026</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">
                Conference Tracks
              </h2>
              <div className="space-y-4">
                {tracks.map((track) => (
                  <div key={track.id} className="p-4 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {track.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {track.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Publication
              </h2>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white/10 rounded-lg">
                  <svg className="w-6 h-6 text-orange-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-white/90">Scopus Indexed Proceedings</span>
                </div>
                <div className="flex items-center p-3 bg-white/10 rounded-lg">
                  <svg className="w-6 h-6 text-orange-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-white/90">IEEE Xplore Digital Library</span>
                </div>
                <div className="flex items-center p-3 bg-white/10 rounded-lg">
                  <svg className="w-6 h-6 text-orange-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-white/90">DOI Assignment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallForPapers; 