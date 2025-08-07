import React, { useState } from 'react';
import { getIcon } from '../../utils/icons';

function FAQAccordion({ category, categoryIndex }) {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center mb-6">
        <div className="text-blue-600 mr-3">
          {getIcon(category.icon)}
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
      </div>
      
      <div className="space-y-4">
        {category.items.map((item, itemIndex) => {
          const globalIndex = categoryIndex * 100 + itemIndex;
          return (
            <div key={itemIndex} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(globalIndex)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex items-center justify-between"
              >
                <span className="font-semibold text-gray-900 pr-4">Q. {item.question}</span>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openItems.has(globalIndex) ? 'rotate-180' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </div>
              </button>
              
              {openItems.has(globalIndex) && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-blue-600">A. </span>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQAccordion; 