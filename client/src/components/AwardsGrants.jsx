import React from 'react';

function AwardsGrants() {
  const awards = [
    {
      id: 1,
      title: "Best Paper Awards",
      description: "IATMSI recognizes the excellence in research through prestigious awards from each Track on the last day of the conference.",
      details: [
        "IATMSI-2026 Best Paper Awards: All accepted papers will be considered for this award. Awards will be announced on the last day of the conference.",
        "IATMSI-2026 Best Poster Award: All accepted papers for poster presentation will be considered for this award."
      ],
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Best Prototype Award",
      description: "Recognition for innovative prototype development and implementation.",
      details: [
        "Awarded for outstanding prototype development and demonstration",
        "Focus on practical implementation and real-world applications"
      ],
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Best PhD Thesis Award",
      description: "IATMSI 2026 invites submissions to the PhD Forum to be presented at the conference in Gwalior.",
      details: [
        "Exclusive platform for PhD students who have submitted their thesis within the past year (after 1st March 2025) or are nearing completion",
        "Present your cutting-edge research, gain valuable feedback, and establish meaningful connections with leading researchers and industry professionals"
      ],
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      ),
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Best Research Simulation Award",
      description: "In Collaboration with ScholarsColab.com",
      details: [
        "We invite researchers who share papers in the conference to upload their research work on the platform of scholarscolab.com",
        "This platform opens up collaboration opportunities for Scholars and Research Mentors",
        "Repository of research codes/simulations for enhanced academic collaboration"
      ],
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      color: "from-orange-500 to-orange-600"
    }
  ];

  const evaluationCriteria = [
    "Novelty",
    "Type of Presentation (Online/Offline). Extra credit will be awarded to participants opting for an offline presentation.",
    "Advancement of the theory and application",
    "Quality of the presented results",
    "Quality of the written manuscript",
    "Practicality and industrial relevance of the presented work",
    "Quality of the oral/poster presentation",
    "Formatting of the Paper"
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Awards & Grants
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The following Awards and Grants are announced for the IATMSI-2026
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {awards.map((award) => (
            <div key={award.id} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-200/50 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="text-gray-500 mr-4">
                  {award.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {award.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                {award.details.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fellowships Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-200/50 mb-12">
          <div className="flex items-center mb-4">
            <svg className="w-8 h-8 text-gray-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-7-7 7-7"/>
            </svg>
            <h3 className="text-xl font-bold text-gray-800">
              Fellowships
            </h3>
          </div>
          <p className="text-gray-600 text-lg">
            Will be updated soon
          </p>
        </div>

        {/* Evaluation Criteria */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-200/50 mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Evaluation Criteria
          </h3>
          <p className="text-gray-600 mb-6">
            The TPC will select the above awards by judging the submission based on the following criteria:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {evaluationCriteria.map((criterion, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-50/50 rounded-lg border border-gray-200/30">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {criterion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl p-8 text-white/90">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              For More Information
            </h3>
            <p className="text-gray-200 mb-6">
              Contact the conference organizers for detailed information about awards and grants
            </p>
            <a 
              href="mailto:iatmsi@iiitm.ac.in"
              className="inline-flex items-center bg-white/90 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              iatmsi@iiitm.ac.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwardsGrants; 