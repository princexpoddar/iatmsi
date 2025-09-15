import React from 'react';
import { Link } from 'react-router-dom';
import APP_ROUTES from '../../constants/appRoutes.constants.jsx';

function AboutIATMSI() {
  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
        </svg>
      ),
      title: "4th Edition",
      description: "Building on the success of previous editions, particularly IATMSI-2025"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Scopus Indexed",
      description: "Globally recognized academic event with international standards"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      title: "Hybrid Format",
      description: "Both physical and virtual participation available"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.3c-.37.5-.58 1.1-.58 1.7V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
        </svg>
      ),
      title: "37 Countries",
      description: "International participation from leading nations worldwide"
    }
  ];

  const tracks = [
    "Innovative Solutions for Healthcare",
    "Power, Control, Energy, and Intelligent Transportation Technologies",
    "AI, IoT, and Computer Vision Enabled Technologies",
    "Green Electronics, VLSI, Communication, and Sensor-Based Technologies",
    "IT-enabled Management for Social Change"
  ];

  const stats = [
    { number: "2800+", label: "Paper Submissions" },
    { number: "37", label: "Countries" },
    { number: "<20%", label: "Acceptance Rate" },
    { number: "400+", label: "Technical Papers" },
    { number: "8", label: "Keynote Speakers" },
    { number: "5", label: "Thematic Tracks" }
  ];

  const ieeeStats = [
    { number: "426,000+", label: "Global Members" },
    { number: "160+", label: "Countries" },
    { number: "334", label: "Sections" },
    { number: "2,116", label: "Chapters" },
    { number: "2,669", label: "Student Branches" },
    { number: "3.5M+", label: "Documents in Xplore" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About IATMSI-2026
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            The 4th IEEE International Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Conference Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Conference Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A globally recognized Scopus-Indexed event fostering interdisciplinary innovation
            </p>
          </div>

          {/* Conference Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="text-purple-600 mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          {/* Main Description */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              IATMSI-2026 is a globally recognized Scopus-Indexed event to be organized by the Department of Electrical and Electronics Engineering at ABV-IIITM Gwalior, India, in association with the IEEE Madhya Pradesh Section. Serving as a prestigious platform, this flagship conference aims to disseminate cutting-edge advancements across diverse disciplines, including communication, IT-enabled management, industrial electronics, healthcare, energy systems, VLSI design, smart transportation, biomedical sciences, agriculture, AI, robotics, defense technologies, and related domains.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As an annual academic tradition with extensive national and international engagement, IATMSI-2026 will bring together leading researchers, scholars, and industry professionals to foster insightful discussions on emerging technological trends.
            </p>
          </div>
        </section>

        {/* IATMSI-2025 Success */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              IATMSI-2025 Success Story
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Building upon the grand success of previous editions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Success Metrics */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Conference Metrics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Highlights
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-3 h-3 rounded-full mt-2 bg-purple-500 mr-3"></span>
                  <span className="text-gray-700">Over 2800 paper submissions from 37 countries</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-3 h-3 rounded-full mt-2 bg-purple-500 mr-3"></span>
                  <span className="text-gray-700">Eight keynote addresses by eminent speakers from Intel, Amazon, IITs, IGCAR, and international universities</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-3 h-3 rounded-full mt-2 bg-purple-500 mr-3"></span>
                  <span className="text-gray-700">Hybrid format enabling both physical and virtual participation</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-3 h-3 rounded-full mt-2 bg-purple-500 mr-3"></span>
                  <span className="text-gray-700">Cultural evening, technical tutorials, city tour, and awards ceremony</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Thematic Tracks */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Thematic Tracks
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Five specialized tracks covering cutting-edge research areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {tracks.map((track, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {track}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* IATMSI-2026 Theme */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-200">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                IATMSI-2026 Theme
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-purple-600 mb-2">
                  "Enabling the Change! Social Innovation for Sustainable Societies"
                </h3>
                <p className="text-gray-600">
                  Continuing this legacy, IATMSI-2026 will once again be hosted in the vibrant city of Gwalior—known for its rich cultural heritage and historical significance. The conference will continue in hybrid mode, offering a rich blend of in-person interactions and virtual accessibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About IEEE */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              About IEEE
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advancing technology for the benefit of humanity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                IEEE Global Impact
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {ieeeStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                IEEE Mission
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                IEEE (Institute of Electrical and Electronics Engineers) is a prestigious global organization that plays a pivotal role in advancing technological innovation and fostering excellence for the betterment of humanity.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With an extensive range of resources and opportunities, IEEE plays a profound role in shaping the future. Its digital library hosts over 3.5 million documents, and it has over 1,671 standards and projects under development.
              </p>
              <a 
                href="https://www.ieee.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Visit IEEE Website
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* About IEEE MP Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              About IEEE MP Section
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              One of the most vibrant and rapidly growing sections in India
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Section Overview
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The IEEE Madhya Pradesh Section, originally a subsection under the IEEE Bombay Section, attained full Section status in 2021, now covering the Indian states of Madhya Pradesh and Chhattisgarh.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Section boasts over 150 active IEEE Student Branches and more than 25 Technical Society Chapters, spanning prestigious institutions, technical universities, and engineering colleges.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Key Activities
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Workshops, seminars, and expert talks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Faculty development programs and hackathons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">International conference hosting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Technical sponsorships in AI, IoT, VLSI, and more</span>
                  </li>
                </ul>
                <a 
                  href="https://ieeemp.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 mt-6"
                >
                  Visit MP Section
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About ABV-IIITM Gwalior */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              About ABV-IIITM Gwalior
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Institute of National Importance fostering technological excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Institute Overview
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Atal Bihari Vajpayee Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior is an Institute of National Importance, established in 1997 by the Ministry of Education, Government of India.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Strategically located in the historic city of Gwalior, the institute offers a unique academic environment where technological excellence, innovation, and social responsibility intersect.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Campus Features:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 160-acre lush green residential campus</li>
                  <li>• Smart classrooms and modern research laboratories</li>
                  <li>• Advanced computing facilities and incubation center</li>
                  <li>• Dedicated hostels and sports complexes</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Academic Excellence
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Core Departments:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Computer Science and Engineering (CSE)</li>
                    <li>• Electrical and Electronics Engineering (EEE)</li>
                    <li>• Management Studies</li>
                    <li>• Information Technology</li>
                    <li>• Engineering Sciences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Research Domains:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Smart Healthcare Systems</li>
                    <li>• Intelligent Transportation</li>
                    <li>• Green Electronics & Renewable Energy</li>
                    <li>• Cybersecurity & Digital Governance</li>
                  </ul>
                </div>
                <a 
                  href="https://www.iiitm.ac.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Visit Institute Website
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join IATMSI-2026
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Be part of this prestigious conference and contribute to advancing technology for social innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to={APP_ROUTES.PUBLIC.CALL_FOR_PAPERS}
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Submit Your Paper
              </Link>
              <Link 
                to={APP_ROUTES.PUBLIC.REGISTER}
                className="inline-block px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300"
              >
                Register Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutIATMSI; 