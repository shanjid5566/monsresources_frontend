import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Clock } from 'lucide-react'

const JobsGrid = ({ jobs = [], isFromDashboard = false }) => {
  const navigate = useNavigate()

  const handleViewDetails = (jobId) => {
    navigate(`/jobs/${jobId}`)
  }

  const handleEdit = (jobId) => {
    // Handle edit functionality
    console.log('Edit job:', jobId)
  }

  const handleDelete = (jobId) => {
    // Handle delete functionality
    console.log('Delete job:', jobId)
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="p-5 sm:p-6 bg-[#EBE5D9] rounded-lg hover:shadow-md transition-shadow"
        >
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex gap-3 mb-3">
              {/* Logo */}
              <div className="shrink-0 w-14 h-14 bg-[#063D2E] rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Title and Badges */}
              <div className="flex-1">
                <h3 className="text-base font-semibold text-[#063D2E] mb-2">
                  {job.title}
                </h3>
                <div className="flex gap-2">
                  <span className="text-sm font-semibold text-[#0B8B8B] bg-[#D4F1F4] px-2 py-1 rounded">
                    {job.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Company and Location */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-[#484849] mb-3">
              <span>{job.company}</span>
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{job.location}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#484849] mb-3 line-clamp-3">
              {job.description}
            </p>

            {/* Published */}
            <div className="flex items-center gap-2 text-sm text-[#386458] mb-4">
              <Clock size={14} />
              <span>Published {job.postedDaysAgo}</span>
            </div>

            {/* Button */}
            {isFromDashboard ? (
              <div className="flex gap-2 flex-wrap">
                <button 
                  onClick={() => handleEdit(job.id)}
                  className="flex-1 px-4 py-2 bg-[#D85A00] text-white font-semibold rounded hover:opacity-90 transition-opacity cursor-pointer text-sm"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(job.id)}
                  className="flex-1 px-4 py-2 bg-[#DD0303] text-white font-semibold rounded hover:opacity-90 transition-opacity cursor-pointer text-sm"
                >
                  Delete
                </button>
                <button 
                  onClick={() => handleViewDetails(job.id)}
                  className="flex-1 px-4 py-2 bg-[#063D2E] text-white font-semibold rounded hover:bg-[#052d24] transition-colors cursor-pointer text-sm"
                >
                  View Details
                </button>
              </div>
            ) : (
              <button 
                onClick={() => handleViewDetails(job.id)}
                className="w-full px-6 py-2 bg-[#063D2E] text-white font-semibold rounded hover:bg-[#052d24] transition-colors cursor-pointer"
              >
                View Details
              </button>
            )}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex gap-4 sm:gap-6">
            {/* Logo */}
            <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#063D2E] rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={job.logo}
                alt={job.company}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Job Details */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#063D2E] mb-1">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-[#484849]">
                    <span>{job.company}</span>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                <div className="inline-block">
                  <span className="text-xs sm:text-sm font-semibold text-[#386458] bg-[#E6ECEA] px-3 py-1 rounded">
                    {job.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-base text-[#484849] mb-4 line-clamp-2 max-w-2xl">
                {job.description}
              </p>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-2 text-base text-[#386458]">
                  <Clock size={16} />
                  <span className="px-2 py-1 rounded">
                    Published {job.postedDaysAgo}
                  </span>
                </div>
                
                {isFromDashboard ? (
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleEdit(job.id)}
                      className="px-6 py-2 bg-[#D85A00] text-white font-semibold rounded hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(job.id)}
                      className="px-6 py-2 bg-[#DD0303] text-white font-semibold rounded hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap"
                    >
                      Delete
                    </button>
                    <button 
                      onClick={() => handleViewDetails(job.id)}
                      className="px-6 py-2 bg-[#063D2E] text-white font-semibold rounded hover:bg-[#052d24] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      View Details
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => handleViewDetails(job.id)}
                    className="px-6 py-2 bg-[#063D2E] text-white font-semibold rounded hover:bg-[#052d24] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    View Details
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default JobsGrid
