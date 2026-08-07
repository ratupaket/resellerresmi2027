import React from 'react';

const CartModal = ({ isOpen, onClose, cartItems }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-black p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        <ul>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <li key={index} className="flex justify-between mb-2">
                <span>{item.title}</span>
                <span>{item.price}</span>
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500">Your cart is empty</li>
          )}
        </ul>
        <div className="flex justify-end mt-4">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
