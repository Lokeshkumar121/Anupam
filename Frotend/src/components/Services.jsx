import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

import services from "../data/servicesData.js"

// Images for first 6 services only
const serviceImages = {
  1: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=1000&fit=crop&q=85",
  2: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop&q=85",
  3: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=1000&fit=crop&q=85",
  4: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=1000&fit=crop&q=85",
  5: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=1000&fit=crop&q=85",
  6: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&h=1000&fit=crop&q=85"
};

// Default image for fallback
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=1000&fit=crop&q=85";

const Services = () => {
  // Only show first 6 services
  const displayedServices = services.slice(0, 6);
  const [activeService, setActiveService] = useState(displayedServices[0]?.id || 1);

  // Get current service details
  const currentService = services.find(s => s.id === activeService);

  return (
    <section className="svc-section">
      <div className="svc-container">

        <div className="svc-head">
          <div className="svc-head-left">
            <span className="svc-hash"># TREATMENTS</span>
            <h2 className="svc-head-title">
              Comprehensive dental <br />
              care for your smile
            </h2>
          </div>
          <Link to="/treatments" className="svc-hero-btn">
            <span className="svc-btn-text">
              <span>More Treatments</span>
              <span>More Treatments</span>
            </span>
            <span className="svc-btn-icon">↗</span>
          </Link>
        </div>

        <div className="svc-body">

          {/* LEFT — plain list with bottom borders */}
          <div className="svc-list">
            {displayedServices.map((s) => (
              <Link
                key={s.id}
                to={`/treatments/${s.slug}`}
                className={`svc-list-item ${activeService === s.id ? 'svc-list-item-on' : ''}`}
                onMouseEnter={() => setActiveService(s.id)}
              >
                <span className="svc-list-num">{String(s.id).padStart(2, '0')}</span>
                <span className="svc-list-label">{s.title}</span>
              </Link>
            ))}
          </div>

          {/* CENTER — medium portrait image */}
          <div className="svc-img-col">
            <img
              key={activeService}
              className="svc-img"
              src={serviceImages[activeService] || DEFAULT_IMAGE}
              alt={currentService?.title || "Service"}
            />
          </div>

          {/* RIGHT — card aligned to bottom */}
          <div className="svc-info-col">
            <div className="svc-info-card">
            
         
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;