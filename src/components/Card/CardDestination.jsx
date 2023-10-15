import React from "react";
import Button from "../Button/Button";

export default function CardDestination({
  name,
  iconMap,
  location,
  price,
  type,
  imgUrl,
  iconStar,
  rating,
}) {
  return (
    <div className="w-[17.50rem] shadow-xl text-start pt-4 pb-6 rounded-3xl">
      <div className="rounded-3xl mb-4">
        <img src={imgUrl} alt="destination place" className="rounded-3xl" />
      </div>
      <div className="px-4">
        <h4 className="text-textNavy font-semibold text-base md:text-lg">
          {name}
        </h4>
        <h6 className="flex gap-1 mb-4 text-textSecondary">
          <img src={iconMap} alt="" />
          {location}
        </h6>
        <div className="flex items-center justify-between">
          <p className="text-textNavy font-semibold text-base md:text-lg">
            {price}
            <span className="text-textSecondary text-sm md:text-base font-normal">
              / {type}{" "}
            </span>
          </p>
          <Button isBook>Book</Button>
        </div>
      </div>
    </div>
  );
}
