import React from 'react'
import JobsFilterBar from './JobsFilterBar'

/**
 * FindJobsBanner
 * Props:
 * - bgImage: url path for background image (string)
 * - badge: small badge text (string)
 * - title: heading text (string)
 * - subtitle: subtext (string)
 * - onSearch: callback for search filter submission (function)
 */
const FindJobsBanner = ({
  bgImage = '/find_jobs/find_jobs_banner.png',
  badge = 'Open Opportunities',
  title = 'Browse Jobs',
  subtitle = 'Explore jobs by location, role, and company',
  onSearch = () => {},
}) => {
  return (
    <section className="relative w-full">
      {/* Banner Background */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-label="Find jobs banner"
      >
        <div className="relative container mx-auto px-6 py-28 lg:py-36 text-center">
          <div className="inline-block rounded-full px-3 py-1 bg-[#E6ECEA] text-[#484849] text-sm font-semibold mb-4">
            {badge}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {title}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Floating Filter Bar - Desktop Only (lg+) */}
      <div className="hidden lg:block relative container mx-auto px-6 -translate-y-1/2 z-10">
        <JobsFilterBar onSearch={onSearch} />
      </div>
    </section>
  )
}

export default FindJobsBanner