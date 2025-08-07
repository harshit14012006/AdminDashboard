import React from 'react';

const ToysFilter = ({
  searchQuery,
  setSearchQuery,
  selectedAgeGroup,
  setSelectedAgeGroup,
  selectedCategory,
  setSelectedCategory,
}) => {
  const ageGroups = [
    '0-6 months', '6-12 months', '1-2 years', '2-3 years', '3-5 years',
    '5-7 years', '6-8 years', '8-10 years', '10-12 years', '12+ years', 'Teens & Adults',
  ];

  const categories = [
    'Soft Toys', 'Educational', 'Action Figures', 'Puzzles', 'Outdoor',
    'Vehicles & Remote Control', 'Building Blocks', 'Musical Toys',
    'Arts & Crafts', 'Board Games', 'Dolls & Dollhouses', 'Role Play & Pretend Play',
    'STEM Toys', 'Electronic Toys', 'Bath Toys', 'Sports & Outdoor Games',
    'Plush Toys', 'Infant Toys', 'Science Kits', 'Construction Toys',
    'Magic Sets', 'Learning Tablets', 'Wooden Toys', 'Toy Guns & Blasters',
    'Die-Cast & Collectibles',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white rounded-lg shadow-md border border-gray-200">
      {/* Search Bar */}
      <div className="relative mb-6 w-full">
        <input
          type="text"
          placeholder="Search toy by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-12 py-3 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base font-medium"
        />
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Clear Button */}
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-red-500 transition-colors duration-150"
            aria-label="Clear search"
            type="button"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Filters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-700"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Age Group Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Age Group
          </label>
          <select
            value={selectedAgeGroup}
            onChange={(e) => setSelectedAgeGroup(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-700"
          >
            <option value="">All Age Groups</option>
            {ageGroups.map((age) => (
              <option key={age} value={age}>{age}</option>
            ))}
          </select>
        </div>

        {/* Optional: Placeholder for future filter */}
        <div className="hidden lg:block">
          {/* Example future: Sort by Price / Add Filter */}
        </div>
      </div>
    </div>
  );
};

export default ToysFilter;
