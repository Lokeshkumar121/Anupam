// GallerySection.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./GallerySection.css";

const GallerySection = () => {
  const navigate = useNavigate();

  // Gallery images data - 6 images
  const galleryImages = [
    {
      id: 1,
      title: "Smile Makeover",
      category: "Cosmetic",
      image: "/Img/I1.webp",
      description: "Complete smile transformation with veneers"
    },
    {
      id: 2,
      title: "Dental Implants",
      category: "Surgery",
      image: "/Img/I3.jpg",
      description: "Permanent tooth replacement solution"
    },
    {
      id: 3,
      title: "Teeth Whitening",
      category: "Cosmetic",
      image: "/Img/I4.jpg",
      description: "Professional teeth whitening treatment"
    },
    {
      id: 4,
      title: "Orthodontics",
      category: "Treatment",
      image: "/Img/I17.jpg",
      description: "Braces and clear aligners for perfect smile"
    },
    {
      id: 5,
      title: "Root Canal",
      category: "Treatment",
      image: "/Img/I6.jpg",
      description: "Pain-free root canal treatment"
    },
    {
      id: 6,
      title: "Pediatric Care",
      category: "Kids",
      image: "/Img/I8.jpg",
      description: "Gentle dental care for children"
    }
  ];

  // State for carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Auto-slide effect - infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  // Next slide - wraps around
  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= galleryImages.length - 3) {
        return 0;
      }
      return prevIndex + 1;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Previous slide - wraps around
  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return Math.max(0, galleryImages.length - 3);
      }
      return prevIndex - 1;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Get current 3 images to display
  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % galleryImages.length;
      visible.push(galleryImages[index]);
    }
    return visible;
  };

  // Handle image click - open full view
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Close full view
  const closeFullView = () => {
    setSelectedImage(null);
  };

  // Navigate through full view
  const navigateFullView = (direction) => {
    if (!selectedImage) return;
    const currentId = selectedImage.id;
    const currentIdx = galleryImages.findIndex(img => img.id === currentId);
    let newIdx;
    if (direction === 'next') {
      newIdx = (currentIdx + 1) % galleryImages.length;
    } else {
      newIdx = (currentIdx - 1 + galleryImages.length) % galleryImages.length;
    }
    setSelectedImage(galleryImages[newIdx]);
  };

  // Keyboard support for full view
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeFullView();
        if (e.key === 'ArrowRight') navigateFullView('next');
        if (e.key === 'ArrowLeft') navigateFullView('prev');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  // Handle "View Gallery" button - navigation
  const handleViewGallery = (e) => {
    // If you want to do any extra logic before navigating
    console.log("Navigating to gallery page...");
    // The Link component will handle the navigation
    // You can also use navigate('/gallery') if you prefer
    // navigate('/gallery');
  };

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        {/* Section Header */}
        <div className="gallery-header">
          <span className="gallery-tag"># OUR GALLERY</span>
          <h2 className="gallery-title">
            Smile Transformations <br />
            <span className="gallery-title-highlight">Before & After</span>
          </h2>
          <p className="gallery-subtitle">
            See real results from our happy patients
          </p>
        </div>

        {/* Gallery Slider */}
        <div className="gallery-slider-wrapper">
          <div className="gallery-slider">
            {/* Previous Button */}
            <button className="gallery-nav-btn prev-btn" onClick={handlePrev}>
              <i className="fas fa-chevron-left"></i>
            </button>

            {/* Images Container */}
            <div className="gallery-images-container">
              <div className="gallery-images-track">
                {getVisibleImages().map((img, index) => (
                  <div 
                    className="gallery-image-card" 
                    key={`${img.id}-${index}`}
                    onClick={() => handleImageClick(img)}
                  >
                    <div className="gallery-image-wrapper">
                      <img src={img.image} alt={img.title} loading="lazy" />
                      <div className="gallery-image-overlay">
                
                     
                      
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button className="gallery-nav-btn next-btn" onClick={handleNext}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Dots Indicator */}
          {/* <div className="gallery-dots">
            {Array.from({ length: galleryImages.length }).map((_, index) => (
              <button
                key={index}
                className={`gallery-dot ${index === currentIndex || 
                  (currentIndex <= galleryImages.length - 3 && index >= currentIndex && index < currentIndex + 3) ||
                  (currentIndex > galleryImages.length - 3 && (index >= currentIndex || index < (currentIndex + 3) % galleryImages.length))
                  ? 'active' : ''}`}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 500);
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>

        {/* View Gallery Button with Link - WORKING */}
        <div className="gallery-btn-wrapper">
          <Link to="/gallery" className="gallery-link">
            <button className="gallery-view-btn" onClick={handleViewGallery}>
              <i className="fas fa-images"></i>
              View Full Gallery
              <i className="fas fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>

      {/* Full Image Modal */}
      {selectedImage && (
        <div className="gallery-modal" onClick={closeFullView}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={closeFullView}>
              <i className="fas fa-times"></i>
            </button>
            
            <button 
              className="gallery-modal-nav prev-modal" 
              onClick={(e) => {
                e.stopPropagation();
                navigateFullView('prev');
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="gallery-modal-image-wrapper">
              <img src={selectedImage.image} alt={selectedImage.title} />
              <div className="gallery-modal-info">
                <span className="gallery-modal-category">{selectedImage.category}</span>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </div>

            <button 
              className="gallery-modal-nav next-modal" 
              onClick={(e) => {
                e.stopPropagation();
                navigateFullView('next');
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;