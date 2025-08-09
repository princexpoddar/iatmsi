import React from 'react';

function ContactSection({ title, description, buttonText, email, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 text-lg mb-6">{description}</p>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          {buttonText}
        </a>
        <p className="text-gray-500 text-sm mt-4">{email}</p>
      </div>
    </div>
  );
}

export default ContactSection; 