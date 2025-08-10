import React from 'react';

function PosterPresenterGuidelines() {
  const posterGuidelines = [
    {
      title: "Poster Specifications",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      description: "Size and format requirements for poster presentations at IATMSI-2026.",
      items: [
        "A1 (841mm x 594mm) or A0 (841mm x 1189mm)",
        "Portrait or Landscape orientation",
        "PDF or high-resolution image format",
        "Minimum 300 DPI for printing"
      ]
    },
    {
      title: "Design Guidelines",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9l-6.91.74L12 16l-3.09-6.26L2 9l6.91-.74L12 2z"/>
        </svg>
      ),
      description: "Essential design principles for creating effective and engaging posters.",
      items: [
        "Clear, readable fonts (minimum 24pt)",
        "High contrast colors for visibility",
        "Include figures and visual elements",
        "Keep text concise with bullet points"
      ]
    }
  ];

  const posterStructure = [
    { title: "Title & Authors", description: "Clear title, names & affiliations" },
    { title: "Introduction", description: "Problem statement & objectives" },
    { title: "Methodology", description: "Approach & experimental setup" },
    { title: "Results", description: "Key findings & analysis" },
    { title: "Conclusion", description: "Summary & future work" }
  ];

  const sessionInfo = [
    { title: "Duration", description: "2-hour poster session" },
    { title: "Attendance", description: "Present at your poster" },
    { title: "Summary", description: "Prepare 2-3 minute overview" },
    { title: "Engagement", description: "Answer questions from attendees" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Poster Presenter Guidelines
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guidelines for creating and presenting effective poster presentations.
          </p>
        </div>

        {/* Poster Guidelines Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {posterGuidelines.map((guideline, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 h-full"
            >
              {/* Guideline Icon and Title */}
              <div className="flex items-center mb-6">
                <div className="text-blue-600 mr-4">
                  {guideline.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {guideline.title}
                </h3>
              </div>
              
              {/* Guideline Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {guideline.description}
              </p>

              {/* Guideline Items */}
              <div className="space-y-3">
                {guideline.items.map((item, itemIndex) => (
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

        {/* Poster Structure */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Poster Content Structure
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recommended structure for organizing your poster content effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {posterStructure.map((section, index) => (
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
                      {section.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Session Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sessionInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 h-full"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {info.title}
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {info.description}
              </p>
            </div>
          ))}
        </div>

        {/* Conference Theme Highlight */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 mb-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Poster Theme 2026</h3>
            <p className="text-xl italic mb-4">
              "Enabling the Change! Social Innovation for Sustainable Societies"
            </p>
            <p className="text-white/90">
              Design your poster to reflect the conference theme focusing on social innovation and sustainability.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Need Help?
          </h3>
          <p className="text-gray-600 mb-4">
            For poster presentation support, contact us.
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

export default PosterPresenterGuidelines; 