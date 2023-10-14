import React from "react";
import Navbar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero";
import Service from "../components/Service/Service";
import Package from "../components/Package/Package";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Package />
    </>
  );
};

export default HomePage;
