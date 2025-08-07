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
  FaChevronRight,
  FaSlidersH
} from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navLink = (to, Icon, label) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`flex items-center justify-between gap-3 px-5 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${isActive
          ? 'bg-white/10 text-white shadow-lg'
          : 'text-gray-300 hover:bg-white/5 hover:text-white'
          }`}
        onClick={() => setIsOpen(false)}
        onMouseEnter={() => setHoveredItem(label)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div className="flex items-center gap-3">
          <Icon className={`text-lg ${isActive ? 'text-indigo-300' : 'text-gray-400'}`} />
          <span>{label}</span>
        </div>
        {(hoveredItem === label || isActive) && (
          <FaChevronRight className="text-xs text-indigo-300 animate-pulse" />
        )}
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
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 bg-indigo-700/90 text-white p-3 rounded-lg shadow-lg backdrop-blur-sm border border-white/10 hover:bg-indigo-600 transition-all duration-300"
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl border-r border-white/5 z-40 transform transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:flex flex-col justify-between`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
          <div className="relative">
            <FaUserCircle size={36} className="text-indigo-400/80" />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">PlayPlates</h2>
            <p className="text-xs text-gray-400 font-medium">Admin Dashboard</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4 space-y-1.5">
          {navLink('/admin-dashboard', FaTachometerAlt, 'Dashboard')}
          {navLink('/admin-dashboard/home-banners', FaSlidersH, 'Homepage Banners')}
          {navLink('/admin-dashboard/toys-management', FaCubes, 'Toys Management')}
          {navLink('/admin-dashboard/crockery-management', FaUtensils, 'Crockery Management')}
          {navLink('/admin-dashboard/view-products', FaPlus, 'View Products')}
          {navLink('/admin-dashboard/settings', FaUserCircle, 'Settings')}
        </nav>

        {/* Logout Button */}
        <div className="px-4 mt-4 mb-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-5 py-3 rounded-lg font-medium text-sm text-gray-300 hover:bg-red-600/20 hover:text-white transition-all duration-300 group border border-white/5 hover:border-red-500/30"
          >
            <div className="relative">
              <FaSignOutAlt className="text-base text-red-400 group-hover:scale-110 transition-transform" />
              <span className="absolute inset-0 bg-red-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity"></span>
            </div>
            <span>Logout</span>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-auto px-6 py-4 border-t border-white/5 text-xs text-gray-500">
          <p className="font-medium">v2.1.0</p>
          <p>© {new Date().getFullYear()} PlayPlates Inc.</p>
        </div>
      </aside>

      {/* Layout spacer */}
      <div className="hidden md:block md:ml-72" />
    </div>
  );
};

export default Sidebar;