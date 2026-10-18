import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import Button from "../../atoms/Buttons/Button";

const CartModal = ({
  cartItems,
  setCartItems,
  show,
  onClose,
  removeFromCart,
}) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  // Menghitung total harga
  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      let additionalPrice = 0;

      if (item.spicinessLevel === 4) {
        additionalPrice = 1000;
      } else if (item.spicinessLevel === 5) {
        additionalPrice = 2000;
      }

      const numericPrice = parseFloat(
        String(item.price)
          .replace(/[^0-9,-]+/g, "")
          .replace(",", ".")
      );

      return (
        total +
        (numericPrice + additionalPrice) * item.quantity
      );
    }, 0);

    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(totalPrice);
  };

  // Menghitung total barang
  const calculateTotalItems = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  };

  // Membuat pesan WhatsApp
  const generateWhatsAppMessage = () => {
    let message = "Atas Nama:\nPesanan Saya:\n";

    cartItems.forEach((item, index) => {
      const levelText =
        item.category === "Minuman"
          ? ""
          : ` (Level ${item.spicinessLevel})`;

      message += `${index + 1}. ${item.title}${levelText} - Jumlah: ${item.quantity}\n`;
    });

    message += `\nTotal Produk: ${calculateTotalItems()}`;
    message += `\nTotal Harga: ${calculateTotalPrice()}`;
    message += "\n\nAlamat:\n*Note: Kirimkan juga Sharelok nya*";

    return message;
  };

  // Membuka WhatsApp
  const handleOrderNow = (phoneNumber) => {
    const message = generateWhatsAppMessage();

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Menyimpan keranjang ke localStorage
  useEffect(() => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  // Jika modal tidak ditampilkan
  if (!show) {
    return null;
  }

  return (
    <motion.div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-3"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        exit="exit"
        initial="hidden"
        animate="visible"
        variants={modalVariants}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-xl p-5 w-full max-w-md border border-pink-100 shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Tombol tutup */}
        <button
          onClick={onClose}
          aria-label="Tutup modal"
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition"
        >
          <IoClose className="w-8 h-8" />
        </button>

        {/* Judul modal */}
        <h2 className="text-2xl font-bold mb-4 pr-10 text-gray-800">
          {cartItems.length === 0
            ? "Informasi Reseller"
            : "Keranjang Belanja"}
        </h2>

        {/* Pengumuman */}
        <div className="mb-4 rounded-lg border border-pink-200 bg-pink-50 p-3">
          <div className="flex items-start gap-2">
            <span className="text-pink-600 text-lg">
              ℹ
            </span>

            <div>
              <p className="text-sm font-semibold text-pink-800 mb-1">
                Informasi Reseller
              </p>

              <p className="text-sm leading-relaxed text-gray-700">
                Nama belum tercantum? Hubungi Admin Ratu
                Paket Lebaran untuk verifikasi.
              </p>
            </div>
          </div>
        </div>

        {/* Isi keranjang */}
        {cartItems.length === 0 ? (
          <div className="py-3 text-center">
            <p className="text-gray-500 text-sm">
              Keranjang belanja kamu masih kosong.
            </p>
          </div>
        ) : (
          <div
            className={`border border-gray-200 rounded-lg p-2 ${
              cartItems.length > 3
                ? "max-h-72 overflow-y-auto custom-scrollbar"
                : ""
            }`}
          >
            {cartItems.map((item, index) => (
              <div
                key={`${item.id}-${item.spicinessLevel}-${index}`}
                className="mb-3 last:mb-0 bg-gray-50 p-3 rounded-lg"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-gray-800">
                      {item.title}
                    </h3>

                    {item.category !== "Minuman" && (
                      <p className="text-sm text-gray-600">
                        Level - {item.spicinessLevel}
                      </p>
                    )}

                    <p className="text-sm text-gray-700">
                      {item.price}
                    </p>

                    <p className="text-sm text-gray-600">
                      Jumlah: {item.quantity}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      removeFromCart(
                        item.id,
                        item.spicinessLevel
                      )
                    }
                    className="shrink-0 border border-red-200 py-1 px-3 rounded-md text-sm text-red-600 hover:bg-red-50 transition"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Total dan tombol pemesanan */}
        {cartItems.length > 0 && (
          <div className="mt-4 text-gray-800">
            <p className="text-xs text-gray-500 mb-3">
              Level 4 + Rp1.000 | Level 5 + Rp2.000
            </p>

            <div className="mb-4 border-t border-gray-200 pt-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">
                  Total Barang
                </span>

                <span className="font-bold">
                  {calculateTotalItems()}
                </span>
              </div>

              <div className="flex justify-between items-center gap-2">
                <span className="text-sm text-gray-600">
                  Total Harga
                </span>

                <span className="text-lg font-bold text-pink-700">
                  {calculateTotalPrice()}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() =>
                  handleOrderNow("6288297894942")
                }
              >
                Order Sekarang
              </Button>

              <Button
                onClick={() =>
                  handleOrderNow("6285755035870")
                }
                color="bg-red-500 text-white hover:bg-secondary hover:text-red-600"
              >
                Order Instant
              </Button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CartModal;
