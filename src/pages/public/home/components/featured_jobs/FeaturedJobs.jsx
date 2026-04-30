import React from 'react'
import { MapPin, Clock } from 'lucide-react'

const FeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      company: "TechFlow Seattle",
      location: "Seattle, WA",
      description: "We are looking for a Senior Frontend Engineer specialized in React and modern tools to build immersive experiences for our cloud platform.",
      type: "FULL-TIME",
      postedDaysAgo: "2 days ago",
      logoPlaceholder: "R"
    },
    {
      id: 2,
      title: "Product Designer",
      company: "Creative Portland",
      location: "Portland, OR",
      description: "Join our design team to revolutionize how people connect in the Pacific Northwest through beautiful and functional UX.",
      type: "FULL-TIME",
      postedDaysAgo: "1 day ago",
      logoPlaceholder: "C"
    },
    {
      id: 3,
      title: "Marketing Specialist",
      company: "Banner Media",
      location: "Portland, OR",
      description: "Drive growth and brand awareness for the top tech companies in the PNW area.",
      type: "FULL-TIME",
      postedDaysAgo: "4 days ago",
      logoPlaceholder: "B"
    },
    {
      id: 4,
      title: "Mobile App Developer",
      company: "Evergreen Apps",
      location: "Portland, OR",
      description: "Develop high-performance iOS and Android applications using React Native.",
      type: "FULL-TIME",
      postedDaysAgo: "10 days ago",
      logoPlaceholder: "E"
    }
  ]

  return (
    <section className="w-full pb-16 lg:pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#063D2E] mb-12">
          Featured Jobs Listing
        </h2>

        {/* Jobs Grid */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="flex gap-4 sm:gap-6 p-5 sm:p-6 bg-[#EBE5D9] rounded-lg hover:shadow-md transition-shadow"
            >
              {/* Logo */}
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#063D2E] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">
                  {job.logoPlaceholder}
                </span>
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
                  <button className="px-6 py-2 bg-[#063D2E] text-white font-semibold rounded hover:bg-[#052d24] transition-colors cursor-pointer whitespace-nowrap">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedJobs
