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
      className="flex items-center justify-between p-2.5 bg-gray-100 border-b border-gray-300 
    sticky top-0 z-50
    dark:bg-gray-900 dark:border-gray-700
    dark:sticky dark:top-0 dark:z-50
    "
    >
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-20 h-auto rounded-full" />
        <h3 className="ml-5 text-md font-semibold text-gray-900 dark:text-gray-100">
          Engineer's Olive oil
        </h3>
      </div>
      <button
        onClick={() => setDark((d) => !d)}
        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        {dark ? (
          <Sun className="w-6 h-6 text-yellow-400" />
        ) : (
          <Moon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        )}
      </button>
      {navbar({ links })}
    </header>
  );
};

export default Header;
