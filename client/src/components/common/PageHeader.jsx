import React from 'react';

function PageHeader({ title, description, className = '' }) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}

export default PageHeader; 