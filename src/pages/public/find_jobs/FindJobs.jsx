
import React, { useState, useEffect } from 'react'
import FindJobsBanner from './components/FindJobsBanner'
import JobsFilterBar from './components/JobsFilterBar'
import JobsGrid from '../../../components/common/JobsGrid'
import Pagination from '../../../components/common/Pagination'

const FindJobs = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 10

	// Scroll to top when page changes
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [currentPage])
	const allJobs = [
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
		},
		{
			id: 5,
			title: "UX/UI Designer",
			company: "Design Innovations",
			location: "Seattle, WA",
			description: "Create beautiful and intuitive user experiences for web and mobile applications.",
			type: "FULL-TIME",
			postedDaysAgo: "3 days ago",
			logo: "/home/demo_company_log_1.png"
		},
		{
			id: 6,
			title: "Backend Engineer",
			company: "CloudTech Solutions",
			location: "Portland, OR",
			description: "Build scalable backend systems and APIs using Node.js and cloud technologies.",
			type: "FULL-TIME",
			postedDaysAgo: "5 days ago",
			logo: "/home/demo_company_log_2.png"
		},
		{
			id: 7,
			title: "DevOps Engineer",
			company: "Infrastructure Pro",
			location: "Seattle, WA",
			description: "Manage cloud infrastructure and CI/CD pipelines for enterprise applications.",
			type: "FULL-TIME",
			postedDaysAgo: "6 days ago",
			logo: "/home/demo_company_log_3.png"
		},
		{
			id: 8,
			title: "Data Scientist",
			company: "Analytics Hub",
			location: "Portland, OR",
			description: "Analyze large datasets and build machine learning models to drive business insights.",
			type: "FULL-TIME",
			postedDaysAgo: "7 days ago",
			logo: "/home/demo_company_log_4.png"
		},
		{
			id: 9,
			title: "Product Manager",
			company: "Tech Innovators",
			location: "Seattle, WA",
			description: "Lead product strategy and roadmap for our flagship SaaS platform.",
			type: "FULL-TIME",
			postedDaysAgo: "8 days ago",
			logo: "/home/demo_company_log_1.png"
		},
		{
			id: 10,
			title: "QA Engineer",
			company: "Quality Assurance Inc",
			location: "Portland, OR",
			description: "Ensure software quality through comprehensive testing and automation.",
			type: "FULL-TIME",
			postedDaysAgo: "9 days ago",
			logo: "/home/demo_company_log_2.png"
		},
		{
			id: 11,
			title: "Frontend Engineer",
			company: "Web Builders",
			location: "Seattle, WA",
			description: "Build responsive and performant web applications using modern frameworks.",
			type: "FULL-TIME",
			postedDaysAgo: "11 days ago",
			logo: "/home/demo_company_log_3.png"
		},
		{
			id: 12,
			title: "Full Stack Engineer",
			company: "Startup Hub",
			location: "Portland, OR",
			description: "Work on both frontend and backend to build complete web solutions.",
			type: "FULL-TIME",
			postedDaysAgo: "12 days ago",
			logo: "/home/demo_company_log_4.png"
		}
	]

	// Pagination logic
	const totalPages = Math.ceil(allJobs.length / itemsPerPage)
	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage
	const currentJobs = allJobs.slice(startIndex, endIndex)

	const handlePageChange = (page) => {
		setCurrentPage(page)
	}

	return (
		<main>
			<FindJobsBanner
				bgImage="/find_jobs/find_jobs_banner.png"
				badge="Open Opportunities"
				title="Browse Jobs"
				subtitle="Explore jobs by location, role, and company"
			/>
			{/* Filter Bar */}
			<div className="container mx-auto px-6 py-8">
				<JobsFilterBar onSearch={() => {}} />
			</div>
			{/* Jobs Section */}
			<section className="container mx-auto px-6 md:py-12">
				<div className="mb-6">
					<h2 className="text-2xl font-semibold text-[#063D2E] mb-2">
						Showing {currentJobs.length} jobs in PNW
					</h2>
					<p className="text-sm text-[#484849]">
						Page {currentPage} of {totalPages}
					</p>
				</div>

				{/* Jobs Grid */}
				<JobsGrid jobs={currentJobs} />

				{/* Pagination */}
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
					siblingCount={1}
				/>
			</section>
		</main>
	)
}

export default FindJobs
