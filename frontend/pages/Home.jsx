import React from 'react'
import About from '../component/About.jsx';
import Hero from '../component/Hero.jsx';
import Footer from '../component/Footer.jsx';
import Navbar from '../component/Navbar.jsx';
import Project from '../component/Project.jsx';
import Contact from '../component/contact.jsx';
const Home = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home