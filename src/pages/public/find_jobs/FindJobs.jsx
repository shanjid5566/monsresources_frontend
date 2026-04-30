
import React from 'react'
import FindJobsBanner from './components/FindJobsBanner'

const FindJobs = () => {
	return (
		<main>
			<FindJobsBanner
				bgImage="/find_jobs/find_jobs_banner.png"
				badge="Open Opportunities"
				title="Browse Jobs"
				subtitle="Explore jobs by location, role, and company"
			/>

			{/* Page content placeholder */}
			<section className="max-w-7xl mx-auto px-6 py-12">
				{/* job list or filters will go here */}
			</section>
		</main>
	)
}

export default FindJobs
