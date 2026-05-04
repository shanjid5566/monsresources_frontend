import React from 'react';

const StatusCard = ({ icon: Icon, title, value, color = '#063D2E' }) => {
  return (
    <div className="bg-[#FDF9EE] rounded-lg p-4 sm:p-6 border border-[#E8E3D6] hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <p className="text-[#222424] text-sm font-medium mb-2">{title}</p>
          <p className="text-[#1A1B1C] text-2xl sm:text-3xl font-bold">{value}</p>
        </div>
        <div
          className="p-2 sm:p-3 rounded-lg flex-shrink-0"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon size={24} style={{ color }} className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
