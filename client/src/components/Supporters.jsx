import React from 'react';

function Supporters() {
  const sponsors = [
    {
      id: 1,
      name: "Scientech",
      type: "EVENT SPONSOR",
      logo: "S",
      logoClass: "bg-gradient-to-r from-purple-500 to-orange-500 text-white"
    },
    {
      id: 2,
      name: "IJGASR",
      subtitle: "International Journal for Global Academic & Scientific Research",
      details: "E-ISSN: 2583-3081",
      type: "SILVER SPONSOR",
      logo: "IJGASR",
      logoClass: "bg-blue-600 text-white"
    },
    {
      id: 3,
      name: "Silver Sponsor",
      type: "SILVER SPONSOR",
      logo: "SS",
      logoClass: "bg-gray-600 text-white"
    },
    {
      id: 4,
      name: "Scholars COLAB",
      type: "PLATINUM SPONSOR",
      logo: "SC",
      logoClass: "bg-green-600 text-white"
    }
  ];

  const mediaPartners = [
    {
      id: 1,
      name: "INTERNATIONAL CONFERENCE ALERTS",
      type: "Media Partner",
      url: "https://internationalconferencealerts.com/",
      icon: "bg-blue-500",
      description: "Global conference discovery platform"
    },
    {
      id: 2,
      name: "ALL CONFERENCE ALERT",
      subtitle: "ACADEMIC CONFERENCES AT A GLANCE",
      type: "Media Partner",
      url: "https://allconferencealert.net/",
      icon: "bg-blue-400",
      description: "Comprehensive academic conference directory"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Supporters Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Supporters
          </h2>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Logo */}
              <div className="text-center mb-4">
                <div className={`w-16 h-16 rounded-lg mx-auto mb-3 flex items-center justify-center font-bold text-lg ${sponsor.logoClass}`}>
                  {sponsor.logo}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {sponsor.name}
                </h3>
                {sponsor.subtitle && (
                  <p className="text-gray-600 text-xs mb-2">
                    {sponsor.subtitle}
                  </p>
                )}
                {sponsor.details && (
                  <p className="text-gray-500 text-xs mb-2">
                    {sponsor.details}
                  </p>
                )}
                <p className="text-purple-600 font-semibold text-sm">
                  {sponsor.type}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Media Partners */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Media Partners
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${partner.icon}`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {partner.name}
                    </h4>
                    {partner.subtitle && (
                      <p className="text-gray-600 text-sm">
                        {partner.subtitle}
                      </p>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-3">
                  {partner.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-semibold text-sm">
                    {partner.type}
                  </span>
                  <a 
                    href={partner.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Visit Website →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Partners
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Thank you to our sponsors and media partners for their invaluable support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Supporters; 