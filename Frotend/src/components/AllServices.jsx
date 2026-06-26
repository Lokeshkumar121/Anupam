




// SectionHero.jsx
import React, { useState } from "react";
import "./SectionHero.css";
import { Link } from "react-router-dom";

// Data directly in the component (option 1)
// OR import from separate file (option 2 - recommended)

// Option 2: Import from separate file
// Make sure your servicesData is exported from ../data/services.js
// import servicesData from "../data/services.js";

// Option 1: Define data here (if not using separate file)
import servicesData from "../data/servicesData";

const SectionHero = () => {
  // State to manage how many services to show
  const [visibleCount, setVisibleCount] = useState(6);

  // Get current visible services using the local data
  const visibleServices = servicesData.slice(0, visibleCount);

  // Check if there are more services to show
  const hasMore = visibleCount < servicesData.length;

  // Handler for "View More" button
  const handleViewMore = () => {
    // Show all remaining services
    setVisibleCount(servicesData.length);
  };

  return (
    <section className="about-hero-section1">
      {/* Background Header with Gradient */}
      <div className="about-hero-bg1">
        <div className="about-hero-bg-content1">
          <span className="about-hero-tag1"># TREATMENTS</span>
          <h1 className="about-hero-title1">
            Expert dental treatments <br />for a brighter Smile
          </h1>
        </div>
      </div>

      {/* 4-Column Grid */}
      <div className="services-wrapper">
        {visibleServices.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-image">
              <img 
                src={service.image || "https://via.placeholder.com/300x200?text=Dental+Service"} 
                alt={service.title} 
                loading="lazy" 
              />
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link to={`/treatments/${service.slug}`}>
                <button className="read-more-btn">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ===== VIEW MORE BUTTON (appears after 6 cards) ===== */}
      {hasMore && (
        <div className="view-more-wrapper">
          <button className="view-more-btn" onClick={handleViewMore}>
            View More Treatments <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      )}
    </section>
  );
};

export default SectionHero;