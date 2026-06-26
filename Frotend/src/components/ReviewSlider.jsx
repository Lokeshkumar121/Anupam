import { useState, useEffect } from "react";
import "./ReviewSlider.css";

const reviews = [
  {
    id: 1,
    image: "/Img/I4.jpg",
    name: "Sarah M",
    role: "Teeth Whitening Patient",
    review:
      "Amazing experience! The team is caring, gentle, and professional. My smile has never looked better.",
  },
  {
    id: 2,
    image: "/Img/I9.jpg",
    name: "John Smith",
    role: "Dental Implant Patient",
    review:
      "Excellent service and friendly staff. The entire procedure was smooth and painless.",
  },
  {
    id: 3,
    image: "/Img/I7.jpg",
    name: "Emily Johnson",
    role: "Orthodontic Patient",
    review:
      "Highly recommend this clinic. Very professional doctors and modern facilities.",
  },
  {
    id: 4,
    image: "/Img/I10.jpg",
    name: "Lokesh ",
    role: "Dental",
    review:
      "Highly recommend this clinic. Very professional doctors and modern facilities.",
  },
];

export default function ReviewSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const review = reviews[activeIndex];

  return (
    <section className="review-section">
      <div className="review-container">

        <div className="review-image">
          <img src={review.image} alt={review.name} />
        </div>

        <div className="review-content">
          <span className="quote">❝</span>

          <p key={activeIndex} className="review-text fade">
            {review.review}
          </p>

          <div className="review-author">
            <h4>{review.name}</h4>
            <span>{review.role}</span>
          </div>
        </div>

      </div>
    </section>
  );
}