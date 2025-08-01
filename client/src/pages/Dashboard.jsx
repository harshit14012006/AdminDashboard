import React from 'react';
import { FaUsers, FaBox, FaShoppingCart, FaDollarSign } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-pink-100 text-pink-800 p-4 rounded-xl shadow hover:shadow-md transition">
          <div className="flex items-center space-x-4">
            <FaUsers className="text-2xl" />
            <div>
              <h4 className="text-lg font-semibold">Users</h4>
              <p className="text-sm">1,254</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-100 text-yellow-800 p-4 rounded-xl shadow hover:shadow-md transition">
          <div className="flex items-center space-x-4">
            <FaBox className="text-2xl" />
            <div>
              <h4 className="text-lg font-semibold">Products</h4>
              <p className="text-sm">312</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 text-purple-800 p-4 rounded-xl shadow hover:shadow-md transition">
          <div className="flex items-center space-x-4">
            <FaShoppingCart className="text-2xl" />
            <div>
              <h4 className="text-lg font-semibold">Orders</h4>
              <p className="text-sm">874</p>
            </div>
          </div>
        </div>

        <div className="bg-green-100 text-green-800 p-4 rounded-xl shadow hover:shadow-md transition">
          <div className="flex items-center space-x-4">
            <FaDollarSign className="text-2xl" />
            <div>
              <h4 className="text-lg font-semibold">Revenue</h4>
              <p className="text-sm">$48,200</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Recent Activity</h3>
          <button className="text-sm text-blue-600 hover:underline font-medium">
            View all
          </button>

        </div>
        <div className="max-h-60 overflow-y-auto pr-1">
          <ul className="space-y-4">
            {[
              {
                icon: "🛒",
                activity: "New order placed",
                time: "2 hours ago",
              },
              {
                icon: "📦",
                activity: "Product shipped",
                time: "5 hours ago",
              },
              {
                icon: "🧑‍💼",
                activity: "New user registered",
                time: "1 day ago",
              },
              {
                icon: "🧾",
                activity: "Invoice generated",
                time: "2 days ago",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition">
                <div className="text-2xl mr-4">{item.icon}</div>
                <div>
                  <p className="text-sm font-medium text-gray-800">{item.activity}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
