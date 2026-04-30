import React from 'react'
import Banner from './components/Banner/Banner'
import HowItWorks from './components/how_it_works/HowItWorks'

const Home = () => {
  return (
    <main>
      <Banner />
      <HowItWorks />
        <div className='min-h-screen'></div>
    </main>
  )
}

export default Home
