import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import AddToys from './toyssection/ToysDashboard';
import AddCrockery from './crockerysection/CrockeryDashboard';
import ViewProducts from './pages/ViewProducts';
import Settings from './pages/Settings';
import HomepageBanners from './components/HomepageBanners';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      {/* Dashboard layout routes */}
      <Route element={<Layout />}>
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard/home-banners" element={<HomepageBanners />} />
        <Route path="/admin-dashboard/toys-management" element={<AddToys />} />
        <Route path="/admin-dashboard/crockery-management" element={<AddCrockery />} />
        <Route path="/admin-dashboard/view-products" element={<ViewProducts />} />
        <Route path="/admin-dashboard/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
