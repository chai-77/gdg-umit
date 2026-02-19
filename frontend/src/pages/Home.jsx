import React from 'react';
import Hero from '../components/home/Hero';
import Upcoming from '../components/home/Upcoming';
import About from '../components/home/About';
import FAQ from '../components/home/FAQ';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Upcoming/>
      <About/>
      <FAQ/>
    </div>
  )
}

export default Home
