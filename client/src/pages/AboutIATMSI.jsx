import React from 'react';

function AboutIATMSI() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About IATMSI-2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The 4th IEEE International Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Conference Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                IATMSI-2026 is a globally recognized Scopus indexed event organized by the Department of Electrical and Electronics Engineering at ABV-IIITM Gwalior, India, in association with the IEEE Madhya Pradesh Section.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Serving as a prestigious platform, this flagship conference aims to disseminate cutting-edge advancements across diverse disciplines, including communication, IT-enabled management, industrial electronics, healthcare, energy systems, VLSI design, smart transportation, biomedical sciences, agriculture, AI, robotics, defense technologies, and related domains.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Theme 2026
              </h2>
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">
                  "Enabling the Change! Social Innovation for Sustainable Societies"
                </h3>
                <p className="text-orange-100">
                  Continuing the legacy of innovation and collaboration
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Conference Highlights
              </h2>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Scopus Indexed Publication</span>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Hybrid Conference Format</span>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">International Participation</span>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Industry-Academia Collaboration</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Location & Venue
              </h2>
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-green-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <h3 className="text-xl font-bold text-gray-900">Gwalior, India</h3>
              </div>
              <p className="text-gray-700">
                A vibrant city known for its rich cultural heritage and historical significance. Hosted at ABV-IIITM Gwalior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutIATMSI; 