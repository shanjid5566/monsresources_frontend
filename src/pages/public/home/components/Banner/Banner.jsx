import React, { useState } from "react";
import { Search } from "lucide-react";

const Banner = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", { jobTitle, location });
  };

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(/home/banner.png)` }}
      aria-label="Homepage banner"
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F0F0F] leading-tight mb-2">
          Find Your <span className="text-[#063D2E]">Next Job</span> in the
        </h1>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F0F0F] leading-tight mb-6">
          Pacific Northwest
        </h1>

        <p className="mt-2 text-base sm:text-lg text-[#0F0F0F] mb-4">
          Explore top tech jobs by location, company, and role
        </p>

        {/* Search Bar with Background Container */}
        <div className="max-w-4xl mx-auto rounded-xl bg-[#F2EFE9] bg-opacity-85 backdrop-blur-sm shadow-lg px-6 py-3">
          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="flex-1 relative">
              <Search
                size={20}
                className="absolute left-4 top-3 text-gray-400"
              />
              <input
                type="text"
                placeholder="Job title / keyword"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full pl-12 pr-4 py-3  border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#1A5F37] text-sm placeholder-gray-500 transition-all duration-200 rounded-xl"
              />
            </div>

            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3  border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#1A5F37] text-sm placeholder-gray-500 transition-all duration-200 rounded-xl"
              />
            </div>

            <button
              type="submit"
              className="px-6 sm:px-8 py-3 bg-[#1A5F37] text-white font-semibold rounded hover:bg-[#164d2e] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap shadow-md hover:shadow-lg "
            >
              <Search size={18} />
              <span>Search</span>
            </button>
          </form>
        </div>  
      </div>
    </section>
  );
};

export default Banner;
