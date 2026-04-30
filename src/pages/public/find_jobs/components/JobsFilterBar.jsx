import React, { useState } from 'react'
import { Search, MapPin, Briefcase, Grid3x3, Zap,LayoutGrid ,Funnel  } from 'lucide-react'

const JobsFilterBar = ({ onSearch = () => {} }) => {
  const [jobTitle, setJobTitle] = useState('')
  const [location, setLocation] = useState('')
  const [jobType, setJobType] = useState('')
  const [category, setCategory] = useState('')
  const [experience, setExperience] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch({ jobTitle, location, jobType, category, experience })
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <form onSubmit={handleSearch} className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        {/* Job Title / Keyword */}
        <div className="relative col-span-2 lg:col-span-1">
          <div className="absolute left-3 top-3 text-gray-400">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Job title / keyword"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#063D2E]"
          />
        </div>

        {/* Location */}
        <div className="relative col-span-1">
          <div className="absolute left-3 top-3 text-gray-400">
            <MapPin size={18} />
          </div>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#063D2E]"
          />
        </div>

        {/* Job Type Dropdown */}
        <div className="relative col-span-1">
          <div className="absolute left-3 top-3 text-gray-400">
            <Briefcase size={18} />
          </div>
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#063D2E]  bg-white"
          >
            <option value="">Job Type</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="remote">Remote</option>
            <option value="contract">Contract</option>
          </select>
        </div>

        {/* Category Dropdown */}
        <div className="relative col-span-1">
          <div className="absolute left-3 top-3 text-gray-400">
            <LayoutGrid  size={18} />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#063D2E]  bg-white"
          >
            <option value="">Category</option>
            <option value="engineering">Engineering</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
            <option value="hr">HR</option>
          </select>
        </div>

        {/* Experience Dropdown */}
        <div className="relative col-span-1">
          <div className="absolute left-3 top-3 text-gray-400">
            <Funnel  size={18} />
          </div>
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#063D2E]  bg-white"
          >
            <option value="">Experience</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="col-span-2 lg:col-span-1 px-6 py-2 bg-[#063D2E] text-white font-semibold rounded-lg hover:bg-[#052d24] transition-colors cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <Search size={18} />
          <span>Search</span>
        </button>
      </form>
    </div>
  )
}

export default JobsFilterBar
