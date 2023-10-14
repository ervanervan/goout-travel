import React from "react";
import icon1 from "../../assets/icon-service1.svg";
import icon2 from "../../assets/icon-service2.svg";
import icon3 from "../../assets/icon-service3.svg";
import icon4 from "../../assets/icon-service4.svg";

export default function Service() {
  return (
    <section className="container mx-auto px-7 py-[3.75rem]">
      <div className="bg-bgGray rounded-3xl grid md:grid-cols-2 xl:grid-cols-3 px-7 md:px-10 xl:px-[3.75rem] gap-5 lg:gap-[3.75rem] py-10 items-center justify-center">
        <div className="flex flex-col text-center xl:text-left md:col-span-2 lg:col-span-3 xl:col-auto">
          <h4 className="font-semibold text-base text-textPrimary">
            Our Service
          </h4>
          <h1 className="text-textNavy font-semibold text-2xl lg:text-3xl xl:text-4xl xl:leading-[3rem] mt-1">
            We Offer Best Service
          </h1>
        </div>
        <div className="flex flex-col gap-5 lg:gap-[3.75rem]">
          <div className="flex gap-5 lg:gap-8 items-start">
            <img src={icon1} alt="" />
            <div>
              <h3 className="font-semibold text-textNavy text-xl leading-8">
                Calculated Weather
              </h3>
              <p className="text-base text-textGray leading-8">
                A new way to travel by air the easy and fast way.
              </p>
            </div>
          </div>
          <div className="flex gap-5 lg:gap-8 items-start">
            <img src={icon2} alt="" />
            <div>
              <h3 className="font-semibold text-textNavy text-xl leading-8">
                Best Place to Stay
              </h3>
              <p className="text-base text-textGray leading-8">
                A new way to travel by air the easy and fast way.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:gap-[3.75rem]">
          <div className="flex gap-5 lg:gap-8 items-start">
            <img src={icon3} alt="" />
            <div>
              <h3 className="font-semibold text-textNavy text-xl leading-8">
                Best Experience Flight
              </h3>
              <p className="text-base text-textGray leading-8">
                A new way to travel by air the easy and fast way.
              </p>
            </div>
          </div>
          <div className="flex gap-5 lg:gap-8 items-start">
            <img src={icon4} alt="" />
            <div>
              <h3 className="font-semibold text-textNavy text-xl leading-8">
                Easy-To-Use
              </h3>
              <p className="text-base text-textGray leading-8">
                A new way to travel by air the easy and fast way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
