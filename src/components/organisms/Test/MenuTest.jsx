import React from 'react';
import { menuList } from '../../../utils/MenuList';

const MenuTest = ({ addToCart }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {menuList.map((menu) => (
        <div key={menu.id} className="flex flex-col items-center gap-2 mt-4 bg-black w-72 p-4">
          <img src={menu.image} alt={menu.title} className="w-full h-auto" />
          <h1 className="text-white text-lg font-bold">{menu.title}</h1>
          <p className="text-gray-400">{menu.desc}</p>
          <p className="text-white font-semibold">{menu.price}</p>
          <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={() => addToCart(menu)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default MenuTest;
