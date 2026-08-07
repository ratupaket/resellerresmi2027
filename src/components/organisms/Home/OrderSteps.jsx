import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Title from "../../atoms/Text/Title";

const steps = [
  {
    id: 1,
    title: "Pergi ke Halaman Reseller",
    description: "Buka menu navigasi atau klik langsung tombol 'Cari Reseller' di halaman utama.",
  },
  {
    id: 2,
    title: "Pilih Kategori",
    description: "Pilih kategori atau grup wilayah sesuai dengan nama yang ingin Anda cari.",
  },
  {
    id: 3,
    title: "Ketik Nama",
    description: "Masukkan nama reseller dengan lengkap sesuai dengan nama aslinya.",
  },
  {
    id: 4,
    title: "Lihat Detail",
    description: "Klik tombol 'Detail' untuk melihat informasi data secara lebih lengkap.",
  },
  {
    id: 5,
    title: "Selesai",
    description: "Nama yang tercantum sudah pasti sesuai dengan data resmi yang masuk ke pusat.",
  },
];

const StepItem = ({ step, index, isLast }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15, 
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      {/* Glow Border saat Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/50 via-transparent to-amber-500/50 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
      
      {/* Card Utama */}
      <div className="relative flex items-start p-4 md:p-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-amber-500/30 transition-colors duration-500">
        
        {/* Number Badge */}
        <div className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-base shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform duration-300">
          {step.id}
        </div>

        {/* Text */}
        <div className="ml-3 md:ml-4">
          <h3 className="text-xl md:text-2xl font-londrina font-bold tracking-wider text-white group-hover:text-amber-300 transition-colors duration-300">
            {step.title}
          </h3>
          
          {/* Teks Tutorial Diperjelas: Ukuran naik, Warna lebih terang, Jarak ditambah */}
          <p className="mt-2 text-[15px] md:text-[17px] text-white/90 leading-relaxed font-londrina">
            {step.description}
          </p>
        </div>
      </div>

      {/* Garis Penghubung */}
      {!isLast && (
        <motion.div
          className="absolute left-[1.2rem] md:left-[1.35rem] top-12 md:top-14 w-[2px] h-[calc(100%+0.75rem)] bg-gradient-to-b from-amber-500/60 to-transparent origin-top"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.4 }}
        />
      )}
    </motion.div>
  );
};

const OrderSteps = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      
      {/* Background Glow Dekorasi */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <Title>Cara Mencari Reseller</Title>

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 mt-12">
          
          {/* STEP LIST */}
          <div className="relative flex flex-col space-y-5 w-full lg:w-1/2">
            {steps.map((step, index) => (
              <StepItem 
                key={step.id} 
                step={step} 
                index={index} 
                isLast={index === steps.length - 1} 
              />
            ))}
          </div>
          
          {/* ILLUSTRATION */}
          <div className="relative hidden md:flex flex-col items-center justify-center w-full lg:w-1/3 mt-10 lg:mt-0">
            
            <div className="absolute w-80 h-80 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />

            <motion.img
              src="/images/userr1.png"
              alt="Illustration"
              className="w-full max-w-sm relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              animate={{ y: [-12, 12, -12] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mt-8 z-10"
            >
              <h2 className="text-3xl font-londrina font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-white to-amber-300">
                Amanah & Terpercaya
              </h2>
              <p className="mt-2 pb-2 text-white/80 font-londrina tracking-wider">
                Akan Semakin Di Depan Yes Yes Yes
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSteps;