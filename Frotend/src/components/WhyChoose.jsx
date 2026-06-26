import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Microscope, HandHeart, BadgePercent, Calendar, Star, Users, Award } from 'lucide-react';
import './WhyChoose.css';

const WhyChoose = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('wc-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const els = sectionRef.current?.querySelectorAll('.wc-reveal');
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <ShieldCheck className="wc-feat-ico" />,
      title: "Experienced & Caring Dentists",
      desc: "With over 25 years of experience, our team provides expert care with a gentle touch."
    },
    {
      icon: <Microscope className="wc-feat-ico" />,
      title: "State-of-the-Art Technology",
      desc: "We use the latest dental technology to provide precise, efficient treatments."
    },
    {
      icon: <HandHeart className="wc-feat-ico" />,
      title: "Comprehensive Care for the Whole Family",
      desc: "From routine check-ups to advanced treatments for all ages."
    },
    {
      icon: <BadgePercent className="wc-feat-ico" />,
      title: "Affordable & Transparent Pricing",
      desc: "No hidden charges, no surprise bills — ever."
    }
  ];

  return (
    <section className="wc-section" ref={sectionRef}>
      <div className="wc-inner">

        {/* Main Card Wrapper */}
        <div className="wc-card-wrapper wc-reveal">

          {/* Header Row */}
          <div className="wc-header-row">
            <div className="wc-header-left">
              <span className="wc-chip">✦ WHY CHOOSE US</span>
              <h2 className="wc-heading">
                The top reasons <br />
                <span className="wc-accent">our patients love us</span>
              </h2>
            </div>
            <div className="wc-header-right">
              <a href="/book" className="wc-schedule-link">
                <Calendar className="wc-schedule-icon" />
                Schedule Your Visit
                <span className="wc-schedule-arrow">→</span>
              </a>
            </div>
          </div>

          {/* Features Grid - 4 Cards */}
          <div className="wc-features-grid">
            {features.map((feature, index) => (
              <div 
                className="wc-feature-card wc-reveal" 
                key={index}
                style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
              >
                <div className="wc-feature-icon">
                  {feature.icon}
                </div>
                <h3 className="wc-feature-title">{feature.title}</h3>
                <p className="wc-feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom: Certification */}
          <div className="wc-bottom-section wc-reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="wc-certification">
              <span className="wc-cert-icon">✓</span>
              <span className="wc-cert-text">Certified by the American Dental Association</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;