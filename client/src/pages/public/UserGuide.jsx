import React, { useState } from 'react';
import userGuideData from '../../data/userGuideData.json';
import { getIcon } from '../../utils/icons';
import PageHeader from '../../components/common/PageHeader';

function UserGuide() {
  const [activeTab, setActiveTab] = useState('getting-started');
  const guideSections = Object.values(userGuideData.guideData);

  const renderGuideSection = (section) => (
    <div key={section.id} className={activeTab === section.id ? 'block' : 'hidden'}>
      <div className="flex items-center mb-8">
        <div className="text-blue-600 mr-3">{getIcon(section.icon)}</div>
        <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
      </div>
      <div className="space-y-8">
        {section.content.map((item, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
            <ul className="space-y-2">
              {item.items.map((listItem, itemIndex) => (
                <li key={itemIndex} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 leading-relaxed">{listItem}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader
          title="User Guide"
          description="Everything you need to know about participating in IATMSI-2026 conference."
        />

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-2">
            {guideSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === section.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-sm">{getIcon(section.icon)}</span>
                <span>{section.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {guideSections.map(renderGuideSection)}
        </div>

        {/* Quick Links */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userGuideData.quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`bg-gradient-to-r ${link.gradient} text-white p-6 rounded-lg hover:from-${link.gradient.split('-')[1]}-600 hover:to-${link.gradient.split('-')[3]}-600 transition-all duration-300 hover:shadow-lg`}
              >
                <h3 className="text-lg font-semibold mb-2">{link.title}</h3>
                <p className="text-white/90 text-sm">{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserGuide; 