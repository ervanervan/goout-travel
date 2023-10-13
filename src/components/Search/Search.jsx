import React from "react";
import Button from "../Button/Button";
import iconMap from "../../assets/icon-map.svg";
import iconGps from "../../assets/icon-gps.svg";
import iconCalendar from "../../assets/icon-calendar.svg";
import iconChair from "../../assets/icon-chair.svg";

export default function () {
  return (
    <div className="py-7 bg-bgWhite rounded-b-xl rounded-tr-xl">
      <div className="grid grid-cols-4 items-center justify-center">
        <div className="px-8 flex gap-4 items-center justify-between">
          <img src={iconMap} alt="" />
          <div>
            <select
              id="location"
              name="location"
              autoComplete="location-name"
              className="w-full rounded-md py-1 text-textNavy text-base appearance-none font-medium ring-bgPrimary focus:ring-0 focus:ring-inset focus:ring-bgPrimary"
            >
              <option>NTB, Lombok</option>
              <option>Ubud, Bali</option>
              <option>Kepulauan Seribu, Jakarta</option>
            </select>
            <label className="text-xs text-textGray">
              Select the locations
            </label>
          </div>
          <img src={iconGps} alt="" />
        </div>
        <div className="px-8 flex gap-4 items-center justify-between">
          <img src={iconCalendar} alt="" />
          <div className="">
            <input
              placeholder="Select a date"
              type="date"
              className="w-full rounded-md py-1 text-textNavy text-base font-medium ring-bgPrimary focus:ring-0 focus:ring-inset focus:ring-bgPrimary"
            />
            <label className="text-xs text-textGray">Choose Flight Date</label>
          </div>
          <img src={iconGps} alt="" />
        </div>
        <div className="px-8 flex gap-4 items-center justify-between">
          <img src={iconChair} alt="" />
          <div className="">
            <select
              id="flighttype"
              name="flighttype"
              autoComplete="flight-type"
              className="w-full rounded-md py-1 text-textNavy text-base appearance-none font-medium ring-bgPrimary focus:ring-0 focus:ring-inset focus:ring-bgPrimary"
            >
              <option>Economy</option>
              <option>Basic Economy</option>
              <option>Premium</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First Suites</option>
              <option>First</option>
            </select>
            <label className="text-xs text-textGray">Choose Flight type</label>
          </div>
          <img src={iconGps} alt="" />
        </div>
        <div className="px-8 flex flex-col">
          <Button isPrimary>Search Flight</Button>
        </div>
      </div>
    </div>
  );
}