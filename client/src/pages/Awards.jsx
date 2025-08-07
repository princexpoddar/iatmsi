import React from 'react';

function Awards() {
  const awardCategories = [
    {
      title: "Best Paper Awards",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
        </svg>
      ),
      description: "IATMSI recognizes the excellence in research through prestigious awards from each Track on the last day of the conference.",
      items: [
        "IATMSI-2026 Best Paper Awards: All accepted papers will be considered for this award. Awards will be announced on the last day of the conference.",
        "IATMSI-2026 Best Poster Award: All accepted papers for poster presentation will be considered for this award."
      ]
    },
    {
      title: "Best Research Simulation Award",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 18.69V7.31A2 2 0 0 0 18.69 6H5.31A2 2 0 0 0 4 7.31v11.38A2 2 0 0 0 5.31 20h13.38A2 2 0 0 0 20 18.69zM12 2l3.09 6.26L22 9l-6.91.74L12 16l-3.09-6.26L2 9l6.91-.74L12 2z"/>
        </svg>
      ),
      description: "In collaboration with ScholarsColab.com, researchers can upload their work to the platform for enhanced collaboration opportunities.",
      items: [
        "Upload research codes/simulations to ScholarsColab.com",
        "Open collaboration opportunities for Scholars and Research Mentors",
        "Repository of research codes and simulations"
      ]
    },
    {
      title: "Best PhD Thesis Award",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      description: "Exclusive platform for PhD students who have submitted their thesis within the past year or are nearing completion.",
      items: [
        "Present cutting-edge research at the PhD Forum",
        "Gain valuable feedback from leading researchers",
        "Establish meaningful connections with industry professionals"
      ]
    },
    {
      title: "Best Prototype Award",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      description: "Recognition for innovative prototypes and practical implementations that demonstrate real-world applications of research findings."
    },
    {
      title: "Fellowships",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-7-7 7-7"/>
        </svg>
      ),
      description: "Additional funding and support opportunities for outstanding researchers and students."
    }
  ];

  const criteria = [
    { title: "Novelty", description: "Originality and innovation in research approach" },
    { title: "Presentation Type", description: "Extra credit for offline presentations" },
    { title: "Theory Advancement", description: "Contribution to theoretical frameworks" },
    { title: "Result Quality", description: "Robustness and significance of findings" },
    { title: "Manuscript Quality", description: "Clarity and academic writing standards" },
    { title: "Industrial Relevance", description: "Practical applications and real-world impact" },
    { title: "Presentation Quality", description: "Effective oral/poster delivery" },
    { title: "Paper Formatting", description: "Adherence to submission guidelines" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Awards & Grants
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The following prestigious Awards and Grants are announced for the IATMSI-2026 conference.
          </p>
        </div>

        {/* Awards Overview Cards - Improved Grid Structure */}
        <div className="mb-12">
          {/* First Row - 2 Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {awardCategories.slice(0, 2).map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 h-full"
              >
                {/* Award Icon and Title */}
                <div className="flex items-center mb-6">
                  <div className="text-blue-600 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                
                {/* Award Description */}
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {category.description}
                </p>

                {/* Award Items */}
                {category.items && (
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <p className="text-gray-600 text-base leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Second Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awardCategories.slice(2, 5).map((category, index) => (
              <div
                key={index + 2}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 h-full"
              >
                {/* Award Icon and Title */}
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                
                {/* Award Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Award Items */}
                {category.items && (
                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-2">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Selection Criteria Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Selection Criteria
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The Technical Program Committee (TPC) evaluates submissions based on comprehensive criteria to ensure the highest standards of excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {criteria.map((criterion, index) => (
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
                      {criterion.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {criterion.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conference Theme Highlight */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 mb-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Awards Theme 2026</h3>
            <p className="text-xl italic">
              "Enabling the Change! Social Innovation for Sustainable Societies"
            </p>
            <p className="text-white/90 mt-4">
              Our awards recognize research that drives positive social impact and sustainable development.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              For detailed information about awards, submission guidelines, and eligibility criteria, please contact our awards committee.
            </p>
            <a
              href="mailto:iatmsi@iiitm.ac.in"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Contact Awards Committee
            </a>
            <p className="text-gray-500 text-sm mt-4">
              iatmsi@iiitm.ac.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards; 