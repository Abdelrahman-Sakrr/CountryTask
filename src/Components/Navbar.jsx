import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [themeToggle, setThemeToggle] = useState("dark");
  const handleThemeToggle = () => {
    setThemeToggle((prev) => (prev === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.documentElement.classList.toggle("dark", themeToggle === "dark");
  }, [themeToggle]);
  return (
    <div className="flex justify-between dark:bg-primaryBlue dark:text-white text-black  bg-gray-200 items-center py-2 border-bottom dark:border-gray-700 px-10">
      <Link to={"/"} className="text-lg font-bold font-nunito">
        Where in The World?
      </Link>
      <div>
        <button
          onClick={handleThemeToggle}
          className="mr-4 flex items-center px-4 py-1"
        >
          {themeToggle === "light" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}
