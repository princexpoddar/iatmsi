import React from 'react';

function PatronChairs() {
  const chairs = [
    {
      id: 1,
      name: "Prof. S. N. Singh",
      role: "Patron",
      position: "Director, ABV-IIITM Gwalior, India",
      hasPhoto: true,
      photoClass: "bg-blue-100"
    },
    {
      id: 2,
      name: "Prof. Fushuan Wen",
      role: "General Chair",
      position: "Zhejiang University, China",
      hasPhoto: false
    },
    {
      id: 3,
      name: "Prof. G. S. Tomar",
      role: "General Chair",
      position: "IEEE MP Section, India",
      hasPhoto: true,
      photoClass: "bg-gray-100"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-purple-900 to-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            Patron & General Chairs
          </h2>
        </div>

        {/* Chairs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {chairs.map((chair) => (
            <div
              key={chair.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              {/* Photo or Placeholder */}
              <div className="text-center mb-4">
                {chair.hasPhoto ? (
                  <div className={`w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center ${chair.photoClass}`}>
                    <svg className="w-16 h-16 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                ) : (
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-white/20 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Chair Info */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-2">
                  {chair.name}
                </h3>
                <p className="text-orange-400 font-semibold mb-2">
                  {chair.role}
                </p>
                <p className="text-white/90 text-sm leading-relaxed">
                  {chair.position}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Leadership Team
            </h3>
            <p className="text-white/90 text-lg leading-relaxed">
              Meet the distinguished leaders guiding IATMSI-2026 towards excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PatronChairs; 