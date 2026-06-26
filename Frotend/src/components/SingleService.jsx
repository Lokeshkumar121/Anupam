// SingleService.jsx
import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Zap, HeartPulse, CheckCircle2, ArrowRight } from 'lucide-react';
import './SingleService.css';

import servicesData from "../data/servicesData.js" // Make sure this path is correct

const SingleService = () => {
  const { slug } = useParams();
  const pageRef = useRef(null);
  
  const service = servicesData.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('svc-visible');
        });
      },
      { threshold: 0.1 }
    );

    const els = pageRef.current?.querySelectorAll('.svc-reveal');
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [slug]);

  if (!service) {
    return (
      <div className="svc-detail-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column', gap: '20px' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#0f172a' }}>Service Not Found</h2>
        <Link to="/treatments" className="svc-more-btn" style={{ fontSize: '0.85rem', padding: '12px 28px' }}>
          <ArrowLeft className="svc-ico-sm" /> Back to Treatments
        </Link>
      </div>
    );
  }

  return (
    <div className="svc-detail-page" ref={pageRef}>
      
      {/* Hero */}
      <div className="svc-detail-hero">
        <div className="svc-detail-hero-overlay"></div>
        <div className="svc-detail-hero-content svc-reveal">
          <Link to="/treatments" className="svc-back-link">
            <ArrowLeft className="svc-ico-sm" />
            <span>Back to All Treatments </span>
          </Link>
          <h1 className="svc-detail-hero-title">{service.title}</h1>
          <p className="svc-detail-hero-desc">{service.desc}</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="svc-detail-inner">
        <div className="svc-detail-grid">
          
          {/* Left Content */}
          <div className="svc-detail-main svc-reveal" style={{ transitionDelay: '0.1s' }}>
            <h3 className="svc-detail-sub-heading">About This Treatment</h3>
            <p className="svc-detail-full-desc">{service.longDesc || service.desc}</p>

            <h3 className="svc-detail-sub-heading" style={{ marginTop: '32px' }}>Overview</h3>
            <p className="svc-detail-full-desc">{service.overview}</p>

            <h3 className="svc-detail-sub-heading" style={{ marginTop: '32px' }}>Treatment Process</h3>
            <p className="svc-detail-full-desc">{service.treatment}</p>

            <h3 className="svc-detail-sub-heading" style={{ marginTop: '32px' }}>Procedure</h3>
            <p className="svc-detail-full-desc">{service.procedure}</p>

            <h3 className="svc-detail-sub-heading" style={{ marginTop: '32px' }}>Benefits</h3>
            <div className="svc-detail-points-grid">
              {service.benefits && service.benefits.map((benefit, i) => (
                <div className="svc-detail-point-item" key={i}>
                  <CheckCircle2 className="svc-ico-xs" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* FAQs Section */}
            {service.faqs && service.faqs.length > 0 && (
              <>
                <h3 className="svc-detail-sub-heading" style={{ marginTop: '40px' }}>Frequently Asked Questions</h3>
                <div className="svc-detail-faqs">
                  {service.faqs.map((faq, i) => (
                    <div className="svc-detail-faq-item" key={i}>
                      <h4 className="svc-detail-faq-question">{faq.question}</h4>
                      <p className="svc-detail-faq-answer">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="svc-detail-sidebar svc-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="svc-detail-card">
              <h4>Quick Facts</h4>
              
              <div className="svc-detail-fact">
                <Clock className="svc-ico-sm" />
                <div>
                  <span className="svc-detail-fact-label">Duration</span>
                  <span className="svc-detail-fact-val">{service.duration || 'Varies'}</span>
                </div>
              </div>

              <div className="svc-detail-fact">
                <Zap className="svc-ico-sm" />
                <div>
                  <span className="svc-detail-fact-label">Price Range</span>
                  <span className="svc-detail-fact-val">{service.price || 'Contact for pricing'}</span>
                </div>
              </div>

              <div className="svc-detail-fact" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                <HeartPulse className="svc-ico-sm" />
                <div>
                  <span className="svc-detail-fact-label">Recovery</span>
                  <span className="svc-detail-fact-val">{service.recovery || 'Varies per patient'}</span>
                </div>
              </div>

              <Link to="/book" className="svc-detail-book-btn">
                Book This Service <ArrowRight className="svc-ico-sm" />
              </Link>
              
              <p className="svc-detail-card-note">
                Not sure if this is right for you? Book a free consultation first.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="svc-page-bottom svc-reveal">
        <h3>Ready to get started with {service.title}?</h3>
        <p>Our specialists are here to answer any questions you might have.</p>
        <Link to="/book" className="svc-page-bottom-btn">
          Book Free Consultation <ArrowRight className="svc-ico-sm" />
        </Link>
      </div>

    </div>
  );
};

export default SingleService;