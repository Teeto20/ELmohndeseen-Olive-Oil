import React from "react";
import image2L from "../images/2Litre.jpg";
import image1L from "../images/1Litre.jpg";
import image05L from "../images/0.5Litre.jpg";
function products() {
  const productList = [
    { title: "Olive oil L", size: "2 Litre", price: 1200, image: image2L },
    { title: "Olive oil M", size: "1 Litre", price: 620, image: image1L },
    { title: "Olive oil S", size: "0.5 Litre", price: 310, image: image05L },
  ];
  return (
    <div
      id="home"
      className="p-5 bg-gray-50 border border-gray-200 rounded-lg my-5 dark:bg-gray-900 dark:border-gray-700"
    >
        <h1 className="text-2xl font-bold text-gray-800 mb-2 pt-20 dark:text-gray-100">
            Our Products:
        </h1>
      {productList.map((product) => (
        <div
          key={product.title}
          className="mb-4 p-2.5 border-b border-gray-300 flex flex-col items-center dark:border-gray-600"
        >
          <h2 className="text-xl font-bold mb-2 
          text-gray-900 dark:text-gray-100">
            {product.title}
          </h2>
          <img
            src={product.image}
            alt={product.title}
            className="w-52 h-auto 
            rounded-lg mb-2
            filter brightness-80
            hover:brightness-50 transition 
            dark:filter dark:brightness-50 
            dark:hover:brightness-90"
          />
          <p className="text-base text-gray-700 dark:text-gray-300">
            Size: {product.size}
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300">
            Price: {product.price} LE{" "}
          </p>
        </div>
      ))}
    </div>
  );
}

export default products;
