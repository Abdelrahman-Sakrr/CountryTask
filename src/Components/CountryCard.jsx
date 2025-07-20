import { Link } from "react-router-dom";

export default function CountryCard({ country }) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-sm dark:bg-gray-700">
      <Link to={`/${country.name}`}>
        <img
          className="rounded-t-lg w-full object-cover h-52"
          src={country?.flags?.png}
          alt=""
        />
      </Link>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {country?.name}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>Population:</strong> {country?.population}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>Region:</strong> {country?.region}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>Capital:</strong> {country?.capital}
        </p>
      </div>
    </div>
  );
}
