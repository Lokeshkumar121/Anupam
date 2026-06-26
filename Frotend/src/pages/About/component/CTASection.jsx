import React from "react";
import "./CTASection.css";
import { FiPhoneCall, FiArrowUpRight } from "react-icons/fi";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">

        <div className="cta-image">
          <img src="/about/Doc.webp" alt="Doctor" />
        </div>

        <div className="cta-content">

          <h2>
            Ready to transform <br />
            your smile?
          </h2>

          <p>
            Don't wait to give your smile the care it deserves.
            Schedule your appointment today and experience
            personalized dental care designed just for you.
          </p>

          <div className="cta-contact">

            <div className="cta-phone-icon">
              <FiPhoneCall />
            </div>

            <div>
              <span>Call us</span>
              <h4>+1 (555) 123-4567</h4>
            </div>

          </div>

          <button className="cta-btn">
            Schedule Your Visit

            <span>
              <FiArrowUpRight />
            </span>

          </button>

        </div>

      </div>
    </section>
  );
};

export default CTASection;