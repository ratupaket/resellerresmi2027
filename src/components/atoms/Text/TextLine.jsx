import React from "react";
import { CiStar } from "react-icons/ci";

const TextLine = () => {
  return (
    <>
      <style>{`
        /* Animasi Teks Menyala Gold */
        @keyframes glowText {
          0%, 100% { 
            text-shadow: 0 0 5px rgba(251, 191, 36, 0.4), 0 0 10px rgba(251, 191, 36, 0.2); 
          }
          50% { 
            text-shadow: 0 0 15px rgba(251, 191, 36, 0.9), 0 0 35px rgba(251, 191, 36, 0.5); 
          }
        }

        /* Animasi Bintang Berputar & Menyala */
        @keyframes spinStar {
          0% { 
            transform: rotate(0deg) scale(1); 
            filter: drop-shadow(0 0 3px rgba(251, 191, 36, 0.4)); 
          }
          50% { 
            transform: rotate(180deg) scale(1.3); 
            filter: drop-shadow(0 0 14px rgba(251, 191, 36, 1)); 
          }
          100% { 
            transform: rotate(360deg) scale(1); 
            filter: drop-shadow(0 0 3px rgba(251, 191, 36, 0.4)); 
          }
        }
      `}</style>

      <section className="mt-4 mb-12">
        <div className="relative flex items-center justify-center py-5 gap-3 lg:gap-8 overflow-hidden border-y border-amber-500/20 bg-black/30 backdrop-blur-sm">
          
          {/* Efek Cahaya Background Tengah */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent pointer-events-none" />

          {/* Bintang Kiri */}
          <CiStar className="text-amber-400 w-6 h-6 animate-[spinStar_4s_ease-in-out_infinite] relative z-10" />
          
          {/* Teks Utama */}
          <h2 className="text-xl md:text-2xl font-londrina tracking-wider text-amber-300 animate-[glowText_3s_ease-in-out_infinite] relative z-10">
            11 Years of Delivering Trust & Happiness.
          </h2>
          
          {/* Bintang Kanan (Di-delay 0.5 detik biar gelombangnya asik) */}
          <CiStar className="text-amber-400 w-6 h-6 animate-[spinStar_4s_ease-in-out_infinite_0.5s] relative z-10" />
        </div>
      </section>
    </>
  );
};

export default TextLine;