import React from 'react';
import awardsData from '../../data/awardsData.json';
import PageHeader from '../../components/common/PageHeader';
import AwardCard from '../../components/common/AwardCard';
import CriteriaCard from '../../components/common/CriteriaCard';
import ContactSection from '../../components/common/ContactSection';

function Awards() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader
          title="Awards & Grants"
          description="The following prestigious Awards and Grants are announced for the IATMSI-2026 conference."
        />

        {/* Awards Overview Cards - Improved Grid Structure */}
        <div className="mb-12">
          {/* First Row - 2 Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {awardsData.awardCategories.slice(0, 2).map((category, index) => (
              <AwardCard key={index} category={category} isLarge={true} />
            ))}
          </div>

          {/* Second Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awardsData.awardCategories.slice(2, 5).map((category, index) => (
              <AwardCard key={index + 2} category={category} isLarge={false} />
            ))}
          </div>
        </div>

        {/* Selection Criteria Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Selection Criteria</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The Technical Program Committee (TPC) evaluates submissions based on comprehensive criteria to ensure the highest standards of excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awardsData.criteria.map((criterion, index) => (
              <CriteriaCard key={index} criterion={criterion} index={index} />
            ))}
          </div>
        </div>

        {/* Conference Theme Highlight */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 mb-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Awards Theme 2026</h3>
            <p className="text-xl italic">"Enabling the Change! Social Innovation for Sustainable Societies"</p>
            <p className="text-white/90 mt-4">
              Our awards recognize research that drives positive social impact and sustainable development.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <ContactSection
          title="Get in Touch"
          description="For detailed information about awards, submission guidelines, and eligibility criteria, please contact our awards committee."
          buttonText="Contact Awards Committee"
          email="iatmsi@iiitm.ac.in"
          icon={
            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          }
        />
      </div>
    </div>
  );
}

export default Awards; 