import React from 'react';

const StatusCard = ({ icon: Icon, title, value, color = '#063D2E' }) => {
  return (
    <div className="bg-[#FDF9EE] rounded-lg p-6 border border-[#E8E3D6] hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <Icon size={24} className="text-white" />
        </div>
      </div>
      <p className="text-[#222424] text-sm font-medium mb-1">
        {title}
      </p>
      <p className="text-3xl font-bold text-[#1A1B1C]">
        {value}
      </p>
    </div>
  );
};

export default StatusCard;
