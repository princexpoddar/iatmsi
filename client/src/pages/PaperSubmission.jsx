import React from 'react';

function PaperSubmission() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Paper Submission
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Submit your research papers through our EasyChair submission system
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Submission Process
              </h2>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">Create Account</h3>
                    <p className="text-gray-600 text-sm">Register on EasyChair platform</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">Prepare Paper</h3>
                    <p className="text-gray-600 text-sm">Format according to IEEE template</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">Submit Paper</h3>
                    <p className="text-gray-600 text-sm">Upload PDF through EasyChair</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">Track Status</h3>
                    <p className="text-gray-600 text-sm">Monitor review progress</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Paper Format Requirements
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Page Limit</span>
                  <span className="text-orange-500 font-semibold">6 pages maximum</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Format</span>
                  <span className="text-orange-500 font-semibold">IEEE Template</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">File Type</span>
                  <span className="text-orange-500 font-semibold">PDF only</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Language</span>
                  <span className="text-orange-500 font-semibold">English</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Submit Your Paper
              </h2>
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-lg mb-6">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <h3 className="text-xl font-bold mb-2">EasyChair Submission</h3>
                  <p className="text-orange-100">Click below to access the submission portal</p>
                </div>
                <a 
                  href="https://easychair.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Submit Paper →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Important Reminders
              </h2>
              <div className="space-y-3">
                <div className="flex items-start p-3 bg-red-50 rounded-lg">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-red-700 text-sm">Ensure paper is anonymized for review</span>
                </div>
                <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-blue-700 text-sm">Check IEEE template compliance</span>
                </div>
                <div className="flex items-start p-3 bg-green-50 rounded-lg">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-green-700 text-sm">Save submission confirmation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaperSubmission; 