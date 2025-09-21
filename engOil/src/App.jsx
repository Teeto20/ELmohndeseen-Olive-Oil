import { useState } from "react";
import navbar from "./components/navbar";
import Header from "./components/header";
import products from "./components/products";
import about from "./components/about";
import contacts from "./components/contacts";
function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {Header()}
      {products()}
      {about()}
      {contacts()}
    </div>
  );
}

export default App;
