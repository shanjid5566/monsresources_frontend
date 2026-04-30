import React from 'react'
import Banner from './components/Banner/Banner'
import HowItWorks from './components/how_it_works/HowItWorks'
import FeaturedJobs from './components/featured_jobs/FeaturedJobs'
import CTABanner from '../../../components/common/CTABanner'

const Home = () => {
  return (
    <main>
      <Banner />
      <HowItWorks />
      <FeaturedJobs />
      <CTABanner/>
    </main>
  )
}

export default Home
