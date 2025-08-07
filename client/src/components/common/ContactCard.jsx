import React from 'react';
import { getIcon } from '../../utils/icons';

function ContactCard({ method }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
        <div className="text-blue-600">
          {getIcon(method.icon)}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {method.title}
        </h3>
        <p className="text-gray-600 text-sm mb-2">
          {method.description}
        </p>
        <a
          href={method.link}
          className="text-blue-600 hover:text-blue-800 font-medium break-all"
        >
          {method.value}
        </a>
      </div>
    </div>
  );
}

export default ContactCard; 