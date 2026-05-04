import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const ApplicationTrends = ({ data, selectedYear, onYearChange }) => {
  return (
    <div className="bg-[#FDF9EE] rounded-lg p-6 border border-[#E8E3D6]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#1A1B1C] mb-1">
            Application Trends
          </h2>
          <p className="text-[#222424] text-sm">
            Monthly breakdown of views and applications
          </p>
        </div>

        {/* Filter Dropdown */}
        <div className="flex-shrink-0">
          <select
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="px-4 py-2 border border-[#D3C085] bg-white text-[#1A1B1C] font-medium rounded-lg cursor-pointer hover:bg-[#f9f9f9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#063D2E]"
          >
            <option value="thisYear">This year</option>
            <option value="lastYear">Last year</option>
          </select>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 0, left: -40, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="50%" stopColor="#063D2E" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2F750B" stopOpacity="0" />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="5 5"
              stroke="#E8E3D6"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              stroke="#222424"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="#222424"
              style={{ fontSize: '12px' }}
              domain={[0, 100]}
              ticks={[0, 16, 32, 48, 64, 80, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #D3C085',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
              labelStyle={{ color: '#1A1B1C', fontWeight: 'bold' }}
              formatter={(value) => [`${value} applications`, 'Applications']}
            />
            <Area
              type="monotone"
              dataKey="applications"
              stroke="#063D2E"
              strokeWidth={2}
              fill="url(#colorGradient)"
              isAnimationActive={true}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ApplicationTrends;
