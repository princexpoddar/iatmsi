import React from 'react';
import Navbar from '../components/Navbar';
//import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';

function CallForReviewers() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">


      {/* keep in page cause the one in components is for homepage */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Call for Reviewers
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Join the Technical Program Committee and contribute to advancing research for IATMSI'26.
          </p>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        {/* why to join */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Become a Reviewer?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contribute your expertise, expand your network, and gain recognition for your valuable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { title: 'Shape the Conference', desc: 'Help maintain high academic standards by selecting the best research.' },
            { title: 'Expand Your Network', desc: 'Connect with leading researchers, industry experts, and peers in your field.' },
            { title: 'Earn Recognition', desc: 'Receive acknowledgment in conference materials and a reviewer certificate.' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                {idx + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* instructions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviewer Instructions</h2>
          <ul className="space-y-4 list-none">
            {[
              "PhD degree in relevant field or equivalent experience.",
              "Published research papers in peer-reviewed journals.",
              "Expertise in one or more conference tracks.",
              "Commitment to timely and thorough reviews.",
              "Adherence to ethical review standards."
            ].map((text, idx) => (
              <li key={idx} className="flex items-start">
                <span className="flex-shrink-0 w-3 h-3 rounded-full mt-2 bg-gradient-to-r from-purple-500 to-blue-500"></span>
                <p className="ml-3 text-gray-700">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mb-16">
          <a
            href="/call-for-reviewrs.txt"
            download
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 mr-4"
          >
            Download Guidelines
          </a>
          <a
            href="/apply-reviewer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 mr-4"
          >
            Apply as Reviewer
          </a>
        </div>

        {/* contact */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need More Information?</h3>
            <p className="text-gray-600 text-lg mb-6">
              Contact our reviewer coordination team for detailed instructions and support.
            </p>
            <a
              href="mailto:iatmsi@iiitm.ac.in"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Contact Reviewer Team
            </a>
            <p className="text-gray-500 text-sm mt-4">iatmsi@iiitm.ac.in</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CallForReviewers;
