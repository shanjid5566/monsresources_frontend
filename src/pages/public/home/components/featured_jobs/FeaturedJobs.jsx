import React from 'react'
import JobsGrid from '../../../../../components/common/JobsGrid'

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
      logo: "/home/demo_company_log_1.png"
    },
    {
      id: 2,
      title: "Product Designer",
      company: "Creative Portland",
      location: "Portland, OR",
      description: "Join our design team to revolutionize how people connect in the Pacific Northwest through beautiful and functional UX.",
      type: "FULL-TIME",
      postedDaysAgo: "1 day ago",
      logo: "/home/demo_company_log_2.png"
    },
    {
      id: 3,
      title: "Marketing Specialist",
      company: "Banner Media",
      location: "Portland, OR",
      description: "Drive growth and brand awareness for the top tech companies in the PNW area.",
      type: "FULL-TIME",
      postedDaysAgo: "4 days ago",
      logo: "/home/demo_company_log_3.png"
    },
    {
      id: 4,
      title: "Mobile App Developer",
      company: "Evergreen Apps",
      location: "Portland, OR",
      description: "Develop high-performance iOS and Android applications using React Native.",
      type: "FULL-TIME",
      postedDaysAgo: "10 days ago",
      logo: "/home/demo_company_log_4.png"
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
        <JobsGrid jobs={jobs} />
      </div>
    </section>
  )
}

export default FeaturedJobs
