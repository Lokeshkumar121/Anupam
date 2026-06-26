import React from 'react'
import AboutHero from "./component/Hero"
import Midtext from './component/Midtext'
import AboutClinic from './component/AboutClinic'
import { Aboutdoct } from './component/Aboutdoct'
import Team from './component/Team'
import CTASection from './component/CTASection'
const About = () => {
  return (
    <>
       <AboutHero />
       <Midtext />
       <AboutClinic />
       <Aboutdoct />
       <Team />
       <CTASection />
    </>
  )
}

export default About
