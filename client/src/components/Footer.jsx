import React from 'react';

function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Submit a Paper', href: '#' },
    { name: 'Registration', href: '#' },
    { name: 'Sponsorship-Exhibits', href: '#' }
  ];

  const contactInfo = {
    address: 'ABV-IIITM Gwalior, Morena Rd, IIITM Campus, Gwalior, Madhya Pradesh, India- 474015',
    email: 'iatmsi@iiitm.ac.in',
    phone: '+91-8962280784; +91-9202731889'
  };

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Conference Information */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                IEEE IATMSI-2026
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                International Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Scopus Indexed
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  IEEE Xplore
                </span>
              </div>
            </div>
            
            {/* Visitor Statistics */}
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Website Visitors</p>
                  <p className="text-2xl font-bold text-blue-400">083,830</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Conference Record</p>
                  <p className="text-lg font-semibold text-white">68,868</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm border-l-2 border-transparent hover:border-blue-400 pl-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <svg className="w-4 h-4 text-blue-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p className="text-gray-300 leading-relaxed">
                  {contactInfo.address}
                </p>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 text-blue-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 text-blue-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div className="text-gray-300">
                  <div>Ph. No.: {contactInfo.phone}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organization Information */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-white font-semibold mb-2">Organized by</h5>
              <p className="text-gray-300 text-sm">
                ABV-IIITM IEEE Student Branch, Gwalior, Madhya Pradesh, India
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-2">In Association with</h5>
              <p className="text-gray-300 text-sm">
                IEEE Madhya Pradesh Section
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              © IATMSI-2025. All Rights Reserved. Designed by ABV-IIITM IEEE Student Branch
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>IEEE Conference</span>
              <span>•</span>
              <span>Scopus Indexed</span>
              <span>•</span>
              <span>Academic Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 