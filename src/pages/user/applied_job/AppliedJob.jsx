import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import JobsGrid from "../../../components/common/JobsGrid";
import { getAllJobs } from '../../../data/jobsData';

const AppliedJob = () => {
  const jobs = getAllJobs();
  const navigate = useNavigate();


  return (
    <div className="min-h-screen">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B0B0B] mb-2">
            My Applications
          </h1>
          <p className="text-base text-[#484849]">
            Track the status of your job applications in the PNW region.
          </p>
        </div>

        {/* Applied Jobs Grid */}
        {jobs.length === 0 ? (
          <div className="bg-[#EBE5D9] rounded-xl p-8 text-center">
            <p className="text-base text-[#484849]">
              You haven't applied to any jobs yet.
            </p>
            <button
              onClick={() => navigate("/find-jobs")}
              className="mt-4 px-6 py-2 bg-[#063D2E] text-white font-semibold rounded-lg hover:bg-[#052d24] transition-colors cursor-pointer"
            >
              Browse Jobs
            </button>
          </div>
        ) : (
          <JobsGrid jobs={jobs} isFromAppliedJobs={true} />
        )}
      </div>
    </div>
  );
};

export default AppliedJob;
