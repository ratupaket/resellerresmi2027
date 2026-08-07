import React from "react";
// import Navbar from "../components/organisms/Header/Navbar";
import WhatsappButton from "../components/atoms/Buttons/WhatsappButton";
import Maps from "../components/organisms/Contact/Maps";
import Footer from "../components/organisms/Footer/Footer";

const Contact = () => {
  return (
    <section>
      {/* <Navbar /> */}
      <Maps />
      <Footer/>
      <WhatsappButton />
    </section>
  );
};

export default Contact;
