import React from 'react';

function ConferenceProgram() {
  const programHighlights = [
    {
      title: "Technical Sessions",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9l-6.91.74L12 16l-3.09-6.26L2 9l6.91-.74L12 2z"/>
        </svg>
      ),
      description: "Multiple technical tracks covering diverse research domains and innovation areas.",
      items: [
        "Healthcare Technology & Social Innovation",
        "Power, Control & Intelligent Transportation",
        "AI, IoT & Computer Vision Technologies",
        "Green Electronics & VLSI Communications"
      ]
    },
    {
      title: "Keynote Speakers & Events",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      description: "Distinguished speakers from leading academic institutions and industry experts.",
      items: [
        "6 Keynote presentations",
        "Panel discussions on social innovation",
        "Interactive poster sessions",
        "Award ceremonies & recognition"
      ]
    }
  ];

  const conferenceStats = [
    { title: "Days", count: "3", description: "Conference Days" },
    { title: "Sessions", count: "12+", description: "Technical Sessions" },
    { title: "Speakers", count: "6", description: "Keynote Speakers" },
    { title: "Posters", count: "2", description: "Poster Sessions" }
  ];

  const conferenceSchedule = [
    {
      day: "Day 1 - March 12, 2026",
      highlights: [
        "Registration & Welcome",
        "Opening Ceremony",
        "Keynote: Social Innovation in Technology",
        "Technical Sessions & Poster Session"
      ]
    },
    {
      day: "Day 2 - March 13, 2026",
      highlights: [
        "Keynote: Sustainable Technology Solutions",
        "Technical Sessions",
        "Panel Discussion: Future of Social Innovation",
        "Interactive Poster Session"
      ]
    },
    {
      day: "Day 3 - March 14, 2026",
      highlights: [
        "Keynote: Emerging Technologies for Social Impact",
        "Technical Sessions",
        "Award Ceremony",
        "Closing Ceremony"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conference Program
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive program schedule for IATMSI-2026 featuring keynotes, technical sessions, and networking.
          </p>
        </div>

        {/* Conference Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {conferenceStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.count}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Program Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {programHighlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 h-full"
            >
              {/* Highlight Icon and Title */}
              <div className="flex items-center mb-6">
                <div className="text-blue-600 mr-4">
                  {highlight.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {highlight.title}
                </h3>
              </div>
              
              {/* Highlight Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {highlight.description}
              </p>

              {/* Highlight Items */}
              <div className="space-y-3">
                {highlight.items.map((item, itemIndex) => (
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

        {/* Conference Schedule Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Schedule Overview
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three-day comprehensive program covering all aspects of social innovation and technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conferenceSchedule.map((schedule, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  {schedule.day}
                </h4>
                <div className="space-y-2">
                  {schedule.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>






        {/* Conference Theme Highlight */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 mb-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Conference Theme 2026</h3>
            <p className="text-xl italic mb-4">
              "Enabling the Change! Social Innovation for Sustainable Societies"
            </p>
            <p className="text-white/90">
              March 12-14, 2026 | Hybrid Event | ABV-IIITM Gwalior, India
            </p>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Important Information
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key details for conference attendees and participants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300">
              <h4 className="text-gray-900 font-semibold mb-2 text-base">
                Timing & Format
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                All times in IST | Hybrid event with in-person and virtual options
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300">
              <h4 className="text-gray-900 font-semibold mb-2 text-base">
                Sessions
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Technical sessions include Q&A | Interactive poster presentations
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300">
              <h4 className="text-gray-900 font-semibold mb-2 text-base">
                Proceedings
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Conference proceedings available online | IEEE Xplore submission
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Program Information
          </h3>
          <p className="text-gray-600 mb-4">
            For detailed schedule and session info, contact us.
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

export default ConferenceProgram; 