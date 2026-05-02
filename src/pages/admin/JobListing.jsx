import React from 'react';
import { useSelector } from 'react-redux';
import JobsGrid from '../../components/common/JobsGrid';
import { getAllJobs } from '../../data/jobsData';

const JobListing = () => {
  const user = useSelector((state) => state.auth.user);
  const userRole = user?.role || 'user';
  const jobs = getAllJobs();

  const getPageTitle = () => {
    switch (userRole) {
      case 'admin':
        return 'Manage All Job Postings';
      case 'hr':
        return 'Find & Manage Your Job Listings with Ease';
      case 'user':
        return 'Job Listings Dashboard';
      default:
        return 'Job Listings';
    }
  };

  const getPageDescription = () => {
    switch (userRole) {
      case 'admin':
        return 'View and manage all job postings across the platform.';
      case 'hr':
        return 'Post new jobs, track applications, and manage all your listings in one simple dashboard.';
      case 'user':
        return 'Manage your job List';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0C0C0C] mb-2">
            {getPageTitle()}
          </h1>
          <p className="text-gray-600">
            {getPageDescription()}
          </p>
        </div>
          <button className="px-6 py-2 bg-[#063D2E] text-white font-semibold rounded-lg hover:bg-[#052d24] transition-colors cursor-pointer whitespace-nowrap">
            Add Job Post
          </button>
      </div>

      {/* Jobs Grid */}
      <JobsGrid jobs={jobs} isFromDashboard={true} />
    </div>
  );
};

export default JobListing;
