import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Title from "../../atoms/Text/Title";
import Button from "../../atoms/Buttons/Button";
import CardButton from "../../atoms/Buttons/CardButton";
import PopularMenuModal from "../Modal/PopularMenuModal"; // Import the modal component

const PopularMenu = [
  {
    id: 1,
    image: "/images/animasi.png",
    title: "Meet & Greet Goes To 6TH",
    desc: "Meet and Greet adalah momen spesial yang mempertemukan seluruh reseller dari berbagai daerah dalam satu acara penuh kehangatan. Kegiatan ini diselenggarakan sebagai bentuk rasa syukur dari owner Ratu Paket atas semangat, kerja keras, dan loyalitas para reseller, terutama setelah selesainya pembagian paket lebaran.",
    price: "Minimal 25 Anggota",
  },
  {
    id: 2,
    image: "/images/animasi1.png",
    title: "Sharing & Caring",
    desc: "Ratu Paket memperkenalkan nilai-nilai kebersamaan, kejujuran, dan saling mendukung yang menjadi dasar dari setiap langkah kami.",
    price: "All Agen",
  },
  {
    id: 3,
    image: "/images/animasi2.png",
    title: "Family Gathering",
    desc: "Acara ini menjadi bentuk apresiasi dan rasa syukur atas kerja keras dan perjalanan panjang yang telah dilalui bersama. Dalam suasana santai dan penuh kehangatan, kita akan menikmati berbagai kegiatan seru, hiburan, dan tentunya kebersamaan yang tak terlupakan.",
    price: "Minimal 60 Anggota",
  },
  {
    id: 4,
    image: "/images/animasi3.png",
    title: "Undian Khusus Anggota",
    desc: "Sebagai bentuk apresiasi untuk para anggota setia, Ratu Paket mengadakan Undian Khusus bagi yang telah melakukan pembayaran penuh Sebagai bentuk apresiasi untuk para anggota setia, Ratu Paket mengadakan Undian Khusus bagi yang telah melakukan pembayaran penuh (lunas) dari bulan April hingga Desember.",
    price: "Anggota Ratu Paket",
  },
  {
    id: 5,
    image: "/images/animasi4.png",
    title: "Trip Khusus Prioritas",
    desc: "Sebagai bentuk penghargaan tertinggi bagi para anggota prioritas, Ratu Paket mempersembahkan Trip Khusus Gala Dinner — sebuah momen eksklusif untuk merayakan pencapaian, kebersamaan, dan loyalitas luar biasa.",
    price: "Prioritas Ratu Paket",
  },
];

const PopularProduct = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const openModal = (menu) => {
    setSelectedMenu(menu);
  };

  const closeModal = () => {
    setSelectedMenu(null);
  };

  return (
    <section className="pt-12 px-6">
      {/* TITLE */}

      {/* POPULAR MENU CARD */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {PopularMenu.map((menu, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <motion.div
              ref={ref}
              className=""
              key={menu.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
      
            </motion.div>
          );
        })}
      </div>

      {/* BUTTON */}
      <div className="w-full flex flex-col justify-center items-center mt-8">
        <Link to="https://www.ratupaket.com">
          <Button color="bg-tertiary text-secondary hover:bg-secondary hover:text-primary">
            Website Resmi Ratu Paket
          </Button>
        </Link>
      </div>

      {/* MODAL */}
      {selectedMenu && (
        <PopularMenuModal
          show={!!selectedMenu}
          onClose={closeModal}
          menu={selectedMenu}
        />
      )}
    </section>
  );
};

export default PopularProduct;
