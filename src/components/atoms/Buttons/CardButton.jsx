import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CardButton = (props) => {
  const {
    children,
    color = "bg-tertiary text-white hover:bg-secondary hover:text-red-600",
    onClick = () => {},
    type = "submit",
  } = props;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.button
      ref={ref}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      type={type}
      onClick={onClick}
      className={`flex items-center justify-between px-6 py-1 transition-all rounded-md ${color} shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition duration-300 ease-in-out`}
    >
      {children}
    </motion.button>
  );
};

export default CardButton;
