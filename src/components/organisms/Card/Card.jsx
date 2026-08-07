import React from "react";
import CardButton from "../../atoms/Buttons/CardButton";

const Card = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="glass-card relative flex flex-col justify-between w-38 rounded-xl shadow-lg cursor-pointer"
    >
      {children}
    </div>
  );
};

const Top = ({ image, title, desc }) => {
  return (
    <div>
      <figure className="p-2 flex justify-center items-center bg-white/20 rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-28 h-28 object-cover drop-shadow-[20px_20px_30px_rgba(0,0,0,0.58)]"
        />
      </figure>
      <div className="px-3 pt-2">
        <h2 className="font-londrina tracking-wider text-gray-800">{title}</h2>
        <p className="font-montserrat text-sm text-gray-600 line-clamp-1 mb-1">{desc}</p>
      </div>
    </div>
  );
};

const Bottom = ({ price }) => {
  return (
    <div>
      <div className="flex flex-col items-start px-3 pb-2">
        <p className="font-montserrat font-bold text-gray-800 text-sm">{price}</p>
      </div>
      {/* ✅ FIX: Pakai tag button native dengan class CSS yang sangat kuat agar tidak hilang/ditinpa */}
      <div className="flex flex-col justify-center items-center px-2 pb-3">
        <button className="btn-detail-fix">
          Detail
        </button>
      </div>
    </div>
  );
};

const Reseller = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center px-2 pb-3">
      <CardButton>Lihat</CardButton>
    </div>
  );
};

const Ranks = ({ id }) => {
  return (
    <div className="absolute -top-4 -right-2 w-10 h-10 rounded-full bg-tertiary border border-white/30 flex justify-center items-center shadow-md">
      <p className="font-rocksalt text-white text-sm">{id}</p>
    </div>
  );
};

Card.Top = Top;
Card.Bottom = Bottom;
Card.Reseller = Reseller;
Card.Ranks = Ranks;

export default Card;