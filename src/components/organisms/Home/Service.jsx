import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GiTrophyCup } from "react-icons/gi";
import { BsRocketTakeoff } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import Title from "../../atoms/Text/Title";
import TextLine from "../../atoms/Text/TextLine";

const services = [
  {
    id: 1,
    icon: <GiTrophyCup className="w-8 h-8" />,
    title: "Mengutamakan Kualitas",
    description: "Selalu memberikan produk terbaik dan terpercaya untuk semua reseller.",
  },
  {
    id: 2,
    icon: <BsRocketTakeoff className="w-8 h-8" />,
    title: "Menuju Kuantitas",
    description: "Terus berkembang pesat untuk memenuhi kebutuhan pasar yang semakin tinggi.",
  },
  {
    id: 3,
    icon: <RiCustomerService2Fill className="w-8 h-8" />,
    title: "Pelayanan Tanpa Batas",
    description: "Layanan responsif yang siap membantu kapan saja dan di mana saja.",
  },
];

const ServiceItem = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <style>{`
        /* Animasi Ikon Melayang */
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .h-icon-float {
          animation: iconFloat 3s ease-in-out infinite;
          animation-delay: ${index * 0.4}s;
        }
      `}</style>

      <motion.div
        ref={ref}
        className="relative group cursor-default"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ 
          duration: 0.7, 
          delay: index * 0.2, 
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        {/* Card Utama (Gold Glass - Bukan Putih, Bukan Item) */}
        <div className="relative h-full p-6 bg-amber-100/40 backdrop-blur-md rounded-2xl border border-amber-300/40 group-hover:border-amber-400/70 transition-all duration-500 shadow-lg shadow-amber-200/30 group-hover:shadow-xl group-hover:shadow-amber-300/40">
          
          {/* Ikon Container (Bergerak Melayang) */}
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-amber-200/50 border border-amber-300/50 text-amber-600 mb-5 h-icon-float group-hover:bg-amber-200 transition-colors duration-300">
            {service.icon}
          </div>

          {/* Teks (Warna Cokelat Tua Biar Jelas Di Background Terang) */}
          <h3 className="text-xl font-londrina font-bold tracking-wider text-amber-900 group-hover:text-amber-700 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="mt-2 text-[15px] text-amber-800/70 leading-relaxed font-montserrat group-hover:text-amber-900/90 transition-colors duration-300">
            {service.description}
          </p>
        </div>
      </motion.div>
    </>
  );
};

const Services = () => {
  return (
    <>
      <TextLine />
      <section className="mt-4 mb-16 px-6">
        <Title>Ratu Paket <br /> Lebaran</Title>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <ServiceItem 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;