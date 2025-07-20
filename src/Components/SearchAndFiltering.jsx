import React, { useState } from "react";

export default function SearchAndFiltering({
  onCountryChange,
  onRegionChange,
}) {
  const [country, setCountry] = useState("");
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [currentRegion, setRegion] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onCountryChange(country.trim());
    }
  };
  const handleRegionChange = (region) => {
    onRegionChange(region);
    setCountry("");
    setToggleDropDown(false);
    setRegion(region);
  };

  const regions = [
    {
      name: "All Regions",
      value: "",
    },
    {
      name: "Africa",
      value: "Africa",
    },
    {
      name: "Europe",
      value: "Europe",
    },
    {
      name: "Asia",
      value: "Asia",
    },
  ];

  return (
    <div className="px-5 flex items-center gap-10 justify-between">
      <input
        type="text"
        placeholder="Search For Country ..."
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        onKeyDown={handleKeyDown}
        className="outline-none dark:bg-primaryBlue dark:text-white bg-gray-200 text-black w-1/2 p-2 mb-10"
      />
      <button
        className="mb-10 dark:bg-primaryBlue dark:text-white bg-gray-200 text-black px-5 py-2"
        onClick={() => setToggleDropDown(!toggleDropDown)}
      >
        Filter By Region
      </button>
      {toggleDropDown && (
        <div className="absolute px-5 py-2 right-10 top-32 bg-white dark:bg-primaryBlue shadow-lg rounded-md mt-2">
          <ul className="p-2">
            {regions.map((region) => (
              <li
                key={region.value}
                className={`cursor-pointer rounded-md mt-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 ${
                  currentRegion === region.value
                    ? "bg-gray-200 dark:bg-gray-700"
                    : ""
                }`}
                onClick={() => {
                  handleRegionChange(region.value);
                }}
              >
                {region.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
