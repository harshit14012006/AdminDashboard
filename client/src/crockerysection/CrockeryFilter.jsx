import React from 'react';

const CrockeryFilter = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedMaterial,
  setSelectedMaterial,
}) => {
  const categories = [
    'Plates', 'Bowls', 'Cups', 'Mugs', 'Glasses',
    'Cutlery', 'Serving Dishes', 'Trays', 'Jugs & Pitchers',
    'Tea Sets', 'Dinner Sets', 'Tureens', 'Condiment Sets',
    'Soup Bowls', 'Side Plates', 'Salad Bowls', 'Saucers',
  ];

  const materials = [
    'Ceramic', 'Porcelain', 'Bone China', 'Melamine', 'Glass',
    'Tempered Glass', 'Steel', 'Plastic', 'Bamboo', 'Wood',
    'Copper', 'Clay / Terracotta', 'Stoneware', 'Other',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white rounded-lg shadow-md border border-gray-200">
      {/* Search Field */}
      <div className="relative mb-6 w-full">
        <input
          type="text"
          placeholder="Search by name, category, or material..."
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
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Material Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Material
          </label>
          <select
            value={selectedMaterial}
            onChange={(e) => setSelectedMaterial(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-700"
          >
            <option value="">All Materials</option>
            {materials.map((mat) => (
              <option key={mat} value={mat}>{mat}</option>
            ))}
          </select>
        </div>

        {/* Optional third column (future use) */}
        <div className="hidden lg:block">{/* Reserved for future filters */}</div>
      </div>
    </div>
  );
};

export default CrockeryFilter;
