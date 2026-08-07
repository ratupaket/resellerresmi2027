import React from "react";
import { motion } from "framer-motion";
import { menuCategories } from "../utils/menuCategories";
import { useInView } from "react-intersection-observer";
import Title from "../components/atoms/Text/Title";
import Footer from "../components/organisms/Footer/Footer";
import CardButton from "../components/atoms/Buttons/CardButton";

const MenuList = () => {
  const { ref: section2Ref, inView: section2InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
    <section className="py-10 mb-6 px-6">
      <div className="flex flex-col items-center justify-center">
      <Title>Program & Aktivitas</Title>
      <p className="text-center">Berikut kegiatan yang ada di Ratu Paket Lebaran</p>
      </div>
      <motion.div
        ref={section2Ref}
        className="flex flex-col justify-center items-center mt-8 gap-2"
        initial={{ opacity: 0, y: 50 }}
        animate={section2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {/* <h2 className="text-xl font-londrina tracking-wider">Kami Menyediakan</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-black/10 backdrop-blur-xl p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-rocksalt tracking-wider mb-4">{category.category}</h3>
              <ul className="space-y-4">
                {category.items.map((item, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="text-lg font-semibold">{item.name}</span>
                    <span className="text-sm mb-1">{item.description}</span>
                    <span className="text-lg font-bold">{item.price}</span>
                    <span className="border-b border-tertiary"></span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
      <Footer/>
    </>
  );
};

export default MenuList;
