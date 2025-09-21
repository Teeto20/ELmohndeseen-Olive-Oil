import React, { Component } from "react";

function navbar({ links }) {
  return (
    <div className=" p-1 border-b border-gray-300 sticky top-0 z-50 dark:bg-gray-900 dark:border-gray-700">
      <ul className="flex justify-around list-none p-0 m-0">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={`#${link.url}`}
              className="text-black hover:text-red-500 px-4 py-2 transition-colors duration-200 dark:text-gray-100 dark:hover:text-red-400"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default navbar;
