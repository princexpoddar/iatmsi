import React from 'react';

function IATMSIHistory() {
  const tracks = [
    "Innovative Solutions for Healthcare",
    "Power, Control, Energy and Intelligent Transportation Technologies",
    "Artificial Intelligence (AI), IOT and Computer Vision Enabled Technologies",
    "Green Electronics, VLSI, Communication and Sensor Based Technologies",
    "Managing Technology for Social Change"
  ];

  const tracks2024 = [
    "Innovative Solutions for Healthcare",
    "Power, Control, Energy and Intelligent Transportation Technologies",
    "Artificial Intelligence (AI), IOT and Computer Vision Enabled Technologies",
    "Green Electronics, VLSI, Communication and Sensor-Based Technologies",
    "IT enabled Management for Social Change"
  ];

  const countries2022 = [
    "China", "Bangladesh", "Ethiopia", "Hong Kong", "Indonesia", "India", "Nepal", 
    "Philippines", "Portugal", "South Africa", "Turkey", "United Arab Emirates", 
    "United Kingdom", "United States"
  ];

  const countries2024 = [
    "Bahrain", "Bangladesh", "Canada", "Colombia", "France", "Germany", "Iceland", 
    "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia", "Nepal", "Nigeria", 
    "Oman", "Pakistan", "Philippines", "Romania", "Russia", "Saudi Arabia", 
    "Singapore", "Slovakia", "South Africa", "South Korea", "Spain", "Sri Lanka", 
    "Sweden", "Taiwan", "Tunisia", "United Arab Emirates", "United Kingdom", "United States"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            IATMSI Conference History
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            A journey of excellence through the years of interdisciplinary innovation
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Publication Status */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Publication Status
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All papers have been published in IEEE Xplore Digital Library and indexed by Scopus, Google Scholar, etc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">IATMSI-2022</h3>
                <p className="text-gray-600 mb-4">Published in IEEE Xplore</p>
                <a 
                  href="https://ieeexplore.ieee.org/xpl/conhome/10117603/proceeding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
                >
                  View Proceedings
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">IATMSI-2024</h3>
                <p className="text-gray-600 mb-4">Published in IEEE Xplore</p>
                <a 
                  href="https://ieeexplore.ieee.org/xpl/conhome/10502389/proceeding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
                >
                  View Proceedings
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">IATMSI-2025</h3>
                <p className="text-gray-600 mb-4">Processing for Publication</p>
                <span className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* IATMSI-2022 */}
        <section className="mb-16">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                IATMSI-2022
              </h2>
              <p className="text-lg text-gray-600">
                The first edition of the IEEE International Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation
              </p>
              <div className="mt-4">
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  December 21-23, 2022
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Conference Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-3 h-3 rounded-full mt-2 bg-purple-500 mr-3"></span>
                    <span className="text-gray-700">480 papers received from 14 countries</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-3 h-3 rounded-full mt-2 bg-purple-500 mr-3"></span>
                    <span className="text-gray-700">195 best quality papers selected after strict multi-review process</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-3 h-3 rounded-full mt-2 bg-purple-500 mr-3"></span>
                    <span className="text-gray-700">8 Keynote talks from eminent speakers across the globe</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-3 h-3 rounded-full mt-2 bg-purple-500 mr-3"></span>
                    <span className="text-gray-700">Three best paper awards from each Track</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Participating Countries</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex flex-wrap gap-2">
                    {countries2022.map((country, index) => (
                      <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Conference Tracks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {tracks.map((track, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2">
                      {index + 1}
                    </div>
                    <p className="text-sm text-gray-700 font-medium">{track}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* IATMSI-2024 */}
        <section className="mb-16">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                IATMSI-2024
              </h2>
              <p className="text-lg text-gray-600">
                The 2nd IEEE International Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation
              </p>
              <div className="mt-4">
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Hosted in Gwalior, India
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Conference Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-3 h-3 rounded-full mt-2 bg-purple-500 mr-3"></span>
                    <span className="text-gray-700">1250 papers received from 33 countries</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-3 h-3 rounded-full mt-2 bg-purple-500 mr-3"></span>
                    <span className="text-gray-700">10 Keynote talks from eminent speakers across the globe</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-3 h-3 rounded-full mt-2 bg-purple-500 mr-3"></span>
                    <span className="text-gray-700">Comprehensive interdisciplinary exploration of technology and management</span>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-3 h-3 rounded-full mt-2 bg-purple-500 mr-3"></span>
                    <span className="text-gray-700">Hosted in the picturesque city of Gwalior</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Participating Countries</h3>
                <div className="bg-gray-50 rounded-lg p-4 max-h-48 overflow-y-auto">
                  <div className="flex flex-wrap gap-2">
                    {countries2024.map((country, index) => (
                      <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Conference Tracks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {tracks2024.map((track, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2">
                      {index + 1}
                    </div>
                    <p className="text-sm text-gray-700 font-medium">{track}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* IATMSI-2025 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-200">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                IATMSI-2025
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Building upon the grand success of previous editions, IATMSI-2025 continues the legacy of excellence
              </p>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Conference Theme</h3>
                <p className="text-lg text-purple-600 font-semibold mb-4">
                  "Enabling the Change! Social Innovation for Sustainable Societies"
                </p>
                <p className="text-gray-700">
                  The conference featured eight keynote addresses by eminent speakers from Intel, Amazon, IITs, IGCAR, and international universities such as Tennessee Tech (USA), Tallinn University (Estonia), and BINUS (Indonesia), addressing topics like AI ethics, sustainable innovation, Industry 4.0, power electronics, and responsible AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join the Legacy
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Be part of the next chapter in IATMSI's journey of technological innovation and social impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/call-for-papers"
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Submit Your Paper
              </a>
              <a 
                href="/register"
                className="inline-block px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300"
              >
                Register Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default IATMSIHistory; 