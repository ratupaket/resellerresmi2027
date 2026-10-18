import React from "react";
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Modal = ({ show, onClose, menu }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  if (!show || !menu) {
    return null;
  }

  // Mengubah nomor Indonesia menjadi format internasional WhatsApp
  const formatWhatsAppNumber = (phone) => {
    if (!phone) return "";

    let number = phone.replace(/\D/g, "");

    if (number.startsWith("0")) {
      number = "62" + number.slice(1);
    } else if (!number.startsWith("62")) {
      number = "62" + number;
    }

    return number;
  };

  const phoneNumber = formatWhatsAppNumber(menu.phone);

  const handleWhatsApp = () => {
    if (!phoneNumber) return;

    const message = `Halo ${menu.title}, saya ingin menghubungi Anda terkait Ratu Paket Lebaran.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white/20 backdrop-blur-md rounded-xl p-6 w-full max-w-md border border-white/60 shadow-xl"
      >
        {/* Tombol tutup */}
        <button
          onClick={onClose}
          aria-label="Tutup detail agen"
          className="absolute top-3 right-3 text-red-500 hover:text-red-700"
        >
          <IoClose className="w-8 h-8" />
        </button>

        {/* Foto agen */}
        <figure className="p-2 flex justify-center items-center mb-4">
          <img
            src={menu.image}
            alt={menu.title}
            className="w-36 md:w-52 h-36 md:h-52 object-contain drop-shadow-xl"
          />
        </figure>

        {/* Informasi agen */}
        <div className="text-white break-words">
          <p className="text-xl font-bold mb-2">{menu.title}</p>

          {menu.desc && (
            <p className="text-base font-medium mb-2">{menu.desc}</p>
          )}

          <p className="text-lg font-semibold mb-3">{menu.price}</p>

          {menu.desc1 && (
            <p className="text-base font-medium mb-3">{menu.desc1}</p>
          )}

          {/* Nomor HP/WhatsApp */}
          {menu.phone ? (
            <>
              <div className="bg-white/20 rounded-lg p-3 mb-4">
                <p className="text-sm mb-1">Nomor HP / WhatsApp</p>
                <p className="text-lg font-bold">{menu.phone}</p>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
              >
                <FaWhatsapp className="w-6 h-6" />
                Hubungi via WhatsApp
              </button>
            </>
          ) : (
            <p className="text-sm bg-white/20 rounded-lg p-3">
              Nomor HP/WhatsApp belum tersedia. Silakan hubungi Admin Ratu
              Paket Lebaran.
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
