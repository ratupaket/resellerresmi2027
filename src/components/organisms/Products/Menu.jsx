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

// Link WhatsApp admin
const ADMIN_WHATSAPP =
  "https://wa.me/message/MU23Y7YT6SNFP1";

const ADMIN_MESSAGE =
  "Halo Admin Ratu Paket Lebaran, saya ingin mengonfirmasi nama reseller yang tidak ditemukan di daftar. Mohon bantu pengecekan data saya. Terima kasih.";

const Menu = ({ addToCart, onCardClick }) => {
  const [selectedCategory, setSelectedCategory] =
    useState("Agen RPL");

  // Input yang sedang diketik
  const [searchTerm, setSearchTerm] = useState("");

  // Kata kunci yang sudah dicari
  const [submittedSearch, setSubmittedSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  // Filter reseller berdasarkan kategori dan kata kunci
  const searchedMenuList = menuList.filter((menu) => {
    const isCategoryMatch =
      menu?.category === selectedCategory;

    const isSearchMatch = menu?.title
      ?.toLowerCase()
      .includes(submittedSearch.toLowerCase());

    return isCategoryMatch && isSearchMatch;
  });

  // Jalankan pencarian saat tombol Cari ditekan
  const handleSearch = (e) => {
    e.preventDefault();
    setSubmittedSearch(searchTerm.trim());
  };

  // Pilih reseller untuk melihat detail
  const handleCardClick = (menu) => {
    setSelectedMenu(menu);
    setShowModal(true);

    if (onCardClick) {
      onCardClick(menu);
    }
  };

  // Tutup modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedMenu(null);
  };

  // Buka WhatsApp admin dengan pesan
  const handleContactAdmin = () => {
    const whatsappURL =
      `${ADMIN_WHATSAPP}?text=${encodeURIComponent(ADMIN_MESSAGE)}`;

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <style>{`
        @keyframes menuTextShimmer {
          0% { background-position: -200% center; }
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
          -webkit-font-smoothing: antialiased;
        }

        .category-button {
          min-height: 42px;
          padding: 9px 15px;
          border: 2px solid #ffffff;
          border-radius: 10px;
          background: #ffffff;
          color: #78350f;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.2px;
          box-shadow: 0 2px 7px rgba(0, 0, 0, 0.12);
          transition: all 0.2s ease;
        }

        .category-button:hover {
          background: #fff1cc;
          border-color: #f59e0b;
          transform: translateY(-1px);
        }

        .category-button-active {
          background: #fbbf24;
          color: #422006;
          border-color: #ffffff;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        }

        .category-button:focus-visible {
          outline: 3px solid #f59e0b;
          outline-offset: 3px;
        }

        @media (max-width: 480px) {
          .category-button {
            min-height: 38px;
            padding: 8px 10px;
            font-size: 12px;
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

        {/* INFORMASI SELALU TERLIHAT */}
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
                Admin Ratu Paket Lebaran untuk verifikasi data.
              </p>

              <button
                type="button"
                onClick={handleContactAdmin}
                className="mt-3 inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-extrabold text-white shadow-md transition-colors hover:bg-green-700"
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

        {/* FORM PENCARIAN */}
        <form
          onSubmit={handleSearch}
          className="mx-auto mb-6 w-full max-w-xl"
        >
          <div className="flex w-full overflow-hidden rounded-xl border-2 border-white bg-white shadow-lg focus-within:border-amber-400">
            <div className="flex items-center pl-4 text-gray-600">
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
              className="w-full min-w-0 bg-white py-3 pl-3 pr-2 font-semibold text-gray-900 placeholder:text-gray-500 focus:outline-none"
              placeholder="Ketik nama reseller..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

            <button
              type="submit"
              className="shrink-0 bg-amber-400 px-5 font-extrabold text-gray-950 transition-colors hover:bg-amber-300 md:px-7"
            >
              Cari
            </button>
          </div>
        </form>

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
                    setSubmittedSearch("");
                  }}
                  className={`category-button ${
                    isSelected
                      ? "category-button-active"
                      : ""
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
                className="mb-4 h-14 w-14 text-white/80"
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
                className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-extrabold text-white shadow-lg transition-colors hover:bg-green-700"
              >
                <FaWhatsapp
                  className="h-5 w-5"
                  aria-hidden="true"
                />
                Hubungi Admin via WhatsApp
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
