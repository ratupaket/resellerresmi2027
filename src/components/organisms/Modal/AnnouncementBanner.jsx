import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

const AnnouncementBanner = () => {
  return (
    <div className="w-full border-b border-pink-200 bg-pink-50 px-3 py-2 sm:px-5">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
        <IoInformationCircleOutline className="h-4 w-4 shrink-0 text-pink-600" />

        <p className="text-center text-xs leading-relaxed text-gray-700 sm:text-sm">
          <span className="font-semibold text-pink-700">
            Informasi Reseller:
          </span>{" "}
          Nama belum tercantum? Hubungi Admin Ratu Paket Lebaran
          untuk verifikasi.
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
