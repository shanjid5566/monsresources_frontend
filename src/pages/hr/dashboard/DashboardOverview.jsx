import React, { useState } from 'react';
import { Briefcase, Users, UserCheck } from 'lucide-react';
import StatusCard from './components/StatusCard';
import ApplicationTrends from './components/ApplicationTrends';

const DashboardOverview = () => {
  const [selectedYear, setSelectedYear] = useState('thisYear');

  // Mock data for This Year
  const dataThisYear = [
    { month: 'Jan', applications: 24 },
    { month: 'Feb', applications: 32 },
    { month: 'Mar', applications: 28 },
    { month: 'Apr', applications: 42 },
    { month: 'May', applications: 48 },
    { month: 'Jun', applications: 65 },
    { month: 'Jul', applications: 72 },
    { month: 'Aug', applications: 88 },
    { month: 'Sep', applications: 58 },
    { month: 'Oct', applications: 52 },
    { month: 'Nov', applications: 48 },
    { month: 'Dec', applications: 5 },
  ];

  // Mock data for Last Year
  const dataLastYear = [
    { month: 'Jan', applications: 18 },
    { month: 'Feb', applications: 22 },
    { month: 'Mar', applications: 20 },
    { month: 'Apr', applications: 32 },
    { month: 'May', applications: 35 },
    { month: 'Jun', applications: 42 },
    { month: 'Jul', applications: 48 },
    { month: 'Aug', applications: 45 },
    { month: 'Sep', applications: 38 },
    { month: 'Oct', applications: 32 },
    { month: 'Nov', applications: 28 },
    { month: 'Dec', applications: 25 },
  ];

  const chartData = selectedYear === 'thisYear' ? dataThisYear : dataLastYear;

  // Status cards data
  const statusCards = [
    {
      id: 1,
      title: 'Total Jobs Posted',
      value: '48',
      icon: Briefcase,
      color: '#063D2E',
    },
    {
      id: 2,
      title: 'Total Applications',
      value: '1,284',
      icon: Users,
      color: '#063D2E',
    },
    {
      id: 3,
      title: 'New Applicants (Today)',
      value: '156',
      icon: UserCheck,
      color: '#063D2E',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1B1C] mb-2">
            Good morning, Alex!
          </h1>
          <p className="text-[#222424] text-base">
            Here's what's happening with your job postings.
          </p>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statusCards.map((card) => (
          <StatusCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            value={card.value}
            color={card.color}
          />
        ))}
      </div>

      {/* Application Trends Chart */}
      <ApplicationTrends
        data={chartData}
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
      />
    </div>
  );
};

export default DashboardOverview;
