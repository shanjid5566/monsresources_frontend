import React from 'react';
import { useSelector } from 'react-redux';

const DashboardHeader = () => {
  const user = useSelector((state) => state.auth.user);
  const userRole = user?.role || 'user';


  const getRoleLabel = (role) => {
    const labels = {
      admin: 'Admin',
      hr: 'HR Manager',
      user: 'User',
    };
    return labels[role] || 'User';
  };

  return (
    <header className="bg-[#FDF9EE] border-b border-gray-300 px-8 py-4 flex items-center justify-end">
      {/* User Profile */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#063D2E] to-[#0B8B8B] flex items-center justify-center text-white font-semibold text-sm">
          {user?.name?.charAt(0).toUpperCase() || 'U'}
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-900">{user?.name || 'User'}</p>
          <span className={`text-sm font-medium text-gray-600`}>
            {getRoleLabel(userRole)}
          </span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
