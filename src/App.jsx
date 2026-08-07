import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import MenuList from './pages/MenuList.jsx';
import Navbar from './components/organisms/Header/Navbar.jsx';
import CartModal from './components/organisms/Modal/CartModal.jsx';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });
  const [showCartModal, setShowCartModal] = useState(false);

  // Load cart items from localStorage on initial render
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  // Save cart items to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) =>
        cartItem.id === item.id && cartItem.spicinessLevel === item.spicinessLevel
    );

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id && cartItem.spicinessLevel === item.spicinessLevel
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(updatedCartItems);
    }
  };

  const removeFromCart = (id, spicinessLevel) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => !(cartItem.id === id && cartItem.spicinessLevel === spicinessLevel)
    );
    setCartItems(updatedCartItems);
  };

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  return (
    <Router>
      <Navbar cartItems={cartItems} toggleCartModal={toggleCartModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product addToCart={addToCart} />} />
        <Route path="/menulist" element={<MenuList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <CartModal
        show={showCartModal}
        onClose={toggleCartModal}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </Router>
  );
}

export default App;
