import React from 'react'
import Banner from './components/Banner/Banner'
import HowItWorks from './components/how_it_works/HowItWorks'
import FeaturedJobs from './components/featured_jobs/FeaturedJobs'

const Home = () => {
  return (
    <main>
      <Banner />
      <HowItWorks />
      <FeaturedJobs />
        <div className='min-h-screen'></div>
    </main>
  )
}

export default Home
