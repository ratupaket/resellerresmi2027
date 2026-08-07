import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import CartModal from './CartModal';

const CartTest = ({ cartItems }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>
        <BsCart2 className="w-10 h-10" />
      </button>
      <CartModal isOpen={isModalOpen} onClose={handleCloseModal} cartItems={cartItems} />
    </div>
  );
}

export default CartTest;
