import React from 'react';
import { useSelector } from 'react-redux';
import { LayoutDashboard, Briefcase, Users, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const userRole = user?.role || 'user';

  const getWelcomeMessage = () => {
    switch (userRole) {
      case 'admin':
        return 'Welcome, Admin! Here\'s your system overview.';
      case 'hr':
        return 'Welcome, HR Manager! Manage your job postings and applicants.';
      case 'user':
        return 'Welcome! Find and manage your job opportunities.';
      default:
        return 'Welcome to Dashboard!';
    }
  };

  const getStats = () => {
    switch (userRole) {
      case 'admin':
        return [
          { label: 'Total Jobs', value: '24', icon: Briefcase, color: '#063D2E' },
          { label: 'Total Users', value: '156', icon: Users, color: '#0B8B8B' },
          { label: 'Total Applications', value: '324', icon: TrendingUp, color: '#D85A00' },
        ];
      case 'hr':
        return [
          { label: 'Posted Jobs', value: '8', icon: Briefcase, color: '#063D2E' },
          { label: 'Applications', value: '42', icon: Users, color: '#0B8B8B' },
          { label: 'Hired', value: '3', icon: TrendingUp, color: '#D85A00' },
        ];
      case 'user':
        return [
          { label: 'Applied Jobs', value: '5', icon: Briefcase, color: '#063D2E' },
          { label: 'Saved Jobs', value: '12', icon: Users, color: '#0B8B8B' },
          { label: 'Profile Views', value: '28', icon: TrendingUp, color: '#D85A00' },
        ];
      default:
        return [];
    }
  };

  const stats = getStats();

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-[#063D2E] to-[#0B8B8B] text-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <LayoutDashboard className="w-6 h-6" />
          <h1 className="text-3xl font-bold">{getWelcomeMessage()}</h1>
        </div>
        <p className="text-white/80">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-600 font-medium">{stat.label}</h3>
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-2">+2.5% from last month</p>
            </div>
          );
        })}
      </div>

      {/* Additional Info */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Active Listings</span>
              <span className="font-semibold text-gray-900">24</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Pending Applications</span>
              <span className="font-semibold text-gray-900">18</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Recent Activity</span>
              <span className="font-semibold text-gray-900">2 hours ago</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Account Status</span>
              <span className="font-semibold text-green-600">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
