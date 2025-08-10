import React from 'react';

function OralPresenterGuidelines() {
  const presentationGuidelines = [
    {
      title: "Presentation Format",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/>
          <path d="M7 2v20l4-4 4 4V2"/>
        </svg>
      ),
      description: "Each presentation is allocated 15 minutes with 5 minutes for Q&A session.",
      items: [
        "15 minutes presentation time",
        "5 minutes Q&A session",
        "PowerPoint or PDF format",
        "16:9 aspect ratio required"
      ]
    },
    {
      title: "Technical Requirements",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      description: "Technical specifications and submission requirements for presentations.",
      items: [
        "Submit 24 hours before session",
        "Minimum 24pt font size",
        "Include slide numbers",
        "Clear figures and charts"
      ]
    }
  ];

  const presentationStructure = [
    { title: "Introduction", description: "Problem statement & objectives", time: "2-3 min" },
    { title: "Methodology", description: "Approach & implementation", time: "5-6 min" },
    { title: "Results", description: "Analysis & comparisons", time: "5-6 min" },
    { title: "Conclusion", description: "Summary & future work", time: "2-3 min" }
  ];

  const presentationTips = [
    { title: "Preparation", description: "Practice multiple times before presentation" },
    { title: "Delivery", description: "Speak clearly at moderate pace" },
    { title: "Engagement", description: "Maintain eye contact with audience" },
    { title: "Questions", description: "Be prepared for Q&A session" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Oral Presenter Guidelines
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential guidelines for delivering effective oral presentations at IATMSI-2026.
          </p>
        </div>

        {/* Presentation Guidelines Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {presentationGuidelines.map((guideline, index) => (
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

        {/* Presentation Structure */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Presentation Structure
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recommended structure for organizing your 15-minute presentation effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {presentationStructure.map((section, index) => (
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
                    <p className="text-gray-600 text-xs leading-relaxed mb-1">
                      {section.description}
                    </p>
                    <span className="text-xs text-blue-600 font-semibold">
                      {section.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Presentation Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {presentationTips.map((tip, index) => (
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
                  {tip.title}
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>

        {/* Conference Theme Highlight */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 mb-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Presentation Theme 2026</h3>
            <p className="text-xl italic mb-4">
              "Enabling the Change! Social Innovation for Sustainable Societies"
            </p>
            <p className="text-white/90">
              Align your presentation with the conference theme focusing on social innovation and sustainability.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Need Help?
          </h3>
          <p className="text-gray-600 mb-4">
            For presentation support, contact us.
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

export default OralPresenterGuidelines; 