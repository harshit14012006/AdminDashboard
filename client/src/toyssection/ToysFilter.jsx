import React from 'react';

const ToysFilter = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="max-w-6xl mx-auto mb-8 px-4 sm:px-0 top-10">
      <div className="relative max-w-2xl mx-auto">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg 
            className="h-5 w-5 text-gray-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search toys "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-12 py-3.5 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base font-medium hover:border-gray-400"
        />

        {/* Clear Button */}
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-150 focus:outline-none focus:text-gray-600"
            aria-label="Clear search"
            type="button"
          >
            <svg 
              className="h-5 w-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        )}
      </div>

      {/* Admin Dashboard Info Bar */}
      {/* <div className="max-w-2xl mx-auto mt-3">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <svg className="h-4 w-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Search across all inventory
            </span>
          </div>
          {searchQuery && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
              Filtering results
            </span>
          )}
        </div> */}
      
    </div>
  );
};

export default ToysFilter;
