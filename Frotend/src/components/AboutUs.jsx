import React from 'react'
import { Link } from "react-router-dom";
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className='about-sectionn'>
      <div className="about-containerr">
        <div className="about-roww">
          {/* Left Side - Text */}
          <div className="about-left">
            <p className="about-sub-title animate-on-scroll"># ABOUT METIER</p>
            <h2 className="about-title animate-on-scroll delay-1">
              Your trusted partners <br />
              in dental care
            </h2>
            <p className="about-description animate-on-scroll delay-2">
              At Smile Dental Care , we believe that a healthy smile is a happy smile.
              Our dedicated team of professionals combines years of experience,
              cutting-edge technology, and a warm, caring atmosphere to ensure
              you get the best dental care possible.
            </p>
            <Link to="/book" className="hero-btn about-hero-btnn animate-on-scroll delay-3">
              <span className="btn-text">
                <span>Meet a Doctor</span>
                <span>Meet a Doctor</span>
              </span>
              <span className="btn-icon">↗</span>
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="about-right animate-on-scroll delay-2">
            <div className="about-image-wrapper">
              <div className="about-circle-bg float-slow">
                <img src="/Vedio/Circle.svg" alt="" />
              </div>
              <div className="about-doctor-image hover-zoom">
                <img src="/Vedio/Doctor.webp" alt="Doctor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs