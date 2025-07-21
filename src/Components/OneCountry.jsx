import { Link, useParams } from "react-router-dom";
import countries from "../libs/Countries";

export default function OneCountry() {
  const { id } = useParams();
  console.log(id);
  const oneCountry = countries.filter((country) => country?.name === id);
  console.log(oneCountry);
  return (
    <>
      <div className="ps-44 pt-10">
        <Link
          to={"/"}
          className=" bg-primaryBlue hover:bg-primaryBlue/50 text-white px-5 py-2 rounded-md shadow-lg"
        >
          Back
        </Link>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center  items-center px-5 mt-10  text-black dark:text-white">
        <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
          <img
            src={oneCountry?.length > 0 ? oneCountry[0].flag : ""}
            alt={
              oneCountry?.length > 0 ? oneCountry[0].name : "Country not found"
            }
            className="w-1/2 h-1/2 object-contain"
          />
          <div className="flex flex-wrap lg:flex-nowrap flex-col items-start justify-center text-left p-5">
            <h1 className="text-2xl font-bold mb-4">
              {oneCountry?.length > 0
                ? oneCountry[0].name
                : "Country not  found"}
            </h1>
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center text-left pt-5 gap-5">
              <div>
                <p className="mb-2">
                  <strong>Capital:</strong>{" "}
                  {oneCountry?.length > 0 ? oneCountry[0].capital : "N/A"}
                </p>
                <p className="mb-2">
                  <strong>Region:</strong>{" "}
                  {oneCountry?.length > 0 ? oneCountry[0].region : "N/A"}
                </p>
                <p className="mb-2">
                  <strong>Population:</strong>{" "}
                  {oneCountry?.length > 0 ? oneCountry[0].population : "N/A"}
                </p>
              </div>
              <div>
                <p className="mb-2">
                  <strong>Language:</strong>{" "}
                  {oneCountry?.length > 0
                    ? oneCountry[0].languages[0].name
                    : "N/A"}
                </p>
                <p className="mb-2">
                  <strong>Currency:</strong>{" "}
                  {oneCountry?.length > 0
                    ? oneCountry[0].currencies[0].name
                    : "N/A"}
                </p>
                <p className="mb-2">
                  <strong>Top Level Domain:</strong>{" "}
                  {oneCountry?.length > 0
                    ? oneCountry[0].topLevelDomain[0]
                    : "N/A"}
                </p>
              </div>
            </div>
            <div className="mt-10">
              <div className="mb-2 flex flex-wrap lg:flex-nowrap">
                <strong>Border Countries:</strong>{" "}
                {oneCountry?.length > 0 && oneCountry[0]?.borders?.length > 0 ? (
                  oneCountry[0].borders.map((border) => (
                    <span
                      key={border}
                      className="px-5 py-1 bg-gray-200 dark:bg-gray-700 rounded-md mr-2"
                    >
                      {border}
                    </span>
                  ))
                ) : (
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md">
                    No borders
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* {oneCountry?.length > 0 ? oneCountry[0].name : "Country not found"} */}
      </div>
    </>
  );
}
