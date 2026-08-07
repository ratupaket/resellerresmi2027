import React from "react";
// import Navbar from "../components/organisms/Header/Navbar";
import WhatsappButton from "../components/atoms/Buttons/WhatsappButton";
import OurTeam from "../components/organisms/About/OurTeam";
import Footer from "../components/organisms/Footer/Footer";

const About = () => {
  return (
    <section>
      {/* <Navbar /> */}
      <OurTeam />
      <Footer />
      <WhatsappButton />
    </section>
  );
};

export default About;
