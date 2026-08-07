import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "../../atoms/Text/Marquee";
import Button from "../../atoms/Buttons/Button";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        .h-anim-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .h-anim-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .h-anim-scale {
          opacity: 0;
          transform: scale(0.82);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .h-anim-up.loaded,
        .h-anim-left.loaded,
        .h-anim-scale.loaded {
          opacity: 1;
          transform: translateY(0) translateX(0) scale(1);
        }

        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-14px); }
        }
        .h-float {
          animation: heroFloat 5s ease-in-out infinite;
        }

        .h-img-wrap {
          position: relative;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .h-img-wrap:hover {
          transform: scale(1.04);
        }
        .h-img-wrap::after {
          content: '';
          position: absolute;
          inset: -16px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        .h-img-wrap:hover::after {
          opacity: 1;
        }

        .h-btn-lift {
          display: inline-block;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .h-btn-lift:hover {
          transform: translateY(-6px);
          filter: brightness(1.12);
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50%      { opacity: 0.6;  transform: scale(1.06); }
        }
        .h-glow {
          position: absolute;
          inset: -30px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
          animation: glowPulse 4s ease-in-out infinite;
          pointer-events: none;
          z-index: -1;
        }

        @keyframes textShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .h-shimmer {
          background: linear-gradient(
            90deg,
            #ffffff 0%,
            #fbbf24 25%,
            #ffffff 50%,
            #fbbf24 75%,
            #ffffff 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: textShimmer 6s linear infinite;
          display: inline-block;
          line-height: 1.35;
          padding: 8px 0;
          transform: translateZ(0);
          -webkit-font-smoothing: antialiased;
        }

        .h-marquee-entry {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .h-marquee-entry.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes dotPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%      { opacity: 0.8; transform: scale(1.5); }
        }
        .h-dot {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.5);
          animation: dotPulse 3s ease-in-out infinite;
          pointer-events: none;
        }

        /* ====== TAMBAHAN KHUSUS MOBILE/HP ====== */
        @media (max-width: 639px) {
          .h-glow {
            inset: -15px; /* Perkecil efek glow di HP */
          }
          .h-img-wrap::after {
            inset: -10px; /* Perkecil efek hover di HP */
          }
        }
      `}</style>

      {/* Padding & Gap disesuaikan: Kecil di HP, besar di Desktop */}
      <section className="relative py-8 px-4 sm:px-8 sm:py-12 mb-4 md:mb-0 flex flex-col justify-center items-center gap-6 sm:gap-8 lg:flex-row-reverse md:gap-x-40">

        <span className="h-dot hidden lg:block" style={{ top: '10%', left: '8%', animationDelay: '0s' }} />
        <span className="h-dot hidden lg:block" style={{ top: '25%', left: '15%', animationDelay: '0.8s' }} />
        <span className="h-dot hidden lg:block" style={{ bottom: '15%', left: '12%', animationDelay: '1.6s' }} />
        <span className="h-dot hidden lg:block" style={{ top: '60%', right: '5%', animationDelay: '0.4s' }} />

        <figure className={`h-anim-scale ${loaded ? "loaded" : ""} w-full max-w-[16rem] sm:max-w-[20rem] md:max-w-none`}>
          <div className="h-float relative">
            <div className="h-glow" />
            <div className="h-img-wrap">
              <img
                src="/images/userr.png"
                alt="hero image"
                // Shadow dikurangi di HP (8px), default di desktop (20px)
                className="w-full h-full md:w-[25rem] drop-shadow-[8px_8px_15px_rgba(0,0,0,0.5)] md:drop-shadow-[20px_20px_30px_rgba(0,0,0,0.68)] mx-auto"
              />
            </div>
          </div>
        </figure>

        <div className="flex flex-col items-center md:items-start text-center md:text-left px-2 sm:px-0">
          <h1
            // Font size dikurangi di HP: text-3xl (HP), sm:text-4xl (Tablet), md:text-5xl (Desktop)
            className={`h-anim-left ${loaded ? "loaded" : ""} h-shimmer text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-rocksalt font-bold leading-snug sm:leading-tight`}
            style={{ transitionDelay: "0.15s" }}
          >
            Ratu Paket <br /> Lebaran
          </h1>

          <p
            className={`h-anim-up ${loaded ? "loaded" : ""} hidden md:block w-[30rem] text-lg font-londrina tracking-wider mt-4 text-white/80`}
            style={{ transitionDelay: "0.35s" }}
          >
            Halaman ini akan membantu Anda mencari Reseller resmi
            Ratu Paket Lebaran Periode 2026 - 2027.
          </p>

          <div
            className={`h-anim-up ${loaded ? "loaded" : ""} mt-4 sm:mt-5 md:mt-4`}
            style={{ transitionDelay: "0.55s" }}
          >
            <Link to="/product" className="h-btn-lift">
              <Button>Cari Reseller</Button>
            </Link>
          </div>
        </div>
      </section>

      <div
        className={`h-marquee-entry ${loaded ? "loaded" : ""}`}
        style={{ transitionDelay: "0.75s" }}
      >
        <Marquee>
          Halaman ini akan membantu Anda mencari Reseller resmi
          Ratu Paket Lebaran Periode 2026 - 2027.
        </Marquee>
      </div>
    </>
  );
};

export default Hero;