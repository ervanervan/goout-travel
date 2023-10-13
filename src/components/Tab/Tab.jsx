import React, { useState } from "react";
import Search from "../Search/Search";

export default function Tab() {
  const [activeTab, setActiveTab] = useState("Flight");

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-20">
      <div className="">
        <div className="">
          <button
            onClick={() => changeTab("Flight")}
            className={`py-3 px-6 rounded-tl-xl sm:text-[18px] text-base font-medium ${
              activeTab === "Flight"
                ? "bg-bgPrimary text-textWhite"
                : "bg-bgDarkGray text-textPrimary"
            }`}
          >
            Flight
          </button>
          <button
            onClick={() => changeTab("Hotel")}
            className={`py-3 px-6 rounded-tr-xl sm:text-[18px] text-base font-medium ${
              activeTab === "Hotel"
                ? "bg-bgPrimary text-textWhite"
                : "bg-bgDarkGray text-textPrimary"
            }`}
          >
            Hotel
          </button>
        </div>

        <div>
          {activeTab === "Flight" && (
            <>
              <div>
                <Search />
              </div>
            </>
          )}
          {activeTab === "Hotel" && (
            <>
              <div>
                <Search />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
