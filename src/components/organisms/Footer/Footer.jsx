import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/10 text-white py-8 md:py-12 shadow-[0px_-4.0px_20px_rgba(0,0,0,0.38)]">
      <div className="flex flex-col md:flex-row justify-between px-6 gap-8 md:gap-6">
        
        {/* Logo and Description */}
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="flex flex-col sm:flex-row md:items-center gap-4">
            <Link to="/">
              <figure className="flex-shrink-0">
                <img
                  src="/images/user1.jpeg"
                  alt="Logo"
                  // Ukuran diperkecil di HP (w-16), dan membesar di tablet/desktop (md:w-24)
                  className="w-16 h-16 md:w-24 md:h-24 rounded-md" 
                />
              </figure>
            </Link>

            <div className="flex flex-col justify-center">
              {/* Font diperkecil di HP (text-lg), membesar di desktop (md:text-xl) */}
              <h2 className="text-lg md:text-xl font-londrina tracking-wider">
                Alamat Kantor - Gudang
              </h2>
              {/* Hapus w-[15rem], ganti max-w-xs agar teks menyesuaikan layar HP tanpa terpotong */}
              <p className="text-xs md:text-sm mt-1 max-w-xs md:max-w-sm text-gray-300">
                Kp. Sukahurip Rt 008 Rw 005 Desa. Jatiluhur Kec. Jatiluhur Kab. Purwakarta Jawa Barat 41152
              </p>

              {/* Ikon sosmed diperbesar sedikit & diberi padding agar mudah disentuh di HP */}
              <div className="flex space-x-3 mt-3">
                <a
                  href="https://web.facebook.com/people/Ratu-Paket/pfbid0RENaw8xDhPn9NZwJ93ayh3WGrojtXK1EDFjhZvQLXZhggQuF28VRBtGenfjBgotdl/?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1"
                >
                  <CiFacebook className="w-6 h-6 hover:text-gray-400 transition-colors" />
                </a>
                <a
                  href="https://www.tiktok.com/@ratupaket?_t=8dqFMTqECi0&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1"
                >
                  <FaTiktok className="w-6 h-6 hover:text-gray-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-start">
          {/* Font diperkecil di HP (text-lg), membesar di desktop (md:text-2xl) */}
          <h3 className="text-lg md:text-2xl font-londrina tracking-wider mb-2">
            Navigasi
          </h3>
          <nav className="flex flex-col md:flex-row gap-2 md:gap-4">
            <Link to="/" className="text-sm hover:text-gray-400 transition-colors">
              Beranda
            </Link>
            <Link to="/product" className="text-sm hover:text-gray-400 transition-colors">
              Daftar Reseller
            </Link>
            <Link to="/about" className="text-sm hover:text-gray-400 transition-colors">
              Tentang
            </Link>
            <Link to="/contact" className="text-sm hover:text-gray-400 transition-colors">
              Kontak
            </Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start">
          <p className="text-xs md:text-sm mb-2 text-gray-300">
            <span className="font-londrina tracking-wider">
            © Copyright 2026 Ratu Paket Lebaran. All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;