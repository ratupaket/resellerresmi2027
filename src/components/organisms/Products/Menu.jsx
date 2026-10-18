import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import { menuList } from "../../../utils/MenuList";

const categories = [
  "Agen RPL",
  "Agen Firli",
  "Agen Ayu",
  "Agen Nina",
  "Agen Wulan",
  "Agen Efi Nurlatifah",
  "Agen Susan",
  "Agen Sheila",
  "Agen Rahayu",
  "Agen Adhilla",
  "Agen Rika Ferika",
  "Agen Mike",
  "Agen Nunung",
  "Non Agen",
];

// Link WhatsApp Admin Ratu Paket Lebaran
const ADMIN_WHATSAPP =
  "https://wa.me/message/MU23Y7YT6SNFP1";

const Menu = ({ addToCart, onCardClick }) => {
  const [selectedCategory, setSelectedCategory] =
    useState("Agen RPL");

  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  // Filter nama berdasarkan kategori dan pencarian
  const searchedMenuList = menuList.filter((menu) => {
    const isCategoryMatch =
      menu?.category === selectedCategory;

    const isSearchMatch = menu?.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase().trim());

    return searchTerm.trim()
      ? isCategoryMatch && isSearchMatch
      : isCategoryMatch;
  });

  // Membuka detail reseller
  const handleCardClick = (menu) => {
    setSelectedMenu(menu);
    setShowModal(true);

    if (onCardClick) {
      onCardClick(menu);
    }
  };

  // Menutup detail reseller
  const closeModal = () => {
    setShowModal(false);
    setSelectedMenu(null);
  };

  // Membuka WhatsApp admin
  const handleContactAdmin = () => {
    window.open(
      ADMIN_WHATSAPP,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <style>{`
        @keyframes menuTextShimmer {
          0% {
            background-position: -200% center;
          }

          100% {
            background-position: 200% center;
          }
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

        .category-button {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.3px;
          text-shadow: none;
          min-height: 42px;
          transition: all 0.2s ease;
        }

        .category-button:focus-visible {
          outline: 3px solid #fbbf24;
          outline-offset: 3px;
        }

        .category-button-active {
          background-color: #fbbf24;
          color: #241300;
          border-color: #fbbf24;
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);
        }

        .category-button-inactive {
          background-color: #31213d;
          color: #ffffff;
          border-color: #f3d6ff;
        }

        .category-button-inactive:hover {
          background-color: #51315f;
          border-color: #ffffff;
        }

        @media (max-width: 480px) {
          .category-button {
            font-size: 12px;
            padding: 9px 10px;
            min-height: 38px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .m-glow-title {
            animation: none;
          }

          .category-button {
            transition: none;
          }
        }
      `}</style>

      <section className="mt-6 mb-16 px-4 md:px-6">

        {/* INFORMASI: SELALU TERLIHAT */}
        <div className="mx-auto mb-7 w-full max-w-4xl">
          <div className="flex items-start gap-3 rounded-xl border-2 border-pink-500 bg-white px-4 py-4 shadow-lg sm:px-5">

            <IoInformationCircleOutline
              className="mt-0.5 h-7 w-7 shrink-0 text-pink-700"
              aria-hidden="true"
            />

            <div className="min-w-0 flex-1">
              <p className="mb-1 text-sm font-extrabold tracking-wide text-pink-800 sm:text-base">
                INFORMASI
              </p>

              <p className="text-sm font-semibold leading-relaxed text-gray-900 sm:text-base">
                Jika nama tidak ditemukan, silakan hubungi
                Admin Ratu Paket Lebaran untuk verifikasi
                data.
              </p>

              <button
                type="button"
                onClick={handleContactAdmin}
                className="mt-3 inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-green-700 px-4 py-2 text-sm font-extrabold text-white shadow-md transition-colors hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
              >
                <FaWhatsapp
                  className="h-5 w-5"
                  aria-hidden="true"
                />
                Hubungi Admin
              </button>
            </div>
          </div>
        </div>

        {/* JUDUL */}
        <div className="text-center">
          <h1 className="m-glow-title font-rocksalt text-4xl font-bold md:text-5xl">
            Daftar Reseller
          </h1>
        </div>

        <h2 className="mt-4 mb-6 text-center font-londrina text-base font-bold tracking-wider text-white md:text-lg">
          Silakan cari berdasarkan nama asli dan grup
        </h2>

        {/* PENCARIAN */}
        <div className="mx-auto mb-6 flex w-full max-w-xl justify-center">
          <div className="relative flex w-full overflow-hidden rounded-xl border-2 border-white/50 transition-colors duration-300 focus-within:border-amber-400">

            <div className="flex items-center pl-4 text-white">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              type="text"
              aria-label="Cari nama reseller"
              className="w-full bg-[#24182f] py-3 pl-3 pr-4 font-semibold text-white placeholder:text-white/80 focus:outline-none"
              placeholder="Ketik nama reseller di sini..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="whitespace-nowrap bg-amber-400 px-5 font-extrabold text-gray-950 transition-colors hover:bg-amber-300 md:px-7"
            >
              {searchTerm ? "Reset" : "Cari"}
            </button>
          </div>
        </div>

        {/* KATEGORI AGEN */}
        <div className="mb-8 w-full">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => {
              const isSelected =
                selectedCategory === category;

              return (
                <button
                  type="button"
                  key={category}
                  aria-pressed={isSelected}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSearchTerm("");
                  }}
                  className={`category-button rounded-lg border-2 px-4 py-2 ${
                    isSelected
                      ? "category-button-active"
                      : "category-button-inactive"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* DAFTAR RESELLER */}
        <div
          key={selectedCategory}
          className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 tablet:grid-cols-5 lg:grid-cols-6"
        >
          {searchedMenuList.length > 0 ? (
            searchedMenuList.map((menu, index) => (
              <Card
                key={
                  menu?.id ||
                  `menu-${index}-${menu?.title}`
                }
                onClick={() => handleCardClick(menu)}
              >
                <Card.Top
                  image={menu?.image}
                  title={menu?.title}
                  desc={menu?.desc}
                />

                <Card.Bottom price={menu?.price} />
              </Card>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">

              <svg
                className="mb-4 h-14 w-14 text-white/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              <p className="text-center font-londrina text-xl font-bold tracking-wide text-white">
                Nama tidak ditemukan di grup ini.
              </p>

              <p className="mt-2 max-w-md text-sm font-medium leading-relaxed text-white">
                Silakan hubungi Admin Ratu Paket Lebaran
                untuk membantu memeriksa data nama Anda.
              </p>

              <button
                type="button"
                onClick={handleContactAdmin}
                className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-green-700 px-5 py-3 font-extrabold text-white shadow-lg transition-colors hover:bg-green-800"
              >
                <FaWhatsapp
                  className="h-5 w-5"
                  aria-hidden="true"
                />
                Hubungi Admin via WhatsApp
              </button>

              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="mt-4 font-bold text-amber-300 underline underline-offset-4 hover:text-amber-200"
              >
                Reset Pencarian
              </button>
            </div>
          )}
        </div>

        {/* MODAL DETAIL RESELLER */}
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
