import React, { useState } from "react";

export default function SearchAndFiltering({
  onCountryChange,
  onRegionChange,
}) {
  const [country, setCountry] = useState("");
  const [currentRegion, setRegion] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onCountryChange(country.trim());
    }
  };
  const handleRegionChange = (region) => {
    onRegionChange(region);
    setCountry("");
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
      <select
        value={currentRegion}
        onChange={(e) => handleRegionChange(e.target.value)}
        className="mb-10 cursor-pointer  dark:bg-primaryBlue dark:text-white bg-gray-200 text-black px-5 py-2 rounded-md shadow-lg outline-none cursor-pointer"
      >
        {regions.map((region) => (
          <option
            key={region.value}
            value={region.value}
            className={`p-2 cursor-pointer ${
              currentRegion === region.value
                ? "bg-gray-200 dark:bg-gray-700"
                : "bg-white dark:bg-primaryBlue"
            }`}
          >
            {region.name}
          </option>
        ))}
      </select>
    </div>
  );
}
