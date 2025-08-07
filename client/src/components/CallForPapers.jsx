import React from 'react';

function CallForPapers() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Call For Papers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Submit your research and contribute to the advancement of technology and social innovation
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Download Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
                <h3 className="text-2xl font-bold text-gray-900">
                  Download Call for Papers
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                Get detailed information about paper submission guidelines, important dates, and conference tracks.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-7-7 7-7"/>
                </svg>
                Download PDF
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Important Dates
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Paper Submission Deadline</span>
                  <span className="text-blue-600 font-bold">January 15, 2026</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Notification of Acceptance</span>
                  <span className="text-blue-600 font-bold">February 15, 2026</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Camera Ready Submission</span>
                  <span className="text-blue-600 font-bold">March 1, 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Conference Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Conference Overview
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                IATMSI-2026 serves as a dynamic platform for researchers, academics, and industry practitioners to foster exchange of ideas and research breakthroughs across diverse domains including healthcare, agriculture, intelligent transportation, VLSI, and renewable electronics.
              </p>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">
                  Theme 2026
                </h4>
                <p className="text-blue-100">
                  "Enabling the Change! Social Innovation for Sustainable Societies"
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Publication Benefits
              </h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Accepted papers will be submitted to IEEE Xplore</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Scopus indexed conference proceedings</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">International recognition and visibility</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Networking with global researchers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-7-7 7-7"/>
              </svg>
              Submit Paper Now
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.3c-.37.5-.58 1.1-.58 1.7V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
              </svg>
              Register for Conference
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallForPapers; 