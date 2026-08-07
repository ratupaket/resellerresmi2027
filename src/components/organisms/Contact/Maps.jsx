import React from "react";
import { motion } from "framer-motion";
import { CiLocationOn, CiInstagram, CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import Title from "../../atoms/Text/Title";

const contactDetails = {
  address:
    "Kp. Sukahurip Rt 008 Rw 005 Desa Jatiluhur Kec. Jatiluhur Kab. Purwakarta",
  facebook: "@ratupaket",
  tiktok: "@ratupaket",
  instagram: "@officialratupaketpurwakarta",
};

const Contact = () => {
  return (
    // Padding diperkecil untuk HP (py-10 px-4), membesar di desktop (md:py-16 md:px-6)
    <section className="py-10 px-4 md:py-16 md:px-6">
      <Title>Kontak Kami</Title>

      <motion.div
        // Spacing vertikal diperkecil untuk HP (space-y-6, mt-6)
        className="max-w-4xl mx-auto mt-6 md:mt-10 space-y-6 md:space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* MAP SECTION */}
        <motion.div
          // Tinggi maps diperkecil untuk HP (h-[220px]), tablet (sm:h-[280px]), desktop (md:h-[400px])
          className="w-full h-[220px] sm:h-[280px] md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4713.9344352496455!2d107.39969008113339!3d-6.530453549596769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e690f0a581971e9%3A0x1d62a199ce966b6c!2sCV%20Ratu%20Sejagat%20Perkasa!5e0!3m2!1sid!2sid!4v1720166859013!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* LOCATION ADDRESS */}
        <motion.div
          // Padding dan gap diperkecil untuk HP (p-3 gap-3)
          className="flex items-start gap-3 md:gap-4 p-3 md:p-5 bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Ikon dan teks diperkecil untuk HP */}
          <CiLocationOn className="w-6 h-6 md:w-8 md:h-8 text-amber-400 flex-shrink-0 mt-0.5 md:mt-1" />
          <p className="text-sm md:text-lg text-white font-londrina font-bold tracking-wider leading-relaxed">
            {contactDetails.address}
          </p>
        </motion.div>

        {/* SOCIAL MEDIA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Judul diperkecil untuk HP (text-xl), desktop (md:text-3xl) */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-londrina font-bold tracking-wider text-white text-center mb-4 md:mb-6">
            Detail Kontak Kami
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {/* Tiktok */}
            <a
              href="https://www.tiktok.com/@ratupaket?_t=8dqFMTqECi0&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              // Padding, gap, ikon, & teks diperkecil untuk HP
              className="flex items-center gap-3 md:gap-4 p-3 md:p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300 group"
            >
              <FaTiktok className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-amber-400 transition-colors duration-300 flex-shrink-0" />
              <p className="text-sm md:text-lg font-londrina font-bold tracking-wider text-white group-hover:text-amber-300 transition-colors duration-300">
                {contactDetails.tiktok}
              </p>
            </a>

            {/* Facebook */}
            <a
              href="https://web.facebook.com/people/Ratu-Paket/pfbid0RYB7CeFghm8YNCuLqpu7nNNUb1Y6q2CQ9GtN64Co9ovsEsWU8c5giVDKaEPEaLpHl/?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:gap-4 p-3 md:p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300 group"
            >
              <CiFacebook className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-amber-400 transition-colors duration-300 flex-shrink-0" />
              <p className="text-sm md:text-lg font-londrina font-bold tracking-wider text-white group-hover:text-amber-300 transition-colors duration-300">
                {contactDetails.facebook}
              </p>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/officialratupaketpurwakarta/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:gap-4 p-3 md:p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300 group"
            >
              <CiInstagram className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-amber-400 transition-colors duration-300 flex-shrink-0" />
              <p className="text-sm md:text-lg font-londrina font-bold tracking-wider text-white group-hover:text-amber-300 transition-colors duration-300">
                {contactDetails.instagram}
              </p>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;