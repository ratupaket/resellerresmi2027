import React from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import Button from "../../atoms/Buttons/Button";

const PopularMenuModal = ({ show, onClose, menu }) => {
  if (!show) return null;

  return (
    <motion.div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-white/20 backdrop-blur-lg rounded-lg p-6 w-full max-w-md relative border"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary hover:text-gray-700"
        >
          <IoClose className="w-8 h-8" />
        </button>
        <figure className="p-2 flex justify-center items-center mb-4">
          <img
            src={menu.image}
            alt={menu.title}
            className="w-28 h-28 drop-shadow-[20px_20px_30px_rgba(0,0,0,0.58)]"
          />
        </figure>
        <div className="px-2">
          <h2 className="font-londrina tracking-wider text-2xl mb-2">
            {menu.title}
          </h2>
          <p className="font-montserrat text-sm mb-4">{menu.desc}</p>
          <p className="font-montserrat font-bold text-lg">{menu.price}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PopularMenuModal;
