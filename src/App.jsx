import React from 'react'
import Navbar from './Componants/Navbar/Navbar'
import './index.css'
import { Hero } from './Componants/Hero/Hero'
import Programs from './Componants/Programs/Programs'
import Title from './Componants/Title/Title'
import About from './Componants/About/About'
import Campus from './Componants/Campus/Campus'
import Testimonials from './Componants/Testimonials/Testimonials'
import Contact from './Componants/Contact/Contact'
import Footer from './Componants/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' Title='What We Offer' />
        <Programs/>
        <About/>
        <Title subTitle='Gallery' Title='Campus Photos' />
        <Campus/>
        <Title subTitle='Testimonials' Title='What Student Says' />
        <Testimonials/>
        <Title subTitle='Contact Us' Title='Get in Touch' />
        <Contact/>
        <Footer/>

      </div>
        
    </div>
  )
}

export default App