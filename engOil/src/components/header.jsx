import React from "react";
import { Sun, Moon } from "lucide-react";
import navbar from "./navbar";
import logo from "../images/logo.jpg";
const Header = () => {
  const links = [
    { name: "Home", url: "home" },
    { name: "About", url: "about" },
    { name: "Contact", url: "contact" },
  ];
  // Dark mode toggle logic
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header
      className="flex flex-col gap-1 sm:flex-row items-center justify-between p-2 bg-gray-100 border-b border-gray-300 
      sticky top-0 z-50
      dark:bg-gray-900 dark:border-gray-700
      sm:mx-20 lg:mx-40 xl:mx-60 2xl:mx-80"
    >
      <div className="flex items-center w-full sm:w-auto mb-1 sm:mb-0">
        <img src={logo} alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
        <h3 className="ml-2 text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
          Engineer's Olive oil
        </h3>
      </div>
      <div className="flex items-center w-full sm:w-auto justify-end mb-1 sm:mb-0">
        <button
          onClick={() => setDark((d) => !d)}
          className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {dark ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          )}
        </button>
      </div>
      <div className="w-full sm:w-auto">
        {navbar({ links })}
      </div>
    </header>
  );
};

export default Header;