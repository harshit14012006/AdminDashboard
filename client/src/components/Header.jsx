import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-700 border-b-4 border-indigo-500 px-6 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all duration-500 ease-in-out hover:shadow-xl">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 tracking-wide transform hover:scale-105 transition-transform duration-300 ease-out animate-pulse">
        PlayPlates
      </h1>
      <p className="text-sm text-blue-100 font-medium italic opacity-80 hover:opacity-100 transition-opacity duration-300">
        Crafted by Harshit & Simar
      </p>
    </header>
  );
};

export default Header;