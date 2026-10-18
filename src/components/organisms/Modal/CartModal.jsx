import React from "react";
import { IoClose, IoInformationCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const CartModal = ({ show, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 px-4 pt-24 sm:pt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="announcement-title"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md rounded-xl border border-pink-200 bg-white p-5 shadow-xl"
          >
            {/* Tombol tutup */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup pengumuman"
              className="absolute right-3 top-3 rounded-full p-1 text-gray-500 transition hover:bg-pink-50 hover:text-pink-600"
            >
              <IoClose className="h-6 w-6" />
            </button>

            {/* Judul */}
            <div className="flex items-center gap-2 pr-8">
              <IoInformationCircleOutline className="h-7 w-7 shrink-0 text-pink-600" />

              <h2
                id="announcement-title"
                className="text-lg font-bold text-gray-800"
              >
                Informasi Reseller
              </h2>
            </div>

            {/* Pesan */}
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Nama belum tercantum dalam daftar? Silakan
              hubungi Admin Ratu Paket Lebaran untuk verifikasi.
            </p>

            {/* Tombol tutup */}
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg bg-pink-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-pink-700"
              >
                Mengerti
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
