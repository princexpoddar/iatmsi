import React, { useState } from 'react';

function UserGuide() {
  const [activeTab, setActiveTab] = useState('getting-started');

  const guideSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-7-7 7-7"/>
        </svg>
      ),
      content: [
        {
          title: 'Welcome to IATMSI-2026',
          description: 'The 4th IEEE International Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation',
          items: [
            'Conference Dates: March 6-8, 2026',
            'Venue: ABV-IIITM Gwalior, Madhya Pradesh, India',
            'Theme: "Enabling the Change! Social Innovation for Sustainable Societies"',
            'Format: Hybrid (Physical and Virtual participation available)'
          ]
        },
        {
          title: 'Quick Navigation',
          description: 'Essential pages to help you get started',
          items: [
            'Homepage: Overview and latest updates',
            'Call for Papers: Submission guidelines and important dates',
            'Registration: Conference registration and payment',
            'Important Dates: Key deadlines and milestones',
            'FAQ: Frequently asked questions and answers'
          ]
        }
      ]
    },
    {
      id: 'paper-submission',
      title: 'Paper Submission',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1v5h5v10H6V3h7z"/>
        </svg>
      ),
      content: [
        {
          title: 'Submission Guidelines',
          description: 'Follow these guidelines for successful paper submission',
          items: [
            'Use IEEE template format (available on IEEE website)',
            'Maximum 6 pages (can extend to 8 pages with additional fee)',
            'Submit in PDF format only',
            'File size should not exceed 10 MB',
            'Use Microsoft CMT paper submission portal',
            'Ensure all authors are properly listed'
          ]
        },
        {
          title: 'Track Categories',
          description: 'Choose the most appropriate track for your research',
          items: [
            'Innovative Solutions for Healthcare',
            'Power, Control, Energy, and Intelligent Transportation Technologies',
            'AI, IoT, and Computer Vision Enabled Technologies',
            'Green Electronics, VLSI, Communication, and Sensor-Based Technologies',
            'IT-enabled Management for Social Change'
          ]
        },
        {
          title: 'Review Process',
          description: 'Understanding the peer review process',
          items: [
            'Double-blind peer review process',
            'Reviewers evaluate novelty, technical contribution, and presentation',
            'Acceptance rate typically <20%',
            'Authors receive detailed feedback for improvements',
            'Camera-ready submission after acceptance'
          ]
        }
      ]
    },
    {
      id: 'registration',
      title: 'Registration & Payment',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-7-7 7-7"/>
        </svg>
      ),
      content: [
        {
          title: 'Registration Categories',
          description: 'Choose the appropriate registration category',
          items: [
            'Student: For full-time students with valid ID',
            'Professional: For faculty, researchers, and industry professionals',
            'Student Attendee: For non-author students who want to attend',
            'Professional Attendee: For non-author professionals who want to attend'
          ]
        },
        {
          title: 'Payment Methods',
          description: 'Available payment options',
          items: [
            'Online payment through secure portal',
            'Bank transfer (details available on registration page)',
            'Payment confirmation required for paper publication',
            'Early bird discounts available (check important dates)',
            'Registration grants available for high-quality papers'
          ]
        },
        {
          title: 'What\'s Included',
          description: 'Registration benefits and inclusions',
          items: [
            'Conference proceedings (Scopus indexed)',
            'Lunch coupons for all three days',
            'High tea and refreshments',
            'Cultural event and gala dinner',
            'Conference kit and certificate',
            'Access to all technical sessions'
          ]
        }
      ]
    },
    {
      id: 'conference-participation',
      title: 'Conference Participation',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      content: [
        {
          title: 'Presentation Guidelines',
          description: 'How to prepare and deliver your presentation',
          items: [
            'Oral presentations: 15 minutes + 5 minutes Q&A',
            'Poster presentations: 3-minute pitch + poster display',
            'Upload presentation slides 24 hours before session',
            'Bring backup copy on USB drive',
            'Practice your presentation timing',
            'Prepare for questions from audience'
          ]
        },
        {
          title: 'Virtual Participation',
          description: 'Guidelines for online participants',
          items: [
            'Test your internet connection and equipment',
            'Join virtual sessions 10 minutes early',
            'Use professional background and lighting',
            'Mute microphone when not speaking',
            'Use chat for questions during presentations',
            'Ensure stable internet connection throughout'
          ]
        },
        {
          title: 'Physical Participation',
          description: 'Information for on-site attendees',
          items: [
            'Accommodation available on campus (nominal charges)',
            'Transportation from airport/railway station',
            'Conference venue: ABV-IIITM Gwalior campus',
            'Cultural programs and networking events',
            'Campus tour and facilities access',
            'Local attractions and sightseeing options'
          ]
        }
      ]
    },
    {
      id: 'awards-opportunities',
      title: 'Awards & Opportunities',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
        </svg>
      ),
      content: [
        {
          title: 'Best Paper Awards',
          description: 'Recognition for outstanding research',
          items: [
            'Best Paper Award for each track',
            'Best Poster Award for poster presentations',
            'Best PhD Thesis Award for doctoral students',
            'Best Research Simulation Award (with ScholarsColab.com)',
            'Awards announced on the last day',
            'Registration grants for selected papers'
          ]
        },
        {
          title: 'Networking Opportunities',
          description: 'Maximize your conference experience',
          items: [
            'Meet leading researchers and industry experts',
            'Participate in panel discussions and workshops',
            'Join special interest groups and collaborations',
            'Attend keynote talks by eminent speakers',
            'Network during coffee breaks and social events',
            'Explore potential research collaborations'
          ]
        }
      ]
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 18.69V7.31A2 2 0 0 0 18.69 6H5.31A2 2 0 0 0 4 7.31v11.38A2 2 0 0 0 5.31 20h13.38A2 2 0 0 0 20 18.69zM12 2l3.09 6.26L22 9l-6.91.74L12 16l-3.09-6.26L2 9l6.91-.74L12 2z"/>
        </svg>
      ),
      content: [
        {
          title: 'Getting Help',
          description: 'Where to find assistance when you need it',
          items: [
            'Email: iatmsi@iiitm.ac.in for general queries',
            'Phone: +91 8962280784, +91 9202731889',
            'FAQ page for common questions',
            'Contact Support page for technical issues',
            'On-site help desk during conference',
            'Virtual support for online participants'
          ]
        },
        {
          title: 'Common Issues & Solutions',
          description: 'Quick fixes for common problems',
          items: [
            'Submission portal issues: Clear browser cache and try again',
            'Payment problems: Contact registration team immediately',
            'Presentation upload issues: Use supported file formats',
            'Virtual session problems: Check internet connection',
            'Certificate queries: Contact after conference',
            'Accommodation issues: Contact local organizing committee'
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            User Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about participating in IATMSI-2026 conference.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-2">
            {guideSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === section.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-sm">{section.icon}</span>
                <span>{section.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {guideSections.map((section) => (
            <div key={section.id} className={activeTab === section.id ? 'block' : 'hidden'}>
              <div className="flex items-center mb-8">
                <div className="text-blue-600 mr-3">
                  {section.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-8">
                {section.content.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.items.map((listItem, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span className="text-gray-700 leading-relaxed">
                            {listItem}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="/call-for-papers"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-2">Call for Papers</h3>
              <p className="text-white/90 text-sm">Submission guidelines and important dates</p>
            </a>
            <a
              href="/important-dates"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-2">Important Dates</h3>
              <p className="text-white/90 text-sm">Key deadlines and milestones</p>
            </a>
            <a
              href="/faq"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-2">FAQ</h3>
              <p className="text-white/90 text-sm">Frequently asked questions</p>
            </a>
            <a
              href="/contact-support"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-2">Contact Support</h3>
              <p className="text-white/90 text-sm">Get help when you need it</p>
            </a>
            <a
              href="/awards"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-6 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-2">Awards</h3>
              <p className="text-white/90 text-sm">Recognition opportunities</p>
            </a>
            <a
              href="/venue-travel"
              className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-6 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-2">Venue & Travel</h3>
              <p className="text-white/90 text-sm">Campus information and travel details</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserGuide; 