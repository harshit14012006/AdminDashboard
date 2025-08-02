import React, { useState } from 'react';
import axios from 'axios';

const Settings = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const token = localStorage.getItem('adminToken');

      const response = await axios.put(
        'http://localhost:5000/api/admin/update',
        { email, phone, password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(response.data.message || 'Credentials updated successfully');
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Update failed');
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-2xl p-8 border border-gray-200 mb-40">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Admin Settings</h2>
        <p className="text-gray-500 mb-6">
          Update your email, phone number, or password.
        </p>

        {message && (
          <div className="mb-4 p-3 rounded text-sm font-medium bg-green-100 text-green-800 border border-green-300">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 rounded text-sm font-medium bg-red-100 text-red-800 border border-red-300">
            {error}
          </div>
        )}

        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Email */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="New email"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="New phone number"
                required
              />
            </div>

            {/* Password */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="New password"
                required
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Update Credentials
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
