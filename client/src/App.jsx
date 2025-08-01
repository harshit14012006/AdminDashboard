import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import AddToys from './toyssection/AddToys';
import AddCrockery from './crockerysection/AddCrockery';
import ViewProducts from './pages/ViewProducts';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      {/* Dashboard layout routes */}
      <Route element={<Layout />}>
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard/add-toys" element={<AddToys />} />
        <Route path="/admin-dashboard/add-crockery" element={<AddCrockery />} />
        <Route path="/admin-dashboard/view-products" element={<ViewProducts />} />
      </Route>
    </Routes>
  );
};

export default App;
