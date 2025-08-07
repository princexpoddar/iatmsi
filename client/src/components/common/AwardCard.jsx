import React from 'react';
import { getIcon } from '../../utils/icons';

function AwardCard({ category, isLarge = false }) {
  const cardClasses = isLarge 
    ? "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 h-full"
    : "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 h-full";

  const iconClasses = isLarge ? "text-blue-600 mr-4" : "text-blue-600 mr-3";
  const titleClasses = isLarge ? "text-2xl font-bold text-gray-900" : "text-xl font-bold text-gray-900";
  const descriptionClasses = isLarge ? "text-gray-600 mb-6 leading-relaxed text-lg" : "text-gray-600 mb-4 leading-relaxed";
  const itemClasses = isLarge ? "text-gray-600 text-base leading-relaxed" : "text-gray-600 text-sm leading-relaxed";
  const bulletClasses = isLarge ? "flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2" : "flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2";

  return (
    <div className={cardClasses}>
      <div className="flex items-center mb-6">
        <div className={iconClasses}>{getIcon(category.icon)}</div>
        <h3 className={titleClasses}>{category.title}</h3>
      </div>
      
      <p className={descriptionClasses}>{category.description}</p>

      {category.items && (
        <div className="space-y-3">
          {category.items.map((item, itemIndex) => (
            <div key={itemIndex} className="flex items-start space-x-3">
              <div className={bulletClasses}></div>
              <p className={itemClasses}>{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AwardCard; 