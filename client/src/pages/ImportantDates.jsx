import React from 'react';

function ImportantDates() {
  const dates = [
    {
      id: 1,
      event: "Paper Submission Deadline",
      date: "December 15, 2025",
      status: "upcoming",
      description: "Last date for submitting research papers"
    },
    {
      id: 2,
      event: "Notification of Acceptance",
      date: "January 15, 2026",
      status: "upcoming",
      description: "Authors will be notified of paper acceptance"
    },
    {
      id: 3,
      event: "Camera Ready Submission",
      date: "February 15, 2026",
      status: "upcoming",
      description: "Final paper submission with corrections"
    },
    {
      id: 4,
      event: "Early Bird Registration",
      date: "January 31, 2026",
      status: "upcoming",
      description: "Discounted registration rates available"
    },
    {
      id: 5,
      event: "Conference Dates",
      date: "March 12-14, 2026",
      status: "upcoming",
      description: "Main conference event"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Important Dates
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Key deadlines and important dates for IATMSI-2026
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {dates.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.event}
                </h3>
                <p className="text-orange-400 font-semibold text-xl mb-2">
                  {item.date}
                </p>
                <p className="text-white/90 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Don't miss any important deadlines. Subscribe to our newsletter for updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Subscribe to Updates
              </button>
              <button className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                Download Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportantDates; 