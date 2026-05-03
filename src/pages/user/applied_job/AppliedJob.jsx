import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Clock, CheckCircle2 } from "lucide-react";

const AppliedJob = () => {
  const navigate = useNavigate();

  // Sample applied jobs data
  const [appliedJobs] = useState([
    {
      id: 1,
      title: "Senior Frontend Engineer",
      company: "TechFlow",
      location: "Seattle, WA",
      logo: "https://ui-avatars.com/api/?name=TechFlow&background=FF6B35&color=fff&bold=true&size=128",
      postedDaysAgo: "2 days ago",
      appliedDate: "2024-08-12",
      confirmationId: "PNW-SK82N1",
      status: "pending",
    },
    {
      id: 2,
      title: "Product Designer",
      company: "Creative Portland",
      location: "Portland, OR",
      logo: "https://ui-avatars.com/api/?name=CP&background=004E89&color=fff&bold=true&size=128",
      postedDaysAgo: "1 day ago",
      appliedDate: "2024-08-13",
      confirmationId: "PNW-HB2M1L",
      status: "pending",
    },
    {
      id: 3,
      title: "UX Research Manager",
      company: "DesignHub",
      location: "Remote",
      logo: "https://ui-avatars.com/api/?name=DH&background=1B9E77&color=fff&bold=true&size=128",
      postedDaysAgo: "3 days ago",
      appliedDate: "2024-08-11",
      confirmationId: "PNW-RX45K9",
      status: "under-review",
    },
  ]);

  const handleViewPosting = (jobId) => {
    navigate(`/jobs/${jobId}`, { state: { fromAppliedJobs: true } });
  };

  return (
    <div className="min-h-screen ">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B0B0B] mb-2">
            My Applications
          </h1>
          <p className="text-base text-[#484849]">
            Track the status of your job applications in the PNW region.
          </p>
        </div>

        {/* Applied Jobs List */}
        <div className="space-y-4">
          {appliedJobs.length === 0 ? (
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
            appliedJobs.map((job) => (
              <div
                key={job.id}
                className="bg-[#EBE5D9] rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Logo and Job Title */}
                  <div className="flex gap-4 flex-1">
                    {/* Logo */}
                    <div className="shrink-0 w-16 h-16 bg-[#063D2E] rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Job Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-[#0B0B0B] mb-2">
                        {job.title}
                      </h3>

                      {/* Company and Location */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2 text-sm text-[#484849]">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} className="text-[#063D2E]" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} className="text-[#063D2E]" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} className="text-[#063D2E]" />
                          <span>Published {job.postedDaysAgo}</span>
                        </div>
                      </div>

                      {/* Applied Date */}
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 size={16} className="text-[#063D2E]" />
                        <span className="text-[#484849]">
                          Applied on: <span className="font-semibold">{job.appliedDate}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* View Posting Button */}
                  <div className="flex sm:flex-col gap-2">
                    <button
                      onClick={() => handleViewPosting(job.id)}
                      className="flex-1 sm:flex-none px-6 py-2 bg-[#063D2E] text-white font-semibold rounded-lg hover:bg-[#052d24] transition-colors cursor-pointer whitespace-nowrap text-sm"
                    >
                      View Posting
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
