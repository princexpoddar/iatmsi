import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PdfViewer from '../../components/PdfViewer/PdfViewer';

function Sponsorship() {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/pdfs/page/sponsorship');
        setPdfs(res.data);
      } catch (err) {
        console.error('Failed to fetch PDFs:', err);
      }
      setLoading(false);
    };
    fetchPdfs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Sponsorship and Exhibit
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us as a sponsor or partner for IATMSI-2026 and showcase your organization to leading researchers and industry professionals.
          </p>
        </div>

        {/* Sponsorship Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Platinum Sponsor */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Platinum Sponsor</h3>
              <p className="text-gray-600">Premium visibility and recognition</p>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Logo on all conference materials
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Keynote presentation opportunity
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Exhibition booth (Premium location)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Conference dinner sponsorship
              </li>
            </ul>
          </div>

          {/* Gold Sponsor */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥇</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Gold Sponsor</h3>
              <p className="text-gray-600">High visibility and engagement</p>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Logo on conference website and materials
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Technical session sponsorship
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Exhibition booth (Standard location)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Coffee break sponsorship
              </li>
            </ul>
          </div>

          {/* Silver Sponsor */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥈</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Silver Sponsor</h3>
              <p className="text-gray-600">Standard visibility package</p>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Logo on conference materials
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Poster session sponsorship
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Exhibition booth (Basic location)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Welcome kit inclusion
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          {/* Be a Sponsor Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Be a Sponsor or Partner
            </h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-gray-800 font-semibold mb-2">
                    <strong>IATMSI-2026 Sponsorship Brochure</strong>
                  </p>
                  <p className="text-gray-600 text-sm">Download our comprehensive sponsorship guide</p>
                </div>
                <a 
                  href="https://iatmsi.iiitm.ac.in/wp-content/uploads/2025/07/Spons-Brochure_IATMSI-2026.pdf" 
                  target="_blank" 
                  rel="noreferrer noopener"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  📄 Download
                </a>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold text-blue-900 mb-3">Contact Information</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Any queries or discussion related to sponsorship or Partnership can be addressed to:</strong>
              </p>
              <div className="space-y-2">
                <a href="mailto:iatmsi@iiitm.ac.in" className="block text-blue-600 hover:text-blue-800 underline">
                  📧 iatmsi@iiitm.ac.in
                </a>
                <a href="mailto:sponsorship_iatmsi@iiitm.ac.in" className="block text-blue-600 hover:text-blue-800 underline">
                  📧 iatmsi_sponsorship@iiitm.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Committee Chairs Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Industry Relations and Sponsorship Committee Chairs
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-3">
                <strong>Dr. Rakesh Chowdhury (Chair)</strong>, <em>ABV-IIITM Gwalior, India</em>
              </p>
              <p className="text-gray-700">
                <a href="mailto:bjana@iiitm.ac.in" className="text-blue-600 hover:text-blue-800 underline">
                  Ph.: 9576490959
                </a>
              </p>
            </div>
          </div>

          {/* Conference Chair Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Conference Chair
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-3">
                <strong>Dr. Somesh Kumar</strong>, <em>ABV-IIITM Gwalior, India</em>
              </p>
              <p className="text-gray-700">
                <strong>Ph. No.: +91-8962280784</strong>
              </p>
            </div>
          </div>

          {/* PDF Documents */}
          {!loading && pdfs.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sponsorship Documents
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {pdfs.map((pdf) => (
                  <PdfViewer
                    key={pdf._id}
                    url={pdf.url}
                    title={pdf.title}
                    height="500px"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Contact Information */}
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Need More Information?</h4>
            <p className="text-gray-700 mb-4">
              For detailed sponsorship packages, exhibition opportunities, and partnership discussions, 
              please contact our sponsorship team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="mailto:iatmsi@iiitm.ac.in"
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                Contact General Team
              </a>
              <a 
                href="mailto:sponsorship_iatmsi@iiitm.ac.in"
                className="inline-flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                Contact Sponsorship Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsorship; 