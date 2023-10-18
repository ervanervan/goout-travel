import React, { useState } from "react";
import logo from "../../assets/logo-goout.svg";
import Button from "../Button/Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto bg-bgWhite p-7">
      <nav className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="logo goout" className="w-5 h-6 md:w-6 md:h-7" />
          <h2 className="font-semibold text-textPrimary text-xl md:text-2xl">
            Goout
          </h2>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center justify-center gap-8 list-none text-sm lg:text-base text-textGray">
            <li className="hover:text-textPrimary duration-300">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-textPrimary duration-300">
              <a href="#flight">Flight</a>
            </li>
            <li className="hover:text-textPrimary duration-300">
              <a href="#hotel">Hotel</a>
            </li>
            <li className="hover:text-textPrimary duration-300">
              <a href="#travelpackage">Travel Package</a>
            </li>
            <li className="hover:text-textPrimary duration-300">
              <a href="#contactus">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <Button isSecondary>My Account</Button>
        </div>
        <div className="md:hidden cursor-pointer">
          <Bars3Icon
            className="h-6 w-6 text-textPrimary"
            onClick={handleOpen}
          />
        </div>
        <div
          className={`fixed top-0 right-0 w-full h-screen z-30 bg-black/30 backdrop-blur-md md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-all`}
        >
          <div className="absolute top-0 right-0 h-screen w-3/4 bg-bgWhite px-10 py-20 flex">
            <XMarkIcon
              className="h-6 w-6 text-textPrimary absolute top-7 right-7 cursor-pointer"
              onClick={handleOpen}
            />
            <ul className="flex flex-col basis-full justify-center gap-8 list-none text-base text-textGray">
              <li className="hover:text-textPrimary duration-300">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-textPrimary duration-300">
                <a href="#flight">Flight</a>
              </li>
              <li className="hover:text-textPrimary duration-300">
                <a href="#hotel">Hotel</a>
              </li>
              <li className="hover:text-textPrimary duration-300">
                <a href="#travelpackage">Travel Package</a>
              </li>
              <li className="hover:text-textPrimary duration-300">
                <a href="#contactus">Contact Us</a>
              </li>
              <div className="md:hidden">
                <Button isSecondary>My Account</Button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
