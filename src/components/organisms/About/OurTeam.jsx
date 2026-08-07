import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Title from "../../atoms/Text/Title";

const OurTeam = () => {
  const [section1Ref, section1InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [section2Ref, section2InView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    // Padding dikecilkan di HP (py-10 px-4), membesar di desktop (md:py-16 md:px-6)
    <section className="py-10 px-4 md:py-16 md:px-6">
      <Title>Tentang Kami</Title>

      <motion.div
        className="mt-8 md:mt-10 max-w-5xl mx-auto space-y-10 md:space-y-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Section 1: Sejarah */}
        <motion.div
          ref={section2Ref}
          className="flex flex-col lg:flex-row-reverse items-center gap-6 md:gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={section2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Ukuran Logo: Kecil di HP (w-36), sedang di tablet (md:w-48), besar di desktop (lg:w-60) */}
          <figure className="w-36 md:w-48 lg:w-60 flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="Logo Ratu Paket Lebaran"
              className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            />
          </figure>
          
          <div className="text-center lg:text-left">
            {/* Font heading dikurangi di HP (text-2xl) agar tidak membanjiri layar */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-londrina font-bold tracking-wider text-white">
              Ratu Paket Lebaran
            </h2>
            <div className="w-12 h-1 md:w-16 bg-amber-500 rounded-full mt-3 mb-3 md:mt-4 md:mb-4 mx-auto lg:mx-0" />
            {/* Font paragraf disesuaikan (text-sm di HP, text-base di desktop) */}
            <p className="text-sm md:text-base lg:text-lg text-white font-medium leading-relaxed">
              Ratu Paket Lebaran berdiri pada tahun 2016. Berawal dengan nama Syarah Galery sebelum pergantian nama. Meet & greet pertama di lakukan di RM Teh Arah pada tahun 2021 bersama 50 reseller pertama.
            </p>
          </div>
        </motion.div>

        {/* Section 2: Owner */}
        <motion.div
          ref={section1Ref}
          className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={section1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Batasi lebar foto di HP (max-w-xs) agar tidak terlalu raksasa, membesar di desktop */}
          <figure className="relative w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl flex-shrink-0 group">
            <img
              src="/images/owner.JPG"
              alt="Owner RPL"
              className="w-full h-auto object-cover rounded-xl md:rounded-2xl shadow-2xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md text-white py-2 px-3 md:py-3 md:px-4 rounded-b-xl md:rounded-b-2xl border-t border-white/10">
              <p className="text-xs md:text-sm font-londrina tracking-wider text-center">
                Syarah Nuraeni <span className="text-amber-400">( Owner RPL )</span>
              </p>
            </figcaption>
          </figure>
          
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-londrina font-bold tracking-wider text-white">
              Ikuti Kami
            </h2>
            <div className="w-12 h-1 md:w-16 bg-amber-500 rounded-full mt-3 mb-3 md:mt-4 md:mb-4 mx-auto lg:mx-0" />
            <p className="text-sm md:text-base lg:text-lg text-white font-medium leading-relaxed">
              Ketahui informasi-informasi terbaru tentang kami setiap harinya di Instagram:
            </p>
            
            <a
              href="https://www.instagram.com/officialratupaketpurwakarta/"
              target="_blank"
              rel="noopener noreferrer"
              // Padding & font tombol diperkecil untuk HP (px-4 py-2 text-sm)
              className="inline-flex items-center gap-2 mt-3 md:mt-4 px-4 py-2 md:px-5 md:py-2.5 rounded-lg border-2 border-amber-500/50 bg-amber-500/10 text-amber-300 font-bold text-sm md:text-base font-londrina tracking-wider hover:bg-amber-500/20 hover:border-amber-400 transition-all duration-300"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @officialratupaketpurwakarta
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurTeam;