import React from "react";
import logo from "../../assets/logo-goout.svg";
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <header className="container mx-auto bg-bgWhite p-7">
      <nav className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="logo goout" />
          <h2 className="font-semibold text-textPrimary text-2xl">Goout</h2>
        </div>
        <div className="flex items-center justify-center gap-8 list-none text-base text-textGray">
          <li className="hover:text-textPrimary duration-300">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-textPrimary duration-300">
            <a href="/flight">Flight</a>
          </li>
          <li className="hover:text-textPrimary duration-300">
            <a href="/hotel">Hotel</a>
          </li>
          <li className="hover:text-textPrimary duration-300">
            <a href="/travelpackage">Travel Package</a>
          </li>
          <li className="hover:text-textPrimary duration-300">
            <a href="/contactus">Contact Us</a>
          </li>
        </div>
        <Button isSecondary>My Account</Button>
      </nav>
    </header>
  );
}
