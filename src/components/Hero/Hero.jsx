import React from "react";
import heroImage from "../../assets/hero-image.svg";
import Tab from "../Tab/Tab";

export default function Hero() {
  return (
    <section className="relative container mx-auto px-7 pb-[3.75rem]">
      <div className="bg-bgGray rounded-3xl flex flex-col md:flex-row justify-between">
        <div className="px-7 md:px-10 xl:px-[3.75rem] pt-8 md:pt-8 lg:pt-16 xl:pt-24 flex-1">
          <h1 className="text-textNavy font-bold text-2xl lg:text-4xl xl:text-5xl xl:leading-[4.50rem] 2xl:w-3/4 mb-2 lg:mb-4">
            Find The Best Place to Stress Release
          </h1>
          <p className="text-textSecondary text-xs leading-5 xl:text-base xl:leading-8 md:w-4/5 2xl:w-3/5">
            A new way to travel by air the easy and fast way. Try it now by
            filling out the form below!
          </p>
        </div>
        <div className="flex-1 m-7 md:m-0">
          <img
            src={heroImage}
            alt="gambar pemandangan"
            className="xl:max-w-[37.50rem]"
          />
        </div>
        <div className="md:hidden mb-7">
          <Tab />
        </div>
        <div className="absolute bottom-0 lg:bottom-24 left-0 right-0 w-full hidden md:block">
          <Tab />
        </div>
      </div>
    </section>
  );
}
