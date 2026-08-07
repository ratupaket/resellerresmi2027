import React, { useState } from 'react';
import CartTest from '../components/organisms/Test/CartTest';
import MenuTest from '../components/organisms/Test/MenuTest';

const Test = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (menuItem) => {
    setCartItems((prevItems) => [...prevItems, menuItem]);
  };

  return (
    <div>
      <CartTest cartItems={cartItems} />
      <MenuTest addToCart={addToCart} />
    </div>
  );
}

export default Test;
