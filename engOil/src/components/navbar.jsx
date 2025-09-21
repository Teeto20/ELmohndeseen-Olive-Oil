import React, { useState } from "react";

function Navbar({ links }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="p-2 border-b border-gray-300 sticky top-0 z-40 dark:bg-gray-900 dark:border-gray-700 bg-white">
      {/* Hamburger for small screens */}
      <div className="flex justify-between items-center sm:hidden">
        <span className="font-bold text-lg text-black dark:text-gray-100">Menu</span>
        <button
          className="text-black dark:text-gray-100 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {/* Hamburger Icon */}
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <line x1="4" y1="7" x2="20" y2="7" strokeWidth="2" strokeLinecap="round"/>
            <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2" strokeLinecap="round"/>
            <line x1="4" y1="17" x2="20" y2="17" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      {/* Links */}
      <ul
        className={`transition-all duration-300
          flex-col space-y-2 sm:space-y-0 sm:flex-row sm:flex justify-around list-none p-0 m-0
          ${open ? "flex absolute left-0 top-12 w-full bg-white dark:bg-gray-900 shadow-lg py-4 px-2 z-50" : "hidden"} sm:static sm:flex sm:bg-transparent sm:shadow-none sm:py-0 sm:px-0`}
      >
        {links.map((link) => (
          <li key={link.name} className="text-center">
            <a
              href={`#${link.url}`}
              className="block text-black hover:text-red-500 px-4 py-2 transition-colors duration-200 dark:text-gray-100 dark:hover:text-red-400"
              onClick={() => setOpen(false)} // Close menu on click (mobile)
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;