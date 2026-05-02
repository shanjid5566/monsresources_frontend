import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import JobsGrid from '../../../components/common/JobsGrid';
import { getAllJobs } from '../../../data/jobsData';

const JobListing = () => {
  const user = useSelector((state) => state.auth.user);
  const userRole = user?.role || 'user';
  const navigate = useNavigate();
  const jobs = getAllJobs();


  const handleAddJob = () => {
    navigate('/admin/jobs/add');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0C0C0C] mb-2">
            Find & Manage Your Job Listings with Ease
          </h1>
          <p className="text-gray-600">
            Post new jobs, track applications, and manage all your listings in one simple dashboard.
          </p>
        </div>
        <div className="flex-shrink-0">
          <button 
            onClick={handleAddJob}
            className="w-full md:w-auto px-6 py-2 bg-[#063D2E] text-white font-semibold rounded-lg hover:bg-[#052d24] transition-colors cursor-pointer whitespace-nowrap">
            Add Job Post
          </button>
        </div>
      </div>

      {/* Jobs Grid */}
      <JobsGrid jobs={jobs} isFromDashboard={true} />
    </div>
  );
};

export default JobListing;
