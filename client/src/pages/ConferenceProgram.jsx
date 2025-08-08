import React from 'react';

function ConferenceProgram() {
  return (
    <main className="w-full">
      {/* Header Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Conference Program
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed schedule and program information for IATMSI-2026
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Program Overview
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-600">Conference Days</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-gray-600">Technical Sessions</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600">Keynote Speakers</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-600">Poster Sessions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Day-wise Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Day 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Day 1 - March 12, 2026</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">08:00 - 09:00</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Registration & Welcome Coffee</h4>
                    <p className="text-gray-600">Conference registration and networking</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">09:00 - 10:00</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Opening Ceremony</h4>
                    <p className="text-gray-600">Welcome address and conference overview</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">10:00 - 11:00</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Keynote Session 1</h4>
                    <p className="text-gray-600">"Social Innovation in Technology"</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">11:00 - 11:30</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Coffee Break</h4>
                    <p className="text-gray-600">Networking and refreshments</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">11:30 - 13:00</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Technical Session 1</h4>
                    <p className="text-gray-600">Healthcare Technology & Social Innovation</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">13:00 - 14:00</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lunch Break</h4>
                    <p className="text-gray-600">Conference lunch and networking</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">14:00 - 15:30</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Technical Session 2</h4>
                    <p className="text-gray-600">Agriculture Technology & Smart Systems</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">15:30 - 16:00</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Coffee Break</h4>
                    <p className="text-gray-600">Networking and refreshments</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">16:00 - 17:30</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Poster Session 1</h4>
                    <p className="text-gray-600">Interactive poster presentations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Day 2 - March 13, 2026</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">08:30 - 09:00</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Morning Coffee</h4>
                    <p className="text-gray-600">Networking and refreshments</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">09:00 - 10:00</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Keynote Session 2</h4>
                    <p className="text-gray-600">"Sustainable Technology Solutions"</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">10:00 - 11:30</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Technical Session 3</h4>
                    <p className="text-gray-600">Intelligent Transportation Systems</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">11:30 - 12:00</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Coffee Break</h4>
                    <p className="text-gray-600">Networking and refreshments</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">12:00 - 13:30</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Technical Session 4</h4>
                    <p className="text-gray-600">VLSI & Renewable Electronics</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">13:30 - 14:30</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lunch Break</h4>
                    <p className="text-gray-600">Conference lunch and networking</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">14:30 - 16:00</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Panel Discussion</h4>
                    <p className="text-gray-600">"Future of Social Innovation in Technology"</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">16:00 - 17:30</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Poster Session 2</h4>
                    <p className="text-gray-600">Interactive poster presentations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Day 3 - March 14, 2026</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">08:30 - 09:00</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Morning Coffee</h4>
                    <p className="text-gray-600">Networking and refreshments</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">09:00 - 10:00</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Keynote Session 3</h4>
                    <p className="text-gray-600">"Emerging Technologies for Social Impact"</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">10:00 - 11:30</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Technical Session 5</h4>
                    <p className="text-gray-600">Management & Social Innovation</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">11:30 - 12:00</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Coffee Break</h4>
                    <p className="text-gray-600">Networking and refreshments</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">12:00 - 13:30</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Technical Session 6</h4>
                    <p className="text-gray-600">Interdisciplinary Applications</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">13:30 - 14:30</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lunch Break</h4>
                    <p className="text-gray-600">Conference lunch and networking</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">14:30 - 15:30</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Award Ceremony</h4>
                    <p className="text-gray-600">Best paper awards and recognition</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold">15:30 - 16:00</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Closing Ceremony</h4>
                    <p className="text-gray-600">Conference wrap-up and future announcements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Important Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">All times are in Indian Standard Time (IST)</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Hybrid event: Both in-person and virtual attendance</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Technical sessions include Q&A periods</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Poster sessions are interactive</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Networking breaks throughout the day</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Conference proceedings available online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ConferenceProgram; 