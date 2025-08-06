import React from 'react';

function Sponsorship() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sponsorship & Exhibits
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Partner with us to support innovation and showcase your organization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Sponsorship Opportunities
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-white/10 rounded-lg">
                  <h3 className="text-lg font-bold text-white mb-2">Platinum Sponsor</h3>
                  <p className="text-white/90 text-sm mb-2">Premium visibility and exclusive benefits</p>
                  <p className="text-orange-400 font-semibold">$10,000</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <h3 className="text-lg font-bold text-white mb-2">Gold Sponsor</h3>
                  <p className="text-white/90 text-sm mb-2">High visibility and recognition</p>
                  <p className="text-orange-400 font-semibold">$5,000</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <h3 className="text-lg font-bold text-white mb-2">Silver Sponsor</h3>
                  <p className="text-white/90 text-sm mb-2">Standard sponsorship package</p>
                  <p className="text-orange-400 font-semibold">$2,500</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <h3 className="text-lg font-bold text-white mb-2">Bronze Sponsor</h3>
                  <p className="text-white/90 text-sm mb-2">Basic sponsorship benefits</p>
                  <p className="text-orange-400 font-semibold">$1,000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Exhibition Opportunities
              </h2>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-white/10 rounded-lg">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Exhibition Booth</h3>
                    <p className="text-white/90 text-sm">Showcase your products and services</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white/10 rounded-lg">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Demo Sessions</h3>
                    <p className="text-white/90 text-sm">Present live demonstrations</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white/10 rounded-lg">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Networking Events</h3>
                    <p className="text-white/90 text-sm">Connect with researchers and industry</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Contact Us
              </h2>
              <p className="text-white/90 mb-4">
                Interested in sponsoring or exhibiting? Get in touch with our team.
              </p>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-white/10 rounded-lg">
                  <svg className="w-5 h-5 text-orange-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="text-white/90">sponsorship@iatmsi2026.org</span>
                </div>
                <div className="flex items-center p-3 bg-white/10 rounded-lg">
                  <svg className="w-5 h-5 text-orange-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="text-white/90">+91-1234567890</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsorship; 