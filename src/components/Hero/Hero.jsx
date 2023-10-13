import React from "react";
import heroImage from "../../assets/hero-image.svg";
import Tab from "../Tab/Tab";

export default function Hero() {
  return (
    <section className="relative container mx-auto px-7 pb-[3.75rem]">
      <div className="bg-bgGray rounded-3xl flex justify-between">
        <div className="px-[3.75rem] pt-24">
          <h1 className="text-textNavy font-bold text-5xl leading-[4.50rem] flex flex-col">
            Find The Best Place <span> to Stress Release </span>
          </h1>
          <p className="text-textSecondary text-base leading-[2rem] flex flex-col">
            A new way to travel by air the easy and fast way.
            <span> Try it now by filling out the form below! </span>
          </p>
        </div>
        <div>
          <img src={heroImage} alt="gambar pemandangan" width={600} />
        </div>
        <div className="absolute bottom-24 left-0 right-0 w-full">
          <Tab />
        </div>
      </div>
    </section>
  );
}
