import React from 'react';
import { getIcon } from '../../utils/icons';

function SocialLink({ social }) {
  return (
    <a
      href={social.link}
      className="w-12 h-12 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
    >
      {getIcon(social.icon)}
    </a>
  );
}

export default SocialLink; 