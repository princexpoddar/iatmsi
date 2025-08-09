import React from 'react';

function CameraReadyInstructions() {
  const submissionSteps = [
    {
      title: "IEEE Format Requirements",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      ),
      description: "Papers must follow IEEE conference template with maximum 6 pages including references.",
      items: [
        "Use official IEEE conference template",
        "Maximum 6 pages including references",
        "High-quality figures and tables required",
        "Include proper IEEE copyright notice"
      ]
    },
    {
      title: "PDF Validation & Submission",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      description: "Use IEEE PDF eXpress for validation and submit through the conference portal.",
      items: [
        "Validate PDF using IEEE PDF eXpress",
        "Submit through conference system",
        "Complete copyright transfer agreement",
        "Ensure final registration payment"
      ]
    }
  ];

  const publicationInfo = [
    { title: "IEEE Xplore", description: "All papers submitted for inclusion" },
    { title: "Scopus Indexed", description: "Conference Record: 68868" },
    { title: "Quality Standards", description: "Meets IEEE scope requirements" },
    { title: "Global Visibility", description: "World's leading A&I databases" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Camera Ready Instructions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Final paper submission guidelines for IEEE Xplore publication and SCOPUS indexing.
          </p>
        </div>

        {/* Submission Process Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {submissionSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 h-full"
            >
              {/* Step Icon and Title */}
              <div className="flex items-center mb-6">
                <div className="text-blue-600 mr-4">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>
              </div>
              
              {/* Step Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {step.description}
              </p>

              {/* Step Items */}
              <div className="space-y-3">
                {step.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Publication Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              IEEE Xplore Publication
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All accepted and presented papers will be submitted for possible inclusion into IEEE Xplore.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {publicationInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 font-semibold mb-1 text-sm">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Deadlines */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 mb-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Important Deadlines</h3>
            <p className="text-xl italic mb-4">
              Camera Ready Submission: To be announced
            </p>
            <p className="text-white/90">
              Copyright transfer and final registration deadlines will be communicated to accepted authors.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Need Help?
          </h3>
          <p className="text-gray-600 mb-4">
            For camera ready submission support, contact us.
          </p>
          <a
            href="mailto:iatmsi@iiitm.ac.in"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Contact Support
          </a>
          <p className="text-gray-500 text-xs mt-3">
            iatmsi@iiitm.ac.in | +91-8962280784
          </p>
        </div>
      </div>
    </div>
  );
}

export default CameraReadyInstructions; 