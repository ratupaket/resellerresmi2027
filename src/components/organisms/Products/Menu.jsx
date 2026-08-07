import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import { menuList } from "../../../utils/MenuList";

const categories = ["Agen RPL", "Agen Firli", "Agen Ayu", "Agen Nina", "Agen Wulan", "Agen Efi Nurlatifah", "Agen Susan", "Agen Sheila", "Agen Rahayu", "Agen Adhilla", "Agen Rika Ferika", "Agen Mike", "Agen Nunung", "Non Agen"];

const Menu = ({ addToCart, onCardClick }) => {
  const [selectedCategory, setSelectedCategory] = useState("Agen RPL");
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const filteredMenuList =
    selectedCategory === "Semua"
      ? menuList
      : menuList.filter((menu) => menu?.category === selectedCategory);

  const searchedMenuList = filteredMenuList.filter((menu) =>
    menu?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (menu) => {
    setSelectedMenu(menu);
    setShowModal(true);
    onCardClick(menu);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMenu(null);
  };

  return (
    <>
      <style>{`
        @keyframes menuTextShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .m-glow-title {
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
          animation: menuTextShimmer 6s linear infinite;
          display: inline-block;
          line-height: 1.35;
          padding: 4px 0;
          transform: translateZ(0);
          -webkit-font-smoothing: antialiased;
        }
      `}</style>

      <section className="mt-10 mb-16 px-4 md:px-6">
        
        {/* JUDUL NYALA */}
        <div className="text-center">
          <h1 className="m-glow-title text-4xl md:text-5xl font-rocksalt font-bold">
            Daftar Reseller
          </h1>
        </div>

        {/* SUBTITLE */}
        <h2 className="text-base md:text-lg font-londrina font-bold tracking-wider text-white text-center mt-4 mb-6">
          Silahkan cari sesuai nama asli & grup
        </h2>

        {/* SEARCH BAR */}
        <div className="flex justify-center w-full max-w-xl mx-auto mb-6">
          <div className="relative w-full flex rounded-xl overflow-hidden border-2 border-white/30 focus-within:border-amber-400 transition-colors duration-300">
            <div className="flex items-center pl-4 text-white/50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <input
              type="text"
              className="w-full bg-white/10 placeholder:text-white/60 py-3 pl-3 pr-4 text-white font-medium focus:outline-none"
              placeholder="Ketik nama reseller di sini..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 md:px-8 whitespace-nowrap transition-colors duration-300">
              Cari
            </button>
          </div>
        </div>

        {/* CATEGORIES FILTER (SEMUA NAMA KELIATAN, RAPI KE BAWAH) */}
        <div className="w-full mb-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-2.5">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedCategory(category);
                  setSearchTerm("");
                }}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-bold tracking-wide whitespace-nowrap border-2 transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/30"
                    : "bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* CARD GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 tablet:grid-cols-5 lg:grid-cols-6 gap-4 mt-2">
          {searchedMenuList.length > 0 ? (
            searchedMenuList.map((menu) => (
              <Card key={menu?.id || Math.random()} onClick={() => handleCardClick(menu)}>
                <Card.Top image={menu?.image} title={menu?.title} desc={menu?.desc} />
                <Card.Bottom price={menu?.price} />
              </Card>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20">
              <svg className="w-16 h-16 text-white/20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-xl font-londrina text-white/40 tracking-wider">
                Nama tidak ditemukan di grup ini.
              </p>
              <button 
                onClick={() => setSearchTerm("")}
                className="mt-4 text-amber-400 font-bold hover:underline"
              >
                Reset Pencarian
              </button>
            </div>
          )}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {showModal && selectedMenu && (
            <Modal
              show={showModal}
              onClose={closeModal}
              menu={selectedMenu}
              addToCart={addToCart}
            />
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Menu;