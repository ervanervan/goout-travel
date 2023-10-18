import React from "react";
import imgPackage1 from "../../assets/image-package1.png";
import imgPackage2 from "../../assets/image-package2.png";
import Button from "../Button/Button";

export default function Package() {
  return (
    <section className="container mx-auto py-[3.75rem] lg:py-[3.75rem] pb-[3.75rem] px-7">
      <div className="flex flex-col lg:flex-row lg:px-16 gap-14 items-center justify-between">
        <div className="flex w-full md:w-4/5 gap-8 items-center justify-center order-2 lg:order-1">
          <div className="border-2 lg:border-4 rounded-3xl border-bgPrimary p-2">
            <img src={imgPackage1} alt="" className="w-[18.25rem]" />
          </div>
          <div className="">
            <img src={imgPackage2} alt="" className="w-[17.50rem]" />
          </div>
        </div>
        <div className="flex flex-col justify-center text-start md:text-center lg:text-start order-1 lg:order-2">
          <h4 className="font-semibold text-base text-textPrimary">
            Our Package
          </h4>
          <h1 className="text-textNavy font-semibold text-2xl lg:text-3xl xl:text-4xl xl:leading-[3rem] mt-3">
            Popular Trip Packages
          </h1>
          <p className="text-sm lg:text-base text-textGray flex mx-auto lg:mx-0 text-start md:text-center lg:text-start leading-6 lg:leading-8 mb-8 md:w-4/6 lg:w-full xl:w-[85%] 2xl:w-4/5">
            A new way to travel by air the easy and fast way. Try it now by
            filling out the form below!
          </p>
          <div className="flex gap-6 flex-row md:justify-center lg:justify-start">
            <div>
              <h3 className="text-textNavy font-semibold text-lg lg:text-xl">
                120+
              </h3>
              <p className="text-sm lg:text-base text-textGray leading-6 lg:leading-8 mb-8">
                Destination
              </p>
            </div>
            <div>
              <h3 className="text-textNavy font-semibold text-lg lg:text-xl">
                560+
              </h3>
              <p className="text-sm lg:text-base text-textGray leading-6 lg:leading-8 mb-8">
                Luxury Hotels
              </p>
            </div>
            <div>
              <h3 className="text-textNavy font-semibold text-lg lg:text-xl">
                135K+
              </h3>
              <p className="text-sm lg:text-base text-textGray leading-6 lg:leading-8 mb-8">
                Happy Tourists
              </p>
            </div>
          </div>
          <div className="flex items-center md:justify-center lg:justify-start gap-4 md:gap-8">
            <Button isPrimary>Choose Package</Button>
            <Button isGray>View More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
