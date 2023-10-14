import React from "react";
import logo from "../../assets/logo-goout.svg";
import Button from "../Button/Button";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <header className="container mx-auto bg-bgWhite p-7">
      <nav className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="logo goout" />
          <h2 className="font-semibold text-textPrimary text-2xl">Ori keren</h2>
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
        <div className="md:hidden">
          <Bars3Icon className="h-6 w-6 text-textPrimary" />
        </div>
      </nav>
    </header>
  );
}
