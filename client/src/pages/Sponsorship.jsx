import React from 'react';

function Sponsorship() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Sponsorship and Exhibit
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us as a sponsor or partner for IATMSI-2026 and showcase your organization to leading researchers and industry professionals.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          {/* Be a Sponsor Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">
              Be a Sponsor or Partner
            </h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-6">
              <p className="text-gray-800">
                <strong>IATMSI-2026 Sponsorship Brochure</strong> – 
                <a 
                  href="https://iatmsi.iiitm.ac.in/wp-content/uploads/2025/07/Spons-Brochure_IATMSI-2026.pdf" 
                  target="_blank" 
                  rel="noreferrer noopener"
                  className="text-purple-600 hover:text-purple-800 font-semibold ml-2 underline"
                >
                  Download
                </a>
              </p>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Any queries or discussion related to sponsorship or Partnership can be addressed to: </strong>
              <a href="mailto:iatmsi@iiitm.ac.in" className="text-purple-600 hover:text-purple-800 underline">
                iatmsi@iiitm.ac.in
              </a>
              <span className="mx-2">or</span>
              <a href="mailto:sponsorship_iatmsi@iiitm.ac.in" className="text-purple-600 hover:text-purple-800 underline">
                iatmsi_sponsorship@iiitm.ac.in
              </a>
            </p>
          </div>

          {/* Committee Chairs Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">
              <span className="bg-yellow-50 px-2 py-1 rounded">Industry Relations and Sponsorship Committee Chairs:</span>
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-3">
                <strong>Dr. Rakesh Chowdhury (Chair)</strong>, <em>ABV-IIITM Gwalior, India</em>
              </p>
              <p className="text-gray-700">
                <a href="mailto:bjana@iiitm.ac.in" className="text-purple-600 hover:text-purple-800 underline">
                  Ph.: 9576490959
                </a>
              </p>
            </div>
          </div>

          {/* Conference Chair Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">
              <span className="bg-yellow-50 px-2 py-1 rounded">Conference Chair:</span>
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-3">
                <strong>Dr. Somesh Kumar</strong>, <em>ABV-IIITM Gwalior, India</em>
              </p>
              <p className="text-gray-700">
                <strong>Ph. No.: +91-8962280784</strong>
              </p>
            </div>
          </div>

          {/* Sponsorship Flyer Section */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">
              Sponsorship Flyer
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="mb-4">
                <object 
                  data="https://iatmsi.iiitm.ac.in/wp-content/uploads/2025/07/IATMSI-2026-Sponsorship-Flyer_compressed.pdf" 
                  type="application/pdf" 
                  className="w-full h-96 rounded-lg border border-gray-300"
                  aria-label="Embed of IATMSI 2026 Sponsorship Flyer_compressed."
                >
                  <p className="text-gray-600 text-center py-8">
                    PDF viewer not supported. Please download the file to view.
                  </p>
                </object>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://iatmsi.iiitm.ac.in/wp-content/uploads/2025/07/IATMSI-2026-Sponsorship-Flyer_compressed.pdf" 
                  target="_blank" 
                  rel="noreferrer noopener"
                  className="text-purple-600 hover:text-purple-800 underline text-center sm:text-left"
                >
                  IATMSI 2026 Sponsorship Flyer_compressed
                </a>
                <a 
                  href="https://iatmsi.iiitm.ac.in/wp-content/uploads/2025/07/IATMSI-2026-Sponsorship-Flyer_compressed.pdf" 
                  download
                  className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  Download Flyer
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Need More Information?</h4>
            <p className="text-gray-700 mb-4">
              For detailed sponsorship packages, exhibition opportunities, and partnership discussions, 
              please contact our sponsorship team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="mailto:iatmsi@iiitm.ac.in"
                className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                Contact General Team
              </a>
              <a 
                href="mailto:sponsorship_iatmsi@iiitm.ac.in"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                Contact Sponsorship Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsorship; 