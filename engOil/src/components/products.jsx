import React from "react";
import image2L from "../images/2Litre.jpg";
import image1L from "../images/1Litre.jpg";
import image05L from "../images/0.5Litre.jpg";
function Products({ lang = "en" }) {
  const productList =
    lang === "en"
      ? [
          {
            title: "Olive oil L",
            size: "2 Litre",
            price: 1200,
            image: image2L,
          },
          { title: "Olive oil M", size: "1 Litre", price: 620, image: image1L },
          {
            title: "Olive oil S",
            size: "0.5 Litre",
            price: 310,
            image: image05L,
          },
        ]
      : [
          {
            title: "زيت زيتون كبير",
            size: "٢ لتر",
            price: "١٢٠٠",
            image: image2L,
          },
          {
            title: "زيت زيتون وسط",
            size: "١ لتر",
            price: "٦٢٠",
            image: image1L,
          },
          {
            title: "زيت زيتون صغير",
            size: "٠.٥ لتر",
            price: "٣١٠",
            image: image05L,
          },
        ];
  return (
    <div
      id="home"
      className="p-3 sm:p-5 bg-gray-50 border border-gray-200 rounded-lg my-3 sm:my-5 dark:bg-gray-900 dark:border-gray-700 mx-2 sm:mx-20 lg:mx-40 xl:mx-60 2xl:mx-80"
      style={{ direction: lang === "en" ? "ltr" : "rtl" }}
    >
      <h1 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 pt-10 sm:pt-20 dark:text-gray-100 text-center">
        {lang === "en" ? "Our Products:" : "منتجاتنا:"}
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center">
        {productList.map((product) => (
          <div
            key={product.title}
            className="mb-4 p-2.5 border-b sm:border border-gray-300 flex flex-col items-center rounded-lg dark:border-gray-600 w-full sm:w-1/3 bg-white dark:bg-gray-800 shadow-sm"
          >
            <h2 className="text-base sm:text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 text-center">
              {product.title}
            </h2>
            <img
              src={product.image}
              alt={product.title}
              className="w-40 sm:w-52 h-auto rounded-lg mb-2 filter brightness-80 hover:brightness-50 transition dark:filter dark:brightness-50 dark:hover:brightness-90"
            />
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 text-center">
              {lang === "en" ? "Size:" : "الحجم:"} {product.size}
            </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 text-center">
              {lang === "en" ? "Price:" : "السعر:"} {product.price}{" "}
              {lang === "en" ? "LE" : "جنيه"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
