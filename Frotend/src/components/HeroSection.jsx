import React from 'react'
import "./HeroSection.css"
import { Link } from "react-router-dom";
import Textsvg from "/Vedio/Text.svg"

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-wrap">
        <div className="hero-row">
          <div className="hero-left">
            <span className="hero-sub-title animate-on-scroll">#1 DENTAL CENTRE</span>
            
            <h1 className="hero-title animate-on-scroll delay-1">
              Brighten your <br />
              smile with <span>expert dental care</span>
            </h1>
            
            <Link to="/book" className="hero-btn animate-on-scroll delay-2">
              <span className="btn-text">
                <span>Schedule Your Visit</span>
                <span>Schedule Your Visit</span>
              </span>
              <span className="btn-icon">↗</span>
            </Link>
            
            <div className="rotating-badge animate-on-scroll delay-3">
              <img src={Textsvg} alt="Dental Badge" />
              <div className="badge-center">A</div>
            </div>
          </div>
          <div className="hero-right"></div>
        </div>
      </div>
      
      <div className="hero-cards stagger-children">
        {/* Card 1 */}
        <div className="card-large hover-scale">
          <div className="card-content">
            <h2>Caring Dentists</h2>
            <p>
              Your health and safety
              <br />
              are our top priority
            </p>
            <Link to="/" className="explore-link">
              Explore More ↗
            </Link>
          </div>

          <div className="card-mini">
            <div className="tooth-icon">
              <img src="/Vedio/tooh.svg" alt="" />
            </div>
            <p>Smiles Transformed</p>
            <h3>5,000+</h3>
          </div>

          <div className="card-image hover-zoom">
            <img src="/Vedio/Tooth.avif" alt="" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="team-card hover-scale">
          <h3>Join 5,000+</h3>
          <p>Trusted by 5,000+ teams</p>
          <div className="team-users">
            <img src="/Vedio/User1.webp" alt="" />
            <img src="/Vedio/User2.webp" alt="" />
            <img src="/Vedio/User3.webp" alt="" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="review-card hover-scale">
          <div className="quote-icon">❝</div>
          <p>
            Best dentist experience ever!
            <br />
            Friendly staff and pain-free visits.
          </p>
          <span>— Sarah M</span>
        </div>
      </div>
    </div>
  )
}

export default HeroSection