import React from "react";
import test from "../images/testWm.jpg";
import testDm from "../images/test.jpg";
function About({ lang = "en" }) {
  return (
    <div
      id="about"
      className="p-4 sm:p-10 mt-10 sm:mt-40 bg-gray-50 border border-gray-200 rounded-lg my-2 sm:my-5 flex flex-col items-start dark:bg-gray-900 dark:border-gray-700 sm:mx-20 lg:mx-40 xl:mx-60 2xl:mx-80"
      style={{ direction: lang === "en" ? "ltr" : "rtl" }}
    >
      <h1 className="text-lg sm:text-2xl font-bold pt-10 sm:pt-20 text-center text-gray-800 mb-2 dark:text-gray-100">
        {lang === "en" ? "About Us:" : "عن الشركة:"}
      </h1>
      <p className="text-gray-600 mb-2 dark:text-gray-300 text-sm sm:text-base">
        {lang === "en"
          ? "We are a company dedicated to providing the best olive oil products."
          : "نحن شركة متخصصة في تقديم أفضل منتجات زيت الزيتون."}
      </p>
      <p className="text-gray-600 italic mb-2 dark:text-gray-300 text-sm sm:text-base">
        {lang === "en"
          ? "Alhamdulillah, Al MOHANDISSEN olive oil is distinguished by the clarity of the four quality signs as follows:"
          : "الحمد لله، يتميز زيت زيتون المهندسين بوضوح علامات الجودة الأربعة كما يلي:"}
      </p>
      <ol className="text-gray-600 pl-3 sm:pl-5 space-y-2 dark:text-gray-300 text-sm sm:text-base">
        <li>
          <strong>{lang === "en" ? "First:" : "أولاً:"}</strong>{" "}
          {lang === "en"
            ? "The smell of olive fruit, which is completely clear when opening the sealed container..."
            : "رائحة ثمرة الزيتون، والتي تظهر بوضوح عند فتح العبوة المغلقة..."}
        </li>
        <li>
          <strong>{lang === "en" ? "Second:" : "ثانياً:"}</strong>{" "}
          {lang === "en"
            ? "Olive sediment suspended in the oil due to weekly pressing, which is strong evidence that the oil is fresh."
            : "رواسب الزيتون المعلقة في الزيت نتيجة العصر الأسبوعي، وهي دليل قوي على أن الزيت طازج."}
        </li>
        <li>
          <strong>{lang === "en" ? "Third:" : "ثالثاً:"}</strong>{" "}
          {lang === "en"
            ? "The sensation of pungency and acceptable bitterness at the back of the tongue when swallowing, which is very appealing to some people..."
            : "الإحساس بالحدة والمرارة المقبولة في مؤخرة اللسان عند البلع، وهو أمر محبب لدى بعض الأشخاص..."}
        </li>
        <li>
          <strong>{lang === "en" ? "Fourth:" : "رابعاً:"}</strong>{" "}
          {lang === "en"
            ? "Refrigeration test: a quantity of oil 1 cm thick is placed in a glass cup and put in the refrigerator outside the freezer for 24 hours, it will solidify 100%, like the attached picture..."
            : "اختبار التبريد: يتم وضع كمية من الزيت بسماكة 1 سم في كوب زجاجي ويوضع في الثلاجة خارج الفريزر لمدة 24 ساعة، سيتجمد الزيت بنسبة 100% كما هو موضح في الصورة المرفقة..."}
          <br />
          <img
            style={{
              maxWidth: "100%",
              height: "auto",
              paddingTop: "10px",
            }}
            src={test}
            alt={lang === "en" ? "Refrigeration test" : "اختبار التبريد"}
            className="filter brightness-80 hover:brightness-50 transition block dark:hidden"
          />
          <img
            style={{
              maxWidth: "100%",
              height: "auto",
              paddingTop: "10px",
            }}
            src={testDm}
            alt={lang === "en" ? "Refrigeration test dark" : "اختبار التبريد (داكن)"}
            className="dark:filter dark:brightness-50 dark:hover:brightness-90 hidden dark:block"
          />
        </li>
      </ol>
    </div>
  );
}

export default About;