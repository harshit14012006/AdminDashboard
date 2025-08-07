import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUsers, 
  FaBox, 
  FaShoppingCart, 
  FaDollarSign,
  FaArrowUp,
  FaArrowDown,
  FaEye,
  FaBell,
  FaFilter,
  FaSearch,
  FaCalendarAlt,
  FaChartLine,
  FaSync
} from 'react-icons/fa';
import { 
  HiSparkles, 
  HiTrendingUp, 
  HiTrendingDown,
  HiDotsVertical 
} from 'react-icons/hi';

const Dashboard = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [notifications, setNotifications] = useState(3);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  // Enhanced stats data
  const statsData = [
    {
      id: 1,
      title: "Active Users",
      value: "1,254",
      change: "+12.5%",
      isPositive: true,
      icon: FaUsers,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      iconBg: "bg-gradient-to-r from-purple-500 to-pink-500",
      description: "vs last month"
    },
    {
      id: 2,
      title: "Products",
      value: "312",
      change: "+8.2%",
      isPositive: true,
      icon: FaBox,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      iconBg: "bg-gradient-to-r from-blue-500 to-cyan-500",
      description: "in inventory"
    },
    {
      id: 3,
      title: "Orders",
      value: "874",
      change: "-3.1%",
      isPositive: false,
      icon: FaShoppingCart,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      iconBg: "bg-gradient-to-r from-orange-500 to-red-500",
      description: "this week"
    },
    {
      id: 4,
      title: "Revenue",
      value: "$48,200",
      change: "+23.8%",
      isPositive: true,
      icon: FaDollarSign,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      iconBg: "bg-gradient-to-r from-green-500 to-emerald-500",
      description: "monthly total"
    }
  ];

  // Enhanced activity data
  const activityData = [
    {
      id: 1,
      type: "order",
      title: "New order from Sarah Johnson",
      description: "Premium package - $299",
      time: "2 hours ago",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c8d5?w=40&h=40&fit=crop&crop=face",
      status: "success",
      icon: "🛒"
    },
    {
      id: 2,
      type: "shipment",
      title: "Package shipped to New York",
      description: "Order #12847",
      time: "5 hours ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      status: "info",
      icon: "📦"
    },
    {
      id: 3,
      type: "user",
      title: "New user registration",
      description: "Alex Thompson joined",
      time: "1 day ago",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      status: "success",
      icon: "🧑‍💼"
    },
    {
      id: 4,
      type: "payment",
      title: "Payment processed",
      description: "Invoice #INV-001 - $1,250",
      time: "2 days ago",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      status: "success",
      icon: "💳"
    }
  ];

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * 100, 0],
              y: [0, Math.random() * 100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-4 md:p-8 max-w-8xl mx-auto">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20"
        >
          <div>
            <motion.h1 
              className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Dashboard
            </motion.h1>
            <motion.p 
              className="text-gray-600 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <HiSparkles className="text-yellow-500" />
              Welcome back! Here's what's happening today
            </motion.p>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {/* Time Range Selector */}
            <div className="flex bg-gray-100 rounded-2xl p-1">
              {['24h', '7d', '30d'].map((range) => (
                <button
                  key={range}
                  onClick={() => setSelectedTimeRange(range)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedTimeRange === range
                      ? 'bg-white text-gray-900 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <motion.button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isRefreshing ? 360 : 0 }}
                transition={{ duration: 1, repeat: isRefreshing ? Infinity : 0 }}
              >
                <FaSync />
              </motion.div>
            </motion.button>

            {/* Notifications */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <button className="p-3 bg-white/80 backdrop-blur-sm text-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <FaBell />
              </button>
              {notifications > 0 && (
                <motion.div
                  className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {notifications}
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative overflow-hidden"
            >
              {/* Card Background with Glassmorphism */}
              <div className={`${stat.bgColor} backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative`}>
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={false}
                />

                {/* Floating Icon */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    className={`w-14 h-14 ${stat.iconBg} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="text-xl" />
                  </motion.div>
                  
                  {/* Trend Indicator */}
                  <motion.div
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                      stat.isPositive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {stat.isPositive ? (
                      <HiTrendingUp className="w-3 h-3" />
                    ) : (
                      <HiTrendingDown className="w-3 h-3" />
                    )}
                    {stat.change}
                  </motion.div>
                </div>

                {/* Stats Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <h3 className="text-3xl font-black text-gray-900 mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.description}</p>
                </motion.div>

                {/* Animated Sparkles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-30"
                    animate={{
                      x: [0, Math.random() * 50, 0],
                      y: [0, Math.random() * 50, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    style={{
                      left: Math.random() * 100 + '%',
                      top: Math.random() * 100 + '%',
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Activity Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
        >
          {/* Activity Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                  >
                    <FaChartLine className="text-white text-sm" />
                  </motion.div>
                  Recent Activity
                </h3>
                <p className="text-gray-600 mt-1">Latest updates from your business</p>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                  <FaFilter className="text-gray-600" />
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all">
                  View All
                </button>
              </div>
            </div>
          </div>

          {/* Activity List */}
          <div className="p-6">
            <div className="space-y-4">
              <AnimatePresence>
                {activityData.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-100"
                  >
                    {/* Activity Icon/Avatar */}
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-2xl overflow-hidden">
                        <img 
                          src={activity.avatar} 
                          alt="" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <motion.div
                        className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md"
                        whileHover={{ scale: 1.2 }}
                      >
                        <span className="text-xs">{activity.icon}</span>
                      </motion.div>
                    </div>

                    {/* Activity Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">
                        {activity.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {activity.description}
                      </p>
                      <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                        <FaCalendarAlt className="w-3 h-3" />
                        {activity.time}
                      </p>
                    </div>

                    {/* Status Indicator */}
                    <div className="flex-shrink-0">
                      <motion.div
                        className={`w-3 h-3 rounded-full ${
                          activity.status === 'success' ? 'bg-green-500' :
                          activity.status === 'info' ? 'bg-blue-500' :
                          'bg-gray-400'
                        }`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>

                    {/* Action Menu */}
                    <motion.button
                      className="opacity-0 group-hover:opacity-100 p-2 hover:bg-white rounded-xl transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      <HiDotsVertical className="text-gray-400" />
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
