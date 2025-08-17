import React from 'react';

function ImportantDates() {
  const importantDates = [
    {
      event: "Call for Papers",
      date: "10th July 2025",
      category: "submission"
    },
    {
      event: "1st Round of Full Paper Submission Due Date",
      date: "September 20, 2025",
      category: "submission"
    },
    {
      event: "1st Review Round Notification (Accept, Revise, Reject)",
      date: "October 20, 2025",
      category: "review"
    },
    {
      event: "2nd Round of Full Paper Submission Due Date",
      date: "20th November 2025",
      category: "submission"
    },
    {
      event: "2nd Review Round Notification Deadline (Accept or Reject)",
      date: "30th Nov. 2025",
      category: "review"
    },
    {
      event: "Camera-ready Paper Due",
      date: "31st Dec. 2025",
      category: "final"
    },
    {
      event: "Registration Open",
      date: "15th Oct. 2025",
      category: "registration"
    },
    {
      event: "Early-Bird Registration Closes",
      date: "31st Dec. 2025",
      category: "registration"
    },
    {
      event: "Last Date of Registration",
      date: "1st Feb. 2026",
      category: "registration"
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'submission':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'review':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'final':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'registration':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Important Dates & Deadlines
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mark your calendar with these key dates for IATMSI-2026 conference participation
          </p>
        </div>

        {/* Modern Table-like Structure */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4">
            <div className="grid grid-cols-12 gap-4 text-white font-semibold">
              <div className="col-span-1 text-center">
                <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="col-span-8">Event / Activity</div>
              <div className="col-span-3 text-center">Deadline</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {importantDates.map((item, index) => (
              <div 
                key={index} 
                className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Category Badge */}
                  <div className="col-span-1 flex justify-center">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(item.category)}`}>
                      {item.category.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Event Description */}
                  <div className="col-span-8">
                    <h3 className="font-medium text-gray-900 leading-tight">
                      {item.event}
                    </h3>
                  </div>
                  
                  {/* Date */}
                  <div className="col-span-3 text-center">
                    <div className="text-purple-600 font-bold text-lg">
                      {item.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Legend */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Submission</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Review</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Final</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Registration</span>
            </div>
          </div>
        </div>

        {/* Quick Summary */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Timeline Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">July - Nov 2025</div>
              <div className="text-gray-700">Paper Submission Periods</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">Oct - Nov 2025</div>
              <div className="text-gray-700">Review Notifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">Oct 2025 - Feb 2026</div>
              <div className="text-gray-700">Registration Period</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/call-for-papers"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Call for Papers
            </a>
            <a 
              href="/register"
              className="inline-block px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportantDates; 