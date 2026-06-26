import "./TeamSection.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TeamSection() {

  useEffect(() => {
    // Only run on desktop
    if (window.innerWidth > 1024) {
      const trigger = ScrollTrigger.create({
        trigger: ".team-right",
        start: "top 100px",
        end: "bottom 80%",
        pin: ".team-left",
        pinSpacing: false, // ← Isko false kar diya
      });

      return () => trigger.kill();
    }
  }, []);

  const doctors = [
    {
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=80",
      name: "Dr. John Smith",
      title: "Lead Dentist",
    },
    {
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80",
      name: "Dr. Emily Carter",
      title: "Orthodontist",
    },
    {
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1200&q=80",
      name: "Dr. Michael Chen",
      title: "Periodontist",
    },
    {
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=1200&q=80",
      name: "Dr. Sarah Lee",
      title: "Cosmetic Dentist",
    },
  ];

  return (
    <section className="team-section">
      <div className="team-container">

        <div className="team-wrapper">

          <div className="team-left">
            <span className="team-tag"># OUR TEAM</span>

            <h2>
              Your trusted dental
              <br />
              professionals
            </h2>

            <p className="team-desc">
              Experienced and caring dentists dedicated to
              giving you the best smile possible.
            </p>

            <button className="team-btn">
              See a Doctor Today
            </button>
          </div>

          <div className="team-right">
            {doctors.map((doc, i) => (
              <div className="doctor-card" key={i}>
                <img src={doc.img} alt={doc.name} />

                <div className="doctor-info">
                  <h3>{doc.name}</h3>
                  <p>{doc.title}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}