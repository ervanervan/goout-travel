import React from "react";
import Button from "../Button/Button";
import iconMap from "../../assets/icon-map.svg";
import iconGps from "../../assets/icon-gps.svg";
import iconCalendar from "../../assets/icon-calendar.svg";
import iconChair from "../../assets/icon-chair.svg";

export default function () {
  return (
    <div className="md:py-2 xl:py-7 bg-bgWhite rounded-b-xl rounded-tr-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center">
        <div className="md:px-6 px-4 flex gap-4 py-2 md:py-0 items-center">
          <img src={iconMap} alt="" />
          <div>
            <form action="">
              <select
                id="loc"
                name="selectloc"
                className="text-textNavy text-base font-medium py-2 md:py-1 px-1 w-full appearance-none border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-bgWhite dark:border-gray-700 dark:text-textNavy"
              >
                <option>NTB, Lombok</option>
                <option>Ubud, Bali</option>
                <option>Bali, Nusa Penida</option>
                <option>Borobudur, Jawa Tengah</option>
                <option>Raja Ampat, Papua Barat</option>
                <option>Bunaken, Sulawesi Utara</option>
                <option>Danau Toba, Sumatra Utara</option>
                <option>Labuan Bajo, Nusa Tenggara Timur</option>
                <option>Dieng Plateau, Wonosobo, Jawa Tengah</option>
                <option>Jawa Tengah, Magelang, Candi Borobudur</option>
                <option>Tanjung Puting National Park, Kalimantan Tengah</option>
              </select>
              <label htmlFor="loc" className="text-sm text-textGray">
                Select the locations
              </label>
            </form>
          </div>
          <img src={iconGps} alt="" />
        </div>
        <div className="md:px-6 px-4 flex gap-4 py-2 md:py-0 items-center">
          <img src={iconCalendar} alt="" />
          <div>
            <input
              id="flydate"
              type="date"
              placeholder="dd-mm-yyyy"
              defaultValue="2023-10-15"
              min="2023-10-01"
              max="2030-12-31"
              className="text-textNavy text-base font-medium py-2 md:py-1 px-1 w-full appearance-none border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-bgWhite dark:border-gray-700 dark:text-textNavy"
            />
            <label htmlFor="flydate" className="text-sm text-textGray">
              Choose Flight Date
            </label>
          </div>
          <img src={iconGps} alt="" />
        </div>
        <div className="md:px-6 px-4 flex gap-4 py-2 md:py-0 items-center">
          <img src={iconChair} alt="" />
          <div>
            <form action="">
              <select
                id="flytp"
                name="typefight"
                className="text-textNavy text-base font-medium py-2 md:py-1 px-1 w-full appearance-none border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-bgWhite dark:border-gray-700 dark:text-textNavy"
              >
                <option>Economy</option>
                <option>Basic Economy</option>
                <option>Premium</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Suites</option>
                <option>First</option>
              </select>
              <label htmlFor="flytp" className="text-sm text-textGray">
                Choose Flight type
              </label>
            </form>
          </div>
          <img src={iconGps} alt="" />
        </div>
        <div className="md:px-6 my-4 md:my-0 flex flex-col">
          <Button isPrimary>Search Flight</Button>
        </div>
      </div>
    </div>
  );
}
