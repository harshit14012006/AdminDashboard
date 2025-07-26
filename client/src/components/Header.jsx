import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-900 to-blue-900 shadow-md px-4 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
      <h1 className="text-lg sm:text-xl font-semibold text-white">
        E-Commerce Admin Dashboard
      </h1>
      <p className="text-sm text-indigo-300">
        Powered by Harshit
      </p>
    </header>
  );
};

export default Header;
