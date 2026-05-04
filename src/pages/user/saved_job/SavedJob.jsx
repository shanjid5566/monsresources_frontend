import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import JobsGrid from "../../../components/common/jobs/JobsGrid";
import { getAllJobs } from '../../../data/jobsData';

const SavedJob = () => {
  const navigate = useNavigate();
    const jobs = getAllJobs();


  return (
    <div className="min-h-screen">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B0B0B] mb-2">
            Saved Post
          </h1>
          <p className="text-base text-[#484849]">
            Save this post for later reference
          </p>
        </div>

        {/* Saved Jobs Grid */}
        {jobs.length === 0 ? (
          <div className="bg-[#EBE5D9] rounded-xl p-8 text-center">
            <p className="text-base text-[#484849]">
              You haven't saved any jobs yet.
            </p>
            <button
              onClick={() => navigate("/find-jobs")}
              className="mt-4 px-6 py-2 bg-[#063D2E] text-white font-semibold rounded-lg hover:bg-[#052d24] transition-colors cursor-pointer"
            >
              Browse Jobs
            </button>
          </div>
        ) : (
          <JobsGrid jobs={jobs} isFromSavedJobs={true} />
        )}
      </div>
    </div>
  );
};

export default SavedJob;
