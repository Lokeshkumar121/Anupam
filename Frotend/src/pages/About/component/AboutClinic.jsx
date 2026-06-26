import React from "react";
import "./AboutClinic.css";

const AboutClinic = () => {
  return (
    <section className="about-clinic">
      <div className="about-container">

        {/* Left Side Image */}
        <div className="about-image">
          <img
            src="/about/cinic.webp"
            alt="Doctor"
          />
        </div>

        {/* Right Side Content */}
        <div className="about-content">

          <span className="about-tag">
            # ABOUT APEXCARE
          </span>

          <h2>
            Innovative tools in a <br />
            modern environment
          </h2>

          <p>
            At ApexCare, we believe that cutting-edge technology and a
            comfortable environment are essential to delivering the best
            healthcare experience. Our clinic is equipped with the latest
            advancements to ensure precise diagnoses and effective
            treatments.
          </p>

          <ul>
            <li>✓ Digital X-Rays</li>
            <li>✓ 3D Imaging & Scanning</li>
            <li>✓ Laser Dentistry</li>
            <li>✓ Intraoral Cameras</li>
            <li>✓ Modern Facilities</li>
          </ul>

          <button className="visit-btn">
            Schedule Your Visit
            <span>↗</span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default AboutClinic;