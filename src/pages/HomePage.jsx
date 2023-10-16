import React from "react";
import Navbar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero";
import Service from "../components/Service/Service";
import Package from "../components/Package/Package";
import Destination from "../components/Destination/Destination";
import Promotion from "../components/Promotion/Promotion";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Package />
      <Destination />
      <Promotion />
      <Footer />
    </>
  );
};

export default HomePage;
