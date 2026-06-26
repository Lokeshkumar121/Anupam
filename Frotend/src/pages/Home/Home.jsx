// pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../../components/HeroSection";
import AboutUs from "../../components/AboutUs";
import WhyChoose from "../../components/WhyChoose";
import Services from "../../components/Services";
import ReviewSlider from "../../components/ReviewSlider";
import TeamSection from "../../components/TeamSection";
import FAQ from "../../components/FAQ";
import GallerySection from "../../components/GallerySection";
// import AllServices from "../../components/AllServices";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
       <HeroSection />
       <AboutUs />
       <WhyChoose />
       {/* <AllServices /> */}
       <Services />
       <ReviewSlider />
       <TeamSection /> 
       <GallerySection />
       <FAQ />
    
    </div>
  );
}

