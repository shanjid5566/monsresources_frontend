import React from 'react'
import JobsGrid from '../../../../../components/common/jobs/JobsGrid'
import { getFeaturedJobs } from '../../../../../data/jobsData'

const FeaturedJobs = () => {
  const jobs = getFeaturedJobs()

  return (
    <section className="w-full pb-16 lg:pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#063D2E] mb-12">
          Featured Jobs Listing
        </h2>

        {/* Jobs Grid */}
        <JobsGrid jobs={jobs} />
      </div>
    </section>
  )
}

export default FeaturedJobs
