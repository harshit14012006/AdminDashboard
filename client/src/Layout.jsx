import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

import Dashboard from './pages/Dashboard';
import AddToys from './toyssection/AddToys';
import AddCrockery from './crockerysection/AddCrockery';
import ViewProducts from './pages/ViewProducts';

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <Header />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-toys" element={<AddToys />} />
            <Route path="/add-crockery" element={<AddCrockery />} />
            <Route path="/view-products" element={<ViewProducts />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Layout;
