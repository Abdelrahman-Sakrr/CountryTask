import CountryCard from "./CountryCard";
import countries from "../libs/Countries";
import { useState } from "react";
import SearchAndFiltering from "./SearchAndFiltering";
import CustomPagination from "./CustomPagination";

export default function Home() {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;
  const handleCountryChange = (searchValue) => {
    const value = searchValue.trim().toLowerCase();
    if (!value) {
      setFilteredCountries(countries);
    } else {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.toLowerCase().includes(value)
        )
      );
    }
    setCurrentPage(1);
  };
  const handleRegionChange = (searchValue) => {
    const value = searchValue.trim().toLowerCase();
    if (!value) {
      setFilteredCountries(countries);
    } else {
      setFilteredCountries(
        countries.filter((country) =>
          country.region.toLowerCase().includes(value)
        )
      );
    }
    setCurrentPage(1);
  };
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  return (
    <div className="mt-10 px-5">
      <div>
        <SearchAndFiltering
          onCountryChange={handleCountryChange}
          onRegionChange={handleRegionChange}
        />
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-20 gap-y-5 px-5">
        {currentCountries.length > 0 ? (
          currentCountries.map((country) => (
            <CountryCard key={country.name} country={country} />
          ))
        ) : (
          <p className="text-red-600 animate-bounce">No countries found</p>
        )}
      </div>
      <CustomPagination
        totalItems={filteredCountries.length}
        itemsPerPage={countriesPerPage}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
