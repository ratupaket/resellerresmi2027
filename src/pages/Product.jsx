import React, { useState, useEffect } from "react";
import Menu from "../components/organisms/Products/Menu";
import Footer from "../components/organisms/Footer/Footer";
import WhatsappButton from "../components/atoms/Buttons/WhatsappButton";
import CartModal from "../components/organisms/Modal/CartModal";

const Product = ({ addToCart }) => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Update localStorage when cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleCardClick = (menu) => {
    setSelectedMenu(menu);
  };

  const removeFromCart = (id, spicinessLevel) => {
    const updatedCartItems = cartItems.filter(
      (item) => !(item.id === id && item.spicinessLevel === spicinessLevel)
    );
    setCartItems(updatedCartItems); // Update cartItems state
  };

  return (
    <section>
      <Menu addToCart={addToCart} onCardClick={handleCardClick} />
      <Footer />
      <WhatsappButton />
      <CartModal
        cartItems={cartItems}
        setCartItems={setCartItems} // Pass the setter function to CartModal
        removeFromCart={removeFromCart} // Pass removeFromCart function to CartModal
      />
    </section>
  );
};

export default Product;
