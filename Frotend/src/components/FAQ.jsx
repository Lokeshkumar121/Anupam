import React, { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqData = [
    {
        id: 1,
        question: "How do I schedule an appointment?",
        answer: "You can schedule an appointment by calling our office directly at +(1234)-123-56 or by using our online booking system. We offer flexible scheduling options including early morning and evening appointments to accommodate your busy schedule."
    },
    {
        id: 2,
        question: "What should I bring to my first visit?",
        answer: "For your first visit, please bring your insurance card, a valid ID, and any previous dental records if available. We also recommend arriving 15 minutes early to complete any necessary paperwork."
    },
    {
        id: 3,
        question: "Do you accept dental insurance?",
        answer: "Yes, we accept most major dental insurance plans. We also offer flexible payment options and financing plans to make dental care accessible for everyone. Our team can help you understand your coverage and benefits."
    },
    {
        id: 4,
        question: "What dental services do you offer?",
        answer: "We offer a comprehensive range of dental services including routine check-ups, teeth cleaning, teeth whitening, orthodontics, dental implants, emergency care, fillings & restorations, and cosmetic dentistry."
    },
    {
        id: 5,
        question: "How often should I visit the dentist?",
        answer: "We recommend visiting the dentist every 6 months for routine check-ups and professional cleaning. However, depending on your specific dental health needs, your dentist may recommend more frequent visits."
    },
    {
        id: 6,
        question: "What payment options are available?",
        answer: "We accept cash, credit cards, and most major insurance plans. We also offer flexible financing options through third-party providers to help make dental care affordable."
    }
];

const FAQ = () => {
    const [activeId, setActiveId] = useState(null);
    //   const [heights, setHeights] = useState({});
    const sectionRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('faq-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const els = sectionRef.current?.querySelectorAll('.faq-reveal');
        els?.forEach((el) => observer.observe(el));

        // Measure heights of all answers


        return () => observer.disconnect();
    }, []);

const toggleFAQ = (id) => {
  console.log("Current:", activeId);
  console.log("Clicked:", id);

  setActiveId(prev => prev === id ? null : id);
};

    return (
        <section className="faq-section" ref={sectionRef}>
            <div className="faq-container">

                {/* Header */}
                <div className="faq-header faq-reveal">
                    <span className="faq-chip">✦ FAQ</span>
                    <h2 className="faq-heading">
                        Frequently Asked 
                        <span className="faq-accent"> Questions</span>
                    </h2>
                    <p className="faq-subtitle">
                        Find answers to the most common questions about our dental services.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`faq-item  ${activeId === item.id ? 'active' : ''}`}
                            style={{ transitionDelay: `${0.1 + index * 0.05}s` }}
                        >
                            <button
                            type="button"
                                className="faq-question"
                                onClick={() => toggleFAQ(item.id)}
                            >
                                <span className="faq-q-text">{item.question}</span>
                                <span className="faq-icon">
                                    {activeId === item.id ? (
                                        <Minus size={20} />
                                    ) : (
                                        <Plus size={20} />
                                    )}
                                </span>
                            </button>
                            <div
                                className="faq-answer"
                                style={{
                                    maxHeight: activeId === item.id ? "500px" : "0px",
                                }}
                            >
                                <div className="faq-answer-inner">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="faq-bottom faq-reveal" style={{ transitionDelay: '0.4s' }}>
                    <p className="faq-bottom-text">
                        Still have questions? We're here to help!
                    </p>
                    <a href="" className="faq-bottom-btn">
                        Call  
                        <span className="faq-btn-arrow"></span>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default FAQ;