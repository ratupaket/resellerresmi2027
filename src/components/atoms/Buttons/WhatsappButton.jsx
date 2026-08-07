import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramURL = () => {
  const InstagramURL = `https://www.instagram.com/officialratupaketpurwakarta/`;

  return (
    <a
      href={InstagramURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-pink-500 hover:bg-pink-600 transition duration-300 ease-in-out text-white rounded-full p-3 shadow-lg flex items-center justify-center group"
    >
      <FaInstagram size={28} />
      <span className="text-center opacity-0 bg-pink-500 text-white text-xs rounded-md py-1 px-2 absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
        Ikuti Kami
      </span>
    </a>
  );
};

export default InstagramURL;
