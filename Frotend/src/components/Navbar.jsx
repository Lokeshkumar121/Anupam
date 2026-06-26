// components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo/Logo.avif";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleBookClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/book";
    }, 1200);
  };

  return (
    <nav
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] border-b border-gray-100"
          : "bg-white border-b border-gray-50"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[84px]">

          {/* ── LEFT: LOGO + NAME ── */}
          <div className="flex-1 flex items-center">
            <Link to="/" className="flex items-center gap-2.5 group">
              <img
                src={logo}
                alt="Smile Dental Care"
                className="w-12 h-12 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
              <span className="text-[1.25rem] font-bold tracking-tight text-gray-900">
                SmileDental<span className="text-blue-600">Care</span>
              </span>
            </Link>
          </div>

          {/* ── CENTER: Desktop Links ── */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-1">
       
            <NavLink to="/about" label="About" />
            <NavLink to="/treatments" label="Treatments" />
            <NavLink to="/gallery" label="Gallery" />
            <NavLink to="/blog" label="Blog" />
            <NavLink to="/case-study" label="CaseStudy" />
          </div>

          {/* ── RIGHT: Let's Talk Button with Fixed Hover ── */}
          <div className="hidden md:flex flex-1 items-center justify-end">
            <Link to={"/book"} onClick={handleBookClick}>
              <button 
                className={`
                  group relative flex items-center justify-between min-w-[160px] 
                  bg-[#dfe0ea] rounded-full pl-5 pr-1.5 py-1
                  transition-all duration-500 ease-out
                  hover:shadow-[0_8px_30px_rgba(26,31,99,0.15)] 
                  hover:scale-[1.02] hover:bg-[#d0d2e0]
                  active:scale-[0.95] active:bg-[#c5c7d6]
                  ${isLoading ? 'pointer-events-none opacity-80 scale-95' : ''}
                `}
                disabled={isLoading}
              >
                {/* Animated Border Glow */}
                <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#1a1f63] via-blue-500 to-[#1a1f63] opacity-0 group-hover:opacity-20 blur-md transition-all duration-500 group-hover:blur-xl" />
                
                {/* Hover Ripple Background */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1a1f63]/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                {/* Loading Overlay */}
                <span className={`
                  absolute inset-0 flex items-center justify-center gap-2.5
                  transition-all duration-500 rounded-full
                  ${isLoading ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
                `}>
                  <span className="relative w-5 h-5">
                    <span className="absolute inset-0 border-3 border-[#1a1f63]/20 rounded-full"></span>
                    <span className="absolute inset-0 border-3 border-[#1a1f63] border-t-transparent rounded-full animate-spin"></span>
                  </span>
                  <span className="text-[#1a1f63] font-semibold text-sm tracking-wide">
                    Connecting...
                  </span>
                </span>

                {/* Original Content - FIXED: No overflow:hidden on text */}
                <span className={`
                  flex items-center justify-between w-full
                  transition-all duration-500
                  ${isLoading ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}
                `}>
                  {/* Text Container - FIXED: Removed overflow-hidden */}
                  <span className="relative flex items-center py-1">
                    <span className="text-[15px] font-semibold text-[#1a1f63] transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-105 group-hover:text-[#0f1340]">
                      Let's Talk
                    </span>
                    
                    {/* Underline Animation */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a1f63] group-hover:w-full transition-all duration-500 ease-out" />
                  </span>

                  {/* Icon Container with Hover Effects */}
                  <div className="relative w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-[0_4px_15px_rgba(26,31,99,0.2)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#1a1f63] ml-2">
                    {/* Icon Background Pulse */}
                    <span className="absolute inset-0 rounded-full bg-[#1a1f63] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100" />
                    
                    <svg
                      className="w-5 h-5 text-[#1a1f63] transition-all duration-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 19L19 5 M19 5H9 M19 5V15"
                      />
                    </svg>
                  </div>
                </span>

                {/* Loading Pulse Ring */}
                <span className={`
                  absolute -inset-1 rounded-full border-2 border-[#1a1f63]
                  transition-all duration-1000
                  ${isLoading ? 'animate-ping opacity-60' : 'opacity-0'}
                `} />
                
                {/* Hover Glow Ring */}
                <span className="absolute -inset-1 rounded-full border border-[#1a1f63]/0 group-hover:border-[#1a1f63]/20 transition-all duration-500 group-hover:scale-105" />
              </button>
            </Link>
          </div>

          {/* ── Mobile Toggle ── */}
          <div className="flex-1 flex items-center justify-end md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              <div className="relative w-5 h-4">
                <span className={`absolute left-0 w-5 h-[2px] bg-current rounded-full transition-all duration-300 ${isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-[2px] bg-current rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"}`} />
                <span className={`absolute left-0 w-5 h-[2px] bg-current rounded-full transition-all duration-300 ${isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
     <div className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white border-t border-gray-100 px-5 pt-3 pb-6 space-y-1 shadow-[0_15px_30px_rgba(0,0,0,0.04)]">
        
          <MobileNavLink to="/about" active={location.pathname === "/about"}>About</MobileNavLink>
          <MobileNavLink to="/treatments" active={location.pathname === "/treatments"}>Treatments</MobileNavLink>
          <MobileNavLink to="/gallery" active={location.pathname === "/gallery"}>Gallery</MobileNavLink>
          <MobileNavLink to="/blog" active={location.pathname === "/blog"}>Blog</MobileNavLink>
          <MobileNavLink to="/case-study" active={location.pathname === "/contacts"}>CaseStudy</MobileNavLink>

          {/* Mobile Let's Talk Button - IMPROVED */}
          <div className="pt-4 border-t border-gray-100 mt-2">
            <Link to="/book" onClick={handleBookClick}>
              <button 
                className={`
                  w-full bg-[#dfe0ea] hover:bg-[#d0d2e0] active:scale-[0.97]
                  text-[#1a1f63] text-base font-semibold
                  flex items-center justify-between px-5 py-3.5
                  rounded-full transition-all duration-300
                  shadow-sm hover:shadow-[0_4px_20px_rgba(26,31,99,0.12)]
                  group relative overflow-hidden
                  ${isLoading ? 'pointer-events-none opacity-80' : ''}
                `}
                disabled={isLoading}
              >
                {/* Mobile Loading Overlay */}
                <span className={`
                  absolute inset-0 flex items-center justify-center gap-2.5
                  transition-all duration-500
                  ${isLoading ? 'opacity-100' : 'opacity-0'}
                `}>
                  <span className="relative w-5 h-5">
                    <span className="absolute inset-0 border-3 border-[#1a1f63]/20 rounded-full"></span>
                    <span className="absolute inset-0 border-3 border-[#1a1f63] border-t-transparent rounded-full animate-spin"></span>
                  </span>
                  <span className="text-[#1a1f63] font-semibold text-sm">
                    Connecting...
                  </span>
                </span>

                {/* Mobile Button Content */}
                <span className={`
                  flex items-center justify-between w-full
                  transition-all duration-500
                  ${isLoading ? 'opacity-0' : 'opacity-100'}
                `}>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1a1f63] animate-pulse group-hover:animate-none"></span>
                    <span>Let's Talk</span>
                  </span>
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:bg-[#1a1f63]">
                    <svg
                      className="w-4 h-4 text-[#1a1f63] transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 19L19 5 M19 5H9 M19 5V15"
                      />
                    </svg>
                  </div>
                </span>
              </button>
            </Link>
          </div>
          </div>
          </div>
    </nav>
  );
}

function NavLink({ to, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`group relative text-[15px] font-medium px-5 py-2.5 flex items-center justify-center rounded-full transition-colors duration-200 ${isActive
        ? "bg-gray-100 text-gray-900"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }`}
    >
      <span className="relative block overflow-hidden h-6">
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {label}
        </span>
        <span className="absolute inset-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
          {label}
        </span>
      </span>
    </Link>
  );
}

function MobileNavLink({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-200 ${active
        ? "text-gray-900 bg-gray-100 border-l-[3px] border-gray-900"
        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${active ? "bg-gray-900" : "bg-gray-300"}`} />
      {children}
    </Link>
  );
}