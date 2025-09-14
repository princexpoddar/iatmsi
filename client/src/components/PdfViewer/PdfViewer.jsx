import React, { useState } from 'react';

const PdfViewer = ({ 
  url, 
  title = "PDF Document", 
  showDownload = true, 
  height = "400px",
  className = "",
  showSidebar = false
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`bg-white rounded-lg border border-gray-200 overflow-hidden ${className}`}>
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {showDownload && (
          <a
            href={url}
            download
            className="inline-flex items-center mt-2 text-sm text-blue-600 hover:text-blue-800 underline"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
        )}
      </div>
      
      <div className="relative" style={{ height }}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span className="text-gray-600">Loading PDF...</span>
            </div>
          </div>
        )}
        
        {hasError ? (
          <div className="flex items-center justify-center h-full bg-gray-100">
            <div className="text-center">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-600 mb-2">PDF viewer not supported</p>
              <p className="text-sm text-gray-500 mb-4">Please download the file to view</p>
              <a
                href={url}
                download
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        ) : (
          <object
            data={`${url}#toolbar=1&navpanes=0&scrollbar=1&view=FitH&page=1${showSidebar ? '' : '&sidebar=0'}`}
            type="application/pdf"
            className="w-full h-full"
            onLoad={handleLoad}
            onError={handleError}
            aria-label={`PDF viewer for ${title}`}
          >
            <div className="flex items-center justify-center h-full bg-gray-100">
              <div className="text-center">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-600 mb-2">PDF viewer not supported</p>
                <p className="text-sm text-gray-500 mb-4">Please download the file to view</p>
                <a
                  href={url}
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          </object>
        )}
      </div>
    </div>
  );
};

export default PdfViewer;
