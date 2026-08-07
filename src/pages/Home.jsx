import React from "react";
// import Navbar from "../components/organisms/Header/Navbar";
import Hero from "../components/organisms/Home/Hero";
import WhatsappButton from "../components/atoms/Buttons/WhatsappButton";
import PopularProduct from "../components/organisms/Home/PopularProduct";
import OrderSteps from "../components/organisms/Home/OrderSteps";
import Service from "../components/organisms/Home/Service";
import Footer from "../components/organisms/Footer/Footer";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <PopularProduct />
      <OrderSteps />
      <Service />
      <Footer />
      <WhatsappButton />
    </>
  );
};

export default Home;
