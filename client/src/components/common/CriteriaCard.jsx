import React from 'react';

function CriteriaCard({ criterion, index }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">{index + 1}</span>
        </div>
        <div className="flex-1">
          <h4 className="text-gray-900 font-semibold mb-1 text-sm">{criterion.title}</h4>
          <p className="text-gray-600 text-xs leading-relaxed">{criterion.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CriteriaCard; 