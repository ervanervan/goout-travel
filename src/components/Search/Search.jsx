import React from "react";
import Button from "../Button/Button";
import iconMap from "../../assets/icon-map.svg";
import iconGps from "../../assets/icon-gps.svg";
import iconCalendar from "../../assets/icon-calendar.svg";
import iconChair from "../../assets/icon-chair.svg";

export default function () {
  return (
    <div className="md:py-2 xl:py-7 bg-bgWhite rounded-b-xl rounded-tr-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 items-center justify-center">
        <div className="md:px-8 px-4 flex gap-4 items-center justify-between">
          <img src={iconMap} alt="" />
          <div>
            <form action="">
              <select
                id="loc"
                name="selectloc"
                className="w-full rounded-md py-2 md:py-1 text-textNavy text-sm xl:text-base appearance-none font-medium ring-bgPrimary focus:ring-0 focus:ring-inset focus:ring-bgPrimary"
              >
                <option>NTB, Lombok</option>
                <option>Ubud, Bali</option>
                <option>Bali, Nusa Penida</option>
                <option>Sumatera Utara, Danau Toba</option>
                <option>Jawa Tengah, Candi Borobudur</option>
              </select>
              <label htmlFor="loc" className="text-xs text-textGray">
                Select the locations
              </label>
            </form>
          </div>
          <img src={iconGps} alt="" />
        </div>
        <div className="md:px-8 px-4 flex gap-4 items-center justify-between">
          <img src={iconCalendar} alt="" />
          <div>
            <input
              id="flydate"
              type="date"
              className="w-full rounded-md py-2 md:py-1 text-textNavy text-sm xl:text-base font-medium ring-bgPrimary focus:ring-0 focus:ring-inset focus:ring-bgPrimary"
            />
            <label htmlFor="flydate" className="text-xs text-textGray">
              Choose Flight Date
            </label>
          </div>
          <img src={iconGps} alt="" />
        </div>
        <div className="md:px-8 px-4 flex gap-4 items-center justify-between">
          <img src={iconChair} alt="" />
          <div>
            <form action="">
              <select
                id="flytp"
                name="typefight"
                className="w-full rounded-md py-2 md:py-1 text-textNavy text-sm xl:text-base appearance-none font-medium ring-bgPrimary focus:ring-0 focus:ring-inset focus:ring-bgPrimary"
              >
                <option>Economy</option>
                <option>Basic Economy</option>
                <option>Premium</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Suites</option>
                <option>First</option>
              </select>
              <label htmlFor="flytp" className="text-xs text-textGray">
                Choose Flight type
              </label>
            </form>
          </div>
          <img src={iconGps} alt="" />
        </div>
        <div className="md:px-8 px-4 flex flex-col">
          <Button isPrimary>Search Flight</Button>
        </div>
      </div>
    </div>
  );
}
