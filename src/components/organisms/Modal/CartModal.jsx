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

  // Function to calculate total price
  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      let additionalPrice = 0;
      if (item.spicinessLevel === 4) {
        additionalPrice = 1000;
      } else if (item.spicinessLevel === 5) {
        additionalPrice = 2000;
      }
      const numericPrice = parseFloat(
        item.price.replace(/[^0-9,-]+/g, "").replace(",", ".")
      );
      return total + (numericPrice + additionalPrice) * item.quantity;
    }, 0);

    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(totalPrice);
  };

  // Function to generate WhatsApp message content
  const generateWhatsAppMessage = () => {
    let message = "Atas Nama:\nPesanan Saya:\n";
    cartItems.forEach((item, index) => {
      let levelText =
        item.category === "Minuman" ? "" : ` (Level ${item.spicinessLevel})`;
      message += `${index + 1}. ${item.title}${levelText} - Jumlah: ${
        item.quantity
      }\n`;
    });
    message += `\nTotal Produk: ${calculateTotalItems()}\nTotal Harga: ${calculateTotalPrice()}\n\nAlamat:\n*Note: Kirimkan juga Sharelok nya*`;
    return message;
  };

  // Function to calculate total items
  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Function to handle Order Now button click
  const handleOrderNow = (phoneNumber) => {
    const message = generateWhatsAppMessage();
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  // Effect to update localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  if (!show) {
    return null;
  }

  return (
    <motion.div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        exit="exit"
        initial="hidden"
        animate="visible"
        variants={modalVariants}
        transition={{ duration: 0.3 }}
        className="bg-white/20 backdrop-blur-lg rounded-lg p-5 w-full max-w-md border"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary hover:text-gray-700"
        >
          <IoClose className="w-8 h-8" />
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-4">Announcement</h2>
        {cartItems.length === 0 ? (
          <p className="text-lg">Jika namanya tidak ada harap konfirmasi ke admin Ratu Paket Lebaran dan akan di cek terlebih dahulu.</p>
        ) : (
          <div
            className={`border rounded-md p-2 ${
              cartItems.length > 3
                ? "max-h-80 overflow-y-auto custom-scrollbar"
                : ""
            }`}
          >
            {cartItems.map((item, index) => (
              <div key={index} className="mb-4 bg-black/20 p-2 rounded-md">
                <div className="flex items-center justify-between pr-2">
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p>Level - {item.spicinessLevel}</p>
                    <p>{item.price}</p>
                    <p>Jumlah: {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.spicinessLevel)}
                    className="border py-1 px-2 rounded text-sm text-red-500 hover:text-red-700"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="mt-4">
            <p className="text-sm mb-2">
              Level 4 + Rp.1000 & Level 5 + Rp.2000
            </p>
            <div className="mb-2">
              <h3 className="text-lg font-bold">
                Total Barang: {calculateTotalItems()}
              </h3>
              <h3 className="text-lg font-bold">
                Total Harga: {calculateTotalPrice()}
              </h3>
            </div>
            <div className="flex justify-start gap-2">
              <Button onClick={() => handleOrderNow("6288297894942")}>
                Order Sekarang
              </Button>

              <Button
                onClick={() => handleOrderNow("6285755035870")}
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
