import React from "react";
import vectorWorld from "../../assets/vector-world.png";
import Button from "../Button/Button";
import imgTestimonial from "../../assets/image-testimonial.png";
import iconLove from "../../assets/icon-love.svg";

export default function Promotion() {
  return (
    <section className="container mx-auto py-[3.75rem] lg:py-[3.75rem] pb-[3.75rem] px-7 md:mb-[7.50rem]">
      <div className="relative">
        <div className="overflow-hidden relative bg-bgDark py-[4.75rem] md:rounded-tl-[9rem] rounded-3xl px-4 md:px-0">
          <div className="text-center">
            <div className="absolute top-0 right-0 left-0 z-10">
              <img
                src={vectorWorld}
                alt=""
                className="w-full h-full object-fit"
              />
            </div>
            <div className="relative top-0 right-0 left-0 z-20">
              <h4 className="font-semibold text-base text-textPrimary mb-1">
                New User
              </h4>
              <h1 className="text-textNavy font-semibold text-2xl mx-auto lg:text-3xl xl:text-4xl xl:leading-[3rem] mb-3 md:w-1/2 lg:w-[45%] xl:w-[42%] 2xl:w-[35%]">
                Dont Miss The 50% Discount If You Register Today
              </h1>
              <p className="text-sm lg:text-base text-textGray leading-6 mx-auto lg:leading-8 mb-8 md:w-[40%] lg:w-[35%] xl:w-[27%] 2xl:w-[22%]">
                Let's maximize your next holiday with us with the best
                experience.
              </p>
              <Button isPrimary>Register Account</Button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-16 lg:left-12 z-10 hidden md:block">
          <img src={imgTestimonial} alt="" className="max-w-[250px]" />
        </div>
        <div className="absolute -top-9 -right-9 z-10 bg-bgWhite p-4 rounded-full hidden md:block">
          <img src={iconLove} alt="" width={50} height={50} />
        </div>
      </div>
    </section>
  );
}
