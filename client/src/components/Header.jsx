import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-white/5 px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
      <div className="flex items-center gap-3">
        <div className="w-2 h-8 bg-indigo-500 rounded-full animate-pulse"></div>
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400 tracking-tight">
          PlayPlates
          <span className="text-xs font-normal text-gray-400 ml-2">ADMIN</span>
        </h1>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-xs font-medium text-gray-300">Live</span>
        </div>
        <p className="text-xs text-gray-400 font-medium">
          Crafted by <span className="text-indigo-300">Harshit</span> & <span className="text-purple-300">Simar</span>
        </p>
      </div>
    </header>
  );
};

export default Header;