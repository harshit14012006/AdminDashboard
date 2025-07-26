import React from 'react';

const ToysFilter = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="max-w-6xl mx-auto mb-6 px-4 sm:px-0">
      <input
        type="text"
        placeholder="Search by name, category or age group..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
      />
    </div>
  );
};

export default ToysFilter;
