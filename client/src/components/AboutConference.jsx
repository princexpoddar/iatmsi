import React from 'react';

function AboutConference() {
  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-7-7 7-7"/>
        </svg>
      ),
      title: "4th Edition",
      description: "Building on the success of previous editions, particularly IATMSI-2025"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Scopus Indexed",
      description: "Globally recognized academic event with international standards"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      title: "Hybrid Format",
      description: "Both physical and virtual participation available"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.3c-.37.5-.58 1.1-.58 1.7V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
        </svg>
      ),
      title: "37 Countries",
      description: "International participation from leading nations worldwide"
    }
  ];

  const tracks = [
    "Innovative Solutions for Healthcare",
    "Power, Control, Energy, and Intelligent Transportation Technologies",
    "AI, IoT, and Computer Vision Enabled Technologies",
    "Green Electronics, VLSI, Communication, and Sensor-Based Technologies",
    "IT-enabled Management for Social Change"
  ];

  const stats = [
    { number: "2800+", label: "Paper Submissions" },
    { number: "37", label: "Countries" },
    { number: "<20%", label: "Acceptance Rate" },
    { number: "400+", label: "Technical Papers" },
    { number: "8", label: "Keynote Speakers" },
    { number: "5", label: "Thematic Tracks" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About the Conference
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The 4th IEEE International Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation
          </p>
        </div>

        {/* Conference Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Conference Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Conference Overview
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                IATMSI-2026 is a globally recognized Scopus indexed event organized by the Department of Electrical and Electronics Engineering at ABV-IIITM Gwalior, India, in association with the IEEE Madhya Pradesh Section.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Serving as a prestigious platform, this flagship conference aims to disseminate cutting-edge advancements across diverse disciplines, including communication, IT-enabled management, industrial electronics, healthcare, energy systems, VLSI design, smart transportation, biomedical sciences, agriculture, AI, robotics, defense technologies, and related domains.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Theme 2026
              </h3>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">
                  "Enabling the Change! Social Innovation for Sustainable Societies"
                </h4>
                <p className="text-blue-100">
                  Continuing the legacy of innovation and collaboration
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Statistics */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                IATMSI-2025 Success Metrics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Thematic Tracks
              </h3>
              <div className="space-y-3">
                {tracks.map((track, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{track}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Location and Format */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-green-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <h3 className="text-xl font-bold text-gray-900">Location</h3>
            </div>
            <p className="text-gray-700">
              <strong>Gwalior, India</strong> - A vibrant city known for its rich cultural heritage and historical significance. Hosted at ABV-IIITM Gwalior.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <h3 className="text-xl font-bold text-gray-900">Conference Format</h3>
            </div>
            <p className="text-gray-700">
              <strong>Hybrid Mode</strong> - Offering a rich blend of in-person interactions and virtual accessibility. Features research paper presentations, poster sessions, industry exhibits, tutorials, and plenary talks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutConference; 