import React from "react";
import test from "../images/testWm.jpg";
import testDm from "../images/test.jpg";
function about() {
  return (
    <div
      id="about"
      className="p-10 mt-40 bg-gray-50 border border-gray-200 rounded-lg my-5 flex flex-col items-start dark:bg-gray-900 dark:border-gray-700"
    >
      <h1 className="text-2xl font-bold pt-20 text-center text-gray-800 mb-2 dark:text-gray-100">
        About Us:
      </h1>
      <p className="text-gray-600 mb-2 dark:text-gray-300">
        We are a company dedicated to providing the best olive oil products.
      </p>
      <p className="text-gray-600 italic mb-2 dark:text-gray-300">
        Alhamdulillah, Al MOHANDISSEN olive oil is distinguished by the clarity of
        the four quality signs as follows:
      </p>
      <ol className="text-gray-600 pl-5 space-y-2 dark:text-gray-300">
        <li>
          <strong>First:</strong> The smell of olive fruit, which is completely
          clear when opening the sealed container...
        </li>
        <li>
          <strong>Second:</strong> Olive sediment suspended in the oil due to
          weekly pressing, which is strong evidence that the oil is fresh.
        </li>
        <li>
          <strong>Third:</strong> The sensation of pungency and acceptable
          bitterness at the back of the tongue when swallowing, which is very
          appealing to some people...
        </li>
        <li>
          <strong>Fourth:</strong> Refrigeration test: a quantity of oil 1 cm
          thick is placed in a glass cup and put in the refrigerator outside the
          freezer for 24 hours, it will solidify 100%, like the
          attached picture...
          <br />
          <img
            style={{
              maxWidth: "300px",
              height: "auto",
              paddingTop: "10px",
            }}
            src={test}
            alt="Refrigeration test"
            className="
           filter brightness-80
            hover:brightness-50 transition
            block dark:hidden"
          />
          <img
            style={{
              maxWidth: "300px",
              height: "auto",
              paddingTop: "10px",
            }}
            src={testDm}
            alt="Refrigeration test dark"
            className="
            dark:filter dark:brightness-50 
            dark:hover:brightness-90
            hidden dark:block"
          />
        </li>
      </ol>
    </div>
  );
}

export default about;
