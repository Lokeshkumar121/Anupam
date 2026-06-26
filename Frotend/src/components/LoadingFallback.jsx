// components/LoadingFallback.js
import React from "react";

export default function LoadingFallback() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999]">
      {/* Pulse rings */}
      <div className="relative w-20 h-20 mb-8">
        <div
          className="absolute inset-0 rounded-full border-2 border-sky-400/20"
          style={{ animation: "pulseRing 2s ease-out infinite" }}
        />
        <div
          className="absolute inset-2 rounded-full border-2 border-sky-400/30"
          style={{ animation: "pulseRing 2s ease-out infinite 0.5s" }}
        />
        {/* Spinning arc */}
        <div
          className="absolute inset-3 rounded-full border-2 border-transparent"
          style={{
            borderTopColor: "#0EA5E9",
            borderRightColor: "#38BDF8",
            animation: "spin 1.2s linear infinite",
          }}
        />
        {/* Center cross */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            style={{ color: "#0EA5E9", animation: "crossPulse 2s ease-in-out infinite" }}
          >
            <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Name */}
      <span
        className="text-lg font-semibold tracking-[0.25em] mb-1"
        style={{
          color: "#0C4A6E",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        SMILE DENTAL CARE
      </span>

      {/* Subtitle */}
      <p
        className="text-[10px] tracking-[0.4em] uppercase mb-4"
        style={{ color: "rgba(14,165,233,0.4)", fontFamily: "'Outfit', sans-serif" }}
      >
        your confident smile
      </p>

      {/* Decorative line */}
      <div className="flex items-center gap-2 w-28">
        <span className="flex-1 h-[0.5px]" style={{ background: "linear-gradient(90deg, transparent, #0EA5E9)" }} />
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M4 0L5 3L8 4L5 5L4 8L3 5L0 4L3 3L4 0Z" fill="#0EA5E9" fillOpacity="0.4" />
        </svg>
        <span className="flex-1 h-[0.5px]" style={{ background: "linear-gradient(90deg, #0EA5E9, transparent)" }} />
      </div>

      {/* Loading text */}
      <p
        className="mt-5 text-[11px] tracking-[0.3em] uppercase"
        style={{ color: "rgba(14,165,233,0.35)", fontFamily: "'Outfit', sans-serif" }}
      >
        Loading
      </p>

      {/* Dots */}
      <div className="flex gap-1.5 mt-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1 h-1 rounded-full bg-sky-400/50"
            style={{
              animation: "dotBounce 1.2s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulseRing {
          0% { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes crossPulse {
          0%, 100% { opacity: 0.5; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes dotBounce {
          0%, 80%, 100% { opacity: 0.2; transform: translateY(0); }
          40% { opacity: 1; transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
}