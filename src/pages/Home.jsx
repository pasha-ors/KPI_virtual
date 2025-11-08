import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Features from '../components/Features'
import DynamicContent from '../components/DynamicContent'
import Programs from '../components/Programs'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Features />
      <DynamicContent />
      <Programs />
      <Contact />
    </div>
  )
}

export default Home
