import React from "react";
import ContactUs from "./Contact";
import Subscribe from "./Subscribe";
import "../assets/styles/Customkayd.css";

const Footer = () => {
  return (
    <div className="bg-[#3A207560] kayd-footer">
      <div className="container mx-auto  p-4 text-white py-8 pt-12">
        <div className="mt-8 flex flex-col sm:flex-row">
          <div className="sm:w-1/2 pr-4 mb-4">
            <ContactUs />
          </div>
          <div className="sm:w-1/2 pr-4 mb-4">
            <Subscribe />
            <div className="text-center text-sm text-gray-700 mt-4 copyrightText">
          &copy; 2023 Adashe
        </div>
           
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Footer;
