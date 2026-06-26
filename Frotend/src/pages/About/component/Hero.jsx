import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './AboutHero.css';

const AboutHero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-hero-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll('.about-hero-reveal');
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-hero-section" ref={sectionRef}>
      {/* Background Div with gradient */}
      <div className="about-hero-bg">
        <div className="about-hero-bg-content">
          <span className="about-hero-tag"># ABOUT US</span>
          <h1 className="about-hero-title">
            Committed to your <br />
            <span className="about-hero-accent">smile and health</span>
          </h1>
        </div>
      </div>

      {/* Main Content - Overlay Card */}
      <div className="about-hero-container">
        <div className="about-hero-card">

          {/* Left - Rectangle with Image */}
          <div className="about-hero-left about-hero-reveal">
            <div className="about-hero-image-box">
              <img
                src="/about/Abouthero.avif"
                alt="Doctor with patient"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="about-hero-right about-hero-reveal">

            <div className="about-card about-card-top">
              <img src="/about/heroicon.svg" alt="" height="30px" width="30px"/> <br />
              <h3 className="about-hero-mission-title">

                Our Mission & Vision
              </h3>

              <p className="about-hero-description">
                At ApexCare, we are dedicated to providing personalised,
                compassionate dental care using the latest technology.
                Our goal is to help you achieve a healthy, confident smile
                while building lasting relationships based on trust,
                respect, and excellence.
              </p>
            </div>

            <div className="about-card about-card-bottom">

              <div className="about-hero-users">
                <div className="about-hero-user-avatar">
                  <img src="/about/U1.webp" alt="" />
                </div>

                <div className="about-hero-user-avatar">
                  <img src="/about/U2.webp" alt="" />
                </div>

                <div className="about-hero-user-avatar">
                  <img src="/about/U3.webp" alt="" />
                </div>

                <span className="about-hero-user-count">
                  Join 5,000+ satisfied members
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;