import React from "react";
import Button from "../Button/Button";
import CardDestination from "../Card/CardDestination";
import { DATA_DESTINATIONS } from "../../Data";

export default function Destination() {
  return (
    <section className="container mx-auto py-[3.75rem] lg:py-[3.75rem] pb-[3.75rem] px-7">
      <div className="text-center">
        <div>
          <h1 className="text-textNavy font-semibold md:mb-3 text-2xl lg:text-3xl xl:text-4xl xl:leading-[3rem]">
            Explore Natural Destinations
          </h1>
          <p className="text-sm lg:text-base text-textGray mx-auto leading-6 lg:leading-8 md:w-[25rem]">
            A new way to travel by air the easy and fast way. Try it now by
            filling out the form below!
          </p>
        </div>
        <div className="py-[3.75rem] flex flex-wrap gap-8 items-center justify-center">
          {DATA_DESTINATIONS.map((data) => {
            return <CardDestination key={data.id} {...data} />;
          })}
        </div>
        <div>
          <Button isWhiteMore>View More</Button>
        </div>
      </div>
    </section>
  );
}
