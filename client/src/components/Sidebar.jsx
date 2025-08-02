import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaPlus,
  FaUtensils,
  FaCubes,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLink = (to, Icon, label) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`flex items-center gap-3 px-5 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${isActive
          ? 'bg-indigo-700 text-white shadow-md'
          : 'text-gray-300 hover:bg-indigo-600 hover:text-white'
          }`}
        onClick={() => setIsOpen(false)}
      >
        <Icon className={`text-base ${isActive ? 'text-white' : 'text-indigo-300'}`} />
        <span>{label}</span>
      </Link>
    );
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 bg-indigo-900 text-white p-2 rounded-full shadow-md border border-indigo-700"
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-indigo-900 to-blue-900 shadow-xl border-r border-indigo-800 z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:flex flex-col justify-between`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-indigo-800">
          <FaUserCircle size={32} className="text-indigo-300" />
          <div>
            <h2 className="text-xl font-semibold text-white">PlayPlates</h2>
            <p className="text-sm text-indigo-300">Admin Dashboard</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-5 px-4 space-y-2">
          {navLink('/admin-dashboard', FaTachometerAlt, 'Dashboard')}
          {navLink('/admin-dashboard/add-toys', FaCubes, 'Add Toys')}
          {navLink('/admin-dashboard/add-crockery', FaUtensils, 'Add Crockery')}
          {navLink('/admin-dashboard/view-products', FaPlus, 'View Products')}
          {navLink('/admin-dashboard/settings', FaUserCircle, 'Settings')}
        </nav>

        {/* Logout Button */}
        <div className="px-4 mt-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-5 py-3 rounded-lg font-medium text-sm text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-200"
          >
            <FaSignOutAlt className="text-base text-red-400" />
            <span>Logout</span>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-auto px-6 py-4 border-t border-indigo-800 text-sm text-indigo-300">
          <p>© {new Date().getFullYear()} PlayPlates</p>
        </div>
      </aside>

      {/* Layout spacer */}
      <div className="hidden md:block md:ml-64" />
    </div>
  );
};

export default Sidebar;
