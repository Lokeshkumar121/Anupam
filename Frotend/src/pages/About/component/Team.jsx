import React from "react";
import "./Team.css";

const Team = () => {
  const doctors = [
    {
      img: "/about/Doctor1.jpg",
      name: "Dr. John Smith",
      role: "Lead Dentist",
    },
    {
      img: "/about/Docotor2.jpg",
      name: "Dr. Emily Lee",
      role: "Orthodontist",
    },
    {
      img: "/about/Doctor3.jpg",
      name: "Dr. Sarah Thompson",
      role: "Registered Hygienist",
    },
    {
      img: "/about/Doctor4.jpg",
      name: "Dr. Askary",
      role: "Orthodontist",
    },
  ];

  return (
    <section className="team-section">
      <div className="team-container">

        <span className="team-tag">
          # OUR TEAM
        </span>

        <h2 className="team-heading">
          Your trusted dental <br />
          professionals
        </h2>

        <div className="team-grid">
          {doctors.map((doctor, index) => (
            <div className="team-card" key={index}>

              <div className="team-image">
                <img src={doctor.img} alt={doctor.name} />
              </div>

              <div className="team-info">
                <h3>{doctor.name}</h3>
                <p>{doctor.role}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;