import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <Header />
        <main className="p-4">
          <Outlet /> {/* This will show nested route's component */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
