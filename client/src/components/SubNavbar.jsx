import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function SubNavbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownData = {
    about: [
      { text: "About IATMSI-2026", path: "/about" },
      { text: "IATMSI History", path: "/iatmsi-history" }, 
      { text: "IATMSI Committees", path: "/iatmsi-committees" },
      { text: "Track Chairs", path: "/track-chairs" }
    ],
    forAuthors: [
      { text: "Instructions for Camera Ready", path: "/camera-ready-instructions" },
      { text: "Paper Submission", path: "/paper-submission" },
      { text: "Oral Presenter's Guidelines", path: "/oral-presenter-guidelines" },
      { text: "Poster Presenter's Guidelines", path: "/poster-presenter-guidelines" }, 
      { text: "Conference Program", path: "/conference-program" },
      { text: "Venue/Travel", path: "/venue-travel" },
      { text: "Gallery", path: "/gallery" }
    ],
    help: [
      { text: "FAQ", path: "/faq" },
      { text: "Contact Support", path: "/contact-support" }, 
      { text: "User Guide", path: "/user-guide" }
    ]
  };

  const navLinks = [
    {
      id: 'about',
      text: 'ABOUT',
      hasDropdown: true,
      dropdownItems: dropdownData.about,
      path: '/about'
    },
    {
      id: 'forAuthors',
      text: 'FOR AUTHORS',
      hasDropdown: true,
      dropdownItems: dropdownData.forAuthors
    },
    {
      id: 'callForPapers',
      text: 'CALL FOR PAPERS',
      hasDropdown: false,
      path: '/call-for-papers'
    },
    {
      id: 'paperSubmission',
      text: 'PAPER SUBMISSION',
      hasDropdown: false,
      path: '/paper-submission'
    },
    {
      id: 'sponsorship',
      text: 'SPONSORSHIP/EXHIBITS',
      hasDropdown: false,
      path: '/sponsorship'
    },
    {
      id: 'importantDates',
      text: 'IMPORTANT DATES',
      hasDropdown: false,
      path: '/important-dates'
    },
    {
      id: 'callForReviewers',
      text: 'CALL FOR REVIEWERS',
      hasDropdown: false,
      path: '/call-for-reviewers'
    },
    {
      id: 'keynoteTalks',
      text: 'KEYNOTE TALKS/TUTORIALS',
      hasDropdown: false,
      path: '/keynote-talks'
    },
    {
      id: 'awards',
      text: 'AWARDS/GRANTS',
      hasDropdown: false,
      path: '/awards'
    },
    {
      id: 'help',
      text: 'HELP',
      hasDropdown: true,
      dropdownItems: dropdownData.help
    }
  ];

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const renderNavItem = (link) => {
    if (link.hasDropdown) {
      return (
        <div key={link.id} className="relative">
          <button 
            onClick={() => handleDropdownToggle(link.id)}
            className="text-white hover:text-gray-200 px-2 py-2 flex items-center relative transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 rounded-md"
          >
            <span className="relative z-10">{link.text}</span>
            <svg className={`w-2 h-2 ml-1 transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          {/* Dropdown */}
          {activeDropdown === link.id && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-gray-800 rounded-md shadow-lg z-50 border border-gray-600">
              <div className="py-1">
                {link.dropdownItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <Link 
          key={link.id}
          to={link.path || "#"} 
          className="text-white hover:text-gray-200 px-2 py-2 relative transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 rounded-md"
        >
          {link.text}
        </Link>
      );
    }
  };

  return (
    <nav className="bg-gray-800 border-t border-b border-gray-700 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Single Row */}
        <div className="flex justify-center space-x-4 py-3 text-xs font-medium">
          {navLinks.map(renderNavItem)}
        </div>
      </div>
      
      {/* Close dropdown when clicking outside */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </nav>
  );
}

export default SubNavbar; 