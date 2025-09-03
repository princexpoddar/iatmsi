import React from 'react';

function VenueTravel() {
  const venueHighlights = [
    {
      title: "Conference Venue",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9l-6.91.74L12 16l-3.09-6.26L2 9l6.91-.74L12 2z"/>
        </svg>
      ),
      description: "ABV-IIITM Gwalior - A premier technical institution with state-of-the-art facilities.",
      items: [
        "Morena Rd, IIITM Campus, Gwalior - 474015",
        "Modern auditoriums and seminar rooms",
        "High-speed Wi-Fi and AV equipment",
        "Cafeteria and dining facilities"
      ]
    },
    {
      title: "Travel Options",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      description: "Multiple convenient transportation options to reach Gwalior from major cities.",
      items: [
        "By Air: Gwalior Airport (8 km from campus)",
        "By Train: Gwalior Junction (15 km from campus)",
        "By Road: NH-44 connects to Delhi, Agra",
        "Local transport: Taxis, auto-rickshaws"
      ]
    }
  ];

  const accommodationOptions = [
    { title: "On-Campus", description: "Guest house with limited rooms" },
    { title: "Nearby Hotels", description: "Multiple hotels within 5-10 km" },
    { title: "Budget Options", description: "Guest houses in city center" },
    { title: "Conference Rates", description: "Special rates for attendees" }
  ];

  const gwaliorInfo = [
    { title: "Heritage", description: "Rich cultural and historical significance" },
    { title: "Attractions", description: "Famous Gwalior Fort and palaces" },
    { title: "Arts", description: "Known for classical music traditions" },
    { title: "Infrastructure", description: "Modern city with good connectivity" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Venue & Travel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete information about the conference venue, travel options, and accommodation in Gwalior.
          </p>
        </div>

        {/* Venue Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {venueHighlights.map((highlight, index) => (
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



        {/* Accommodation Options */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Accommodation Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Various accommodation choices to suit different preferences and budgets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accommodationOptions.map((option, index) => (
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
                      {option.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Gwalior */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {gwaliorInfo.map((info, index) => (
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
                  {info.title}
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {info.description}
              </p>
            </div>
          ))}
        </div>





        {/* Conference Theme Highlight */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 mb-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Welcome to Gwalior</h3>
            <p className="text-xl italic mb-4">
              "Historical city with modern facilities for IATMSI-2026"
            </p>
            <p className="text-white/90">
              March is pleasant weather in Gwalior. Book accommodation in advance for the best experience.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Travel Assistance
          </h3>
          <p className="text-gray-600 mb-4">
            For travel and accommodation assistance, contact us.
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

export default VenueTravel; 