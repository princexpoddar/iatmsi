import React from 'react';

function SubNavbar() {
  return (
    <nav className="bg-gray-800 border-t border-b border-gray-700 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Single Row */}
        <div className="flex justify-center space-x-4 py-3 text-xs font-medium">
          <a href="#" className="text-white hover:text-red-200 px-2 py-2 flex items-center">
            ABOUT
            <svg className="w-2 h-2 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-red-200 px-2 py-2 flex items-center">
            FOR AUTHORS
            <svg className="w-2 h-2 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-red-200 px-2 py-2">
            CALL FOR PAPERS
          </a>
          <a href="#" className="text-white hover:text-red-200 px-2 py-2">
            PAPER SUBMISSION
          </a>
          <a href="#" className="text-white hover:text-red-200 px-2 py-2">
            SPONSORSHIP/EXHIBITS
          </a>
          <a href="#" className="text-white hover:text-red-200 px-2 py-2">
            IMPORTANT DATES
          </a>
          <a href="#" className="text-white hover:text-red-200 px-2 py-2">
            CALL FOR REVIEWERS
          </a>
          <a href="#" className="text-white hover:text-red-200 px-2 py-2">
            KEYNOTE TALKS/TUTORIALS
          </a>
          <a href="#" className="text-white hover:text-red-200 px-2 py-2">
            AWARDS/GRANTS
          </a>
          <a href="#" className="text-white hover:text-red-200 px-2 py-2 flex items-center">
            HELP
            <svg className="w-2 h-2 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default SubNavbar; 