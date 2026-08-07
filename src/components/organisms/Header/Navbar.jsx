import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsEnvelopeHeart } from "react-icons/bs";

const Navbar = ({ cartItems = [], removeFromCart, toggleCartModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [storedCartItems, setStoredCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setStoredCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  // Update storedCartItems when cartItems change
  useEffect(() => {
    setStoredCartItems(cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Calculate total items from storedCartItems
  const totalItems = storedCartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <section className="sticky top-0 z-50 backdrop-blur-xl">
      <nav className="flex justify-between items-center py-4 px-6 bg-black/10 shadow-[0px_4.0px_20px_rgba(0,0,0,0.38)]">
        {/* LOGO */}
        <div className="hidden md:block">
          <Link to="/">
            <figure>
              <img
                src="/images/logo.png"
                alt="Logo Ratu Paket Lebaran"
                className="w-10 h-10 rounded"
              />
            </figure>
          </Link>
        </div>

        {/* NAVIGATION */}
        <section>
          {/* MOBILE NAVIGATION BUTTON */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <motion.svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ rotate: 180 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                ><path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
              
                </motion.svg>
              )}
            </motion.button>
          </div>

          {/* DESKTOP NAVIGATION */}
          <ul className="hidden md:flex space-x-8 font-londrina tracking-widest">
            <li className="text-lg transition duration-300 ease-in-out hover:text-tertiary">
              <Link to="/">Beranda</Link>
            </li>
            <li className="text-lg transition duration-300 ease-in-out hover:text-tertiary">
              <Link to="/product">Daftar Reseller</Link>
            </li>
            <li className="text-lg transition duration-300 ease-in-out hover:text-tertiary">
              <Link to="/about">Tentang</Link>
            </li>
            <li className="text-lg transition duration-300 ease-in-out hover:text-tertiary">
              <Link to="/contact">Kontak</Link>
            </li>
          </ul>
        </section>

        {/* CART */}
        <div onClick={toggleCartModal} className="relative cursor-pointer">
          <BsEnvelopeHeart className="w-8 h-8" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              {totalItems}
            </span>
          )}
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden bg-black/15 overflow-hidden flex flex-col"
      >
        <ul className="flex flex-col items-center justify-center py-6 spacing-y-4">
          <li className="my-2 text-lg font-londrina tracking-widest transition duration-300 ease-in-out hover:text-tertiary">
            <Link to="/">Beranda</Link>
          </li>
          <li className="my-2 text-lg font-londrina tracking-widest transition duration-300 ease-in-out hover:text-tertiary">
            <Link to="/product">Daftar Reseller</Link>
          </li>
          <li className="my-2 text-lg font-londrina tracking-widest transition duration-300 ease-in-out hover:text-tertiary">
            <Link to="/about">Tentang</Link>
          </li>
          <li className="my-2 text-lg font-londrina tracking-widest transition duration-300 ease-in-out hover:text-tertiary">
            <Link to="/contact">Kontak</Link>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Navbar;
