import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function Contacts({ lang = "en" }) {
  return (
    <div
      id="contact"
      className="p-4 sm:p-10 mt-10 sm:mt-40 bg-gray-50 border border-gray-200 flex flex-col items-start text-base sm:text-xl min-h-screen dark:bg-gray-900 dark:border-gray-700 gap-5 sm:mx-20 lg:mx-40 xl:mx-60 2xl:mx-80"
      style={{ direction: lang === "en" ? "ltr" : "rtl" }}
    >
      <h1 className="text-lg sm:text-2xl font-bold mb-2 pt-10 sm:pt-20 text-gray-900 dark:text-gray-100">
        {lang === "en" ? "Contact Us:" : "تواصل معنا:"}
      </h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {lang === "en"
          ? "For inquiries and orders, please reach out to us via any of the following:"
          : "للاستفسارات والطلبات، يرجى التواصل معنا عبر أي من الوسائل التالية:"}
      </p>
      <div className="flex flex-row items-center space-x-4 mb-4 pl-2 sm:pl-10 hover:scale-105">
        <a
          href="tel:+201013678135"
          className="text-green-800 text-2xl"
          title={lang === "en" ? "Phone" : "هاتف"}
        >
          <FaPhone />
        </a>
        <a
          href="https://wa.me/+201013678135"
          className="text-green-500 text-3xl"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:moatasem.elemam20@gmail.com"
          className="text-red-500 text-3xl"
          title="Gmail"
        >
          <SiGmail />
        </a>
        <a
          href="https://www.facebook.com/share/1GmCs6ZeWz/"
          className="text-blue-600 text-3xl"
          title="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/engineersoliveoil?igsh=MW00cml0eTE5NWptcg=="
          className="text-purple-600 text-3xl"
          title="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
      {/* ...existing code... */}
    </div>
  );
}

export default Contacts;
