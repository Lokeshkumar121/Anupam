import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "/logo/Logo.avif";
export default function Footer() {
  return (
    <footer className="px-4 pb-4 mt-1">
      <div className="max-w-[1600px] mx-auto bg-gradient-to-b from-[#232C8D] to-[#181D63] rounded-[30px] px-8 lg:px-14 py-12 text-white">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* LEFT - Brand */}
          <div className="pl-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                <img src={logo} alt="" className="rounded-full " />
              </div>
              <h2 className="text-3xl font-bold">Smile Dental Care</h2>
            </div>

            {/* Address */}
            <div className="mb-6">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Address</p>
              <p className="text-white/80 text-base leading-7">
                Bada, 69- C, Gurudwara Rd, Gautam Nagar,
                <br />
                New Delhi, Delhi 110049
              </p>
            </div>

            {/* Contact */}
            <div className="mb-6">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Contact</p>
              <p className="text-white/80 text-base">
                +91 9878XXXXXXX 
              </p>
              <a
                href="/"
                className="text-white/80 text-base hover:text-white transition"
              >
                info@smiledental.com
              </a>
            </div>

            <div className="mt-8 text-white/60 text-sm">
              <p>© 2025, Smile Dental Care.</p>
              <p>All Rights Reserved.</p>
            </div>
          </div>

          {/* CENTER - Contact Card (Smaller) */}
          <div className="flex justify-start">
            <div className="bg-white rounded-[20px] p-6 text-[#1D2B73] max-w-[320px] w-full">

              <p className="text-base leading-relaxed font-medium">
                Expert medical care,
                <br />
                easily scheduled at your
                <br />
                convenience
              </p>

              <div className="mt-4">
                <p className="text-xs uppercase tracking-wider text-[#1D2B73]/50 font-semibold">Phone</p>
                <h3 className="text-2xl font-bold">
                  +91 9878XXXXXXX 
                </h3>
              </div>

              <div className="mt-3">
                <p className="text-xs uppercase tracking-wider text-[#1D2B73]/50 font-semibold">Email</p>
                <a
                  href="/"
                  className="block text-lg underline hover:text-[#232C8D] transition"
                >
                  info@smiledental.com
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT - Quick Links + Social */}
          <div className="pr-4">
            <h3 className="text-2xl font-semibold text-white/70 mb-6">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-base">

              <a href="/about" className="hover:text-white/80 transition">About</a>
              <a href="/treatments" className="hover:text-white/80 transition">Treatments</a>

              <a href="/book" className="hover:text-white/80 transition">Book</a>
             

              <a href="/blog" className="hover:text-white/80 transition">Blog</a>
              <a href="/case-study" className="hover:text-white/80 transition">Case Study </a>


            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">

              <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition cursor-pointer">
                <FaFacebookF size={14} />
              </div>

              <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition cursor-pointer">
                <FaXTwitter size={14} />
              </div>

              <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition cursor-pointer">
                <FaLinkedinIn size={14} />
              </div>

              <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition cursor-pointer">
                <FaPinterestP size={14} />
              </div>

            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}