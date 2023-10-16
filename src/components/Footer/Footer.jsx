import React from "react";
import logo from "../../assets/footer-logo.svg";

export default function Footer() {
  return (
    <footer className="bg-bgNavy text-textWhite">
      <div className="container mx-auto px-7 py-10 xl:py-[6.25rem]">
        <div className="flex lg:gap-[6.25rem] flex-col lg:flex-row">
          <div className="flex flex-col gap-4 basis-full lg:basis-[20%] mb-12">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="logo goout"
                className="w-5 h-6 md:w-6 md:h-7"
              />
              <h2 className="font-semibold text-textWhite text-xl md:text-2xl">
                Goout
              </h2>
            </div>
            <p className="text-textWhitehite text-sm md:text-base flex flex-col">
              Copyright © 2022. <span> All Rights Reserved.</span>
            </p>
          </div>
          <div className="flex gap-[4.25rem] md:gap-[6.25rem] flex-wrap">
            <div className="flex flex-col gap-4">
              <h3 className="text-textWhite font-medium text-sm md:text-base">
                Page Menus
              </h3>
              <ul className="list-none text-textGray flex flex-col gap-3 text-sm md:text-base">
                <li className="hover:underline">
                  <a href="#">Home</a>
                </li>
                <li className="hover:underline">
                  <a href="#">About Us</a>
                </li>
                <li className="hover:underline">
                  <a href="#">Contact Us</a>
                </li>
                <li className="hover:underline">
                  <a href="#">My Account</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-textWhite font-medium text-sm md:text-base">
                Our Product
              </h3>
              <ul className="list-none text-textGray flex flex-col gap-3 text-sm md:text-base">
                <li className="hover:underline">
                  <a href="#">Booking Flight</a>
                </li>
                <li className="hover:underline">
                  <a href="#">Booking Hotels</a>
                </li>
                <li className="hover:underline">
                  <a href="#">Trip Package</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-textWhite font-medium text-sm md:text-base">
                Social Media
              </h3>
              <ul className="list-none text-textGray flex flex-col gap-3 text-sm md:text-base">
                <li className="hover:underline">
                  <a href="#">Twitter</a>
                </li>
                <li className="hover:underline">
                  <a href="#">Tiktok</a>
                </li>
                <li className="hover:underline">
                  <a href="#">Facebook</a>
                </li>
                <li className="hover:underline">
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
