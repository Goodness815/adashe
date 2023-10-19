import React from "react";
import icon from "../assets/icons/Rectangle10.png";
import "../assets/styles/Partners.css";
import auby from "../assets/logo/auby.jpg";
import palremit from "../assets/logo/palremit.jpg";
import raze from "../assets/logo/raze.jpg";
import travel from "../assets/logo//travel.jpg";

const Partners = () => {
  return (
    <div className="bg-[#3A2075] custom-gradient mt-10 addpadding" id="Partners">
      <div className="container mx-auto">
        <h2 className="text-xl text-gray-100 mb-16 mt-8 text-center newHead">
          Core Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 py-2 px-2">
          {/* Partner 1 */}
          
            <div className="p-4 flex items-center md:p-2 main addpadding">
            <a href="https://tvaofficial.com/"><img
              src={travel} /* Replace with the URL of your image */
              alt="Partner 1"
              className="w-10 h-10 md:w-16 md:h-16 mr-2"
            /></a>
            <div>
            <a href="https://tvaofficial.com/"> <p className="text-white mb-1 text-lg">Travel Avatar</p>
              <span className="text-[#FFFFFF] md:text-ssm text-xs">
                Comprehensive Travel Solution
              </span></a>
            </div>
          </div>

          {/* Partner 2 */}
          <div className="p-4 flex items-center md:p-2 main addpadding">
            <img
              src={icon} /* Replace with the URL of your image */
              alt="Partner 2"
              className="w-10 h-10 md:w-16 md:h-16 mr-2"
            />
            <div>
              <p className="text-white mb-1 text-lg">EQ</p>
              <span className="text-[#FFFFFF] md:text-ssm text-xs">
                Make it profitable in 5 minutes
              </span>
            </div>
          </div>

          {/* Partner 3 */}
          <div className="p-4 flex items-center md:p-2 main addpadding">
          <a href="http://www.palremit.com"> <img
              src={palremit} /* Replace with the URL of your image */
              alt="Partner 3"
              className="w-10 h-10 md:w-16 md:h-16 mr-2"
            /></a>
            <div>
            <a href="http://www.palremit.com"> <p className="text-white mb-1 text-lg">Palremit</p>
              <span className="text-[#FFFFFF] md:text-ssm text-xs">
                Borderless, cheap remittances
              </span></a>
            </div>
          </div>

          {/* Partner 4 */}
          <div className="p-4 flex items-center md:p-2 main addpadding">
            <img
              src={icon} /* Replace with the URL of your image */
              alt="Partner 4"
              className="w-10 h-10 md:w-16 md:h-16 mr-2"
            />
            <div>
              <p className="text-white mb-1 text-lg">Purple Sands</p>
              <span className="text-[#FFFFFF] md:text-ssm text-xs">
                The ABC's of Development
              </span>
            </div>
          </div>

          {/* Partner 5 */}
          <div className="p-4 flex items-center md:p-2 main addpadding">
          <a href="https://play.google.com/store/apps/details?id=com.heyauby.heyauby"> <img
              src={auby} /* Replace with the URL of your image */
              alt="Partner 5"
              className="w-10 h-10 md:w-16 md:h-16 mr-2"
            /></a>
            <div>
            <a href="https://play.google.com/store/apps/details?id=com.heyauby.heyauby"> <p className="text-white mb-1 text-lg">Auby</p>
              <span className="text-[#FFFFFF] md:text-ssm text-xs">
                Curated edutainment
              </span></a>
            </div>
          </div>

          {/* Partner 6 */}
          <div className="p-4 flex items-center md:p-2 main addpadding">
          <a href="http://www.raze.finance"> <img
              src={raze} /* Replace with the URL of your image */
              alt="Partner 6"
              className="w-10 h-10 md:w-16 md:h-16 mr-2"
            /></a>
            <div>
            <a href="http://www.raze.finance"><p className="text-white mb-1 text-lg">Raze. Finance</p>
              <span className="text-[#FFFFFF] md:text-ssm text-xs">
                A Fund raising platform
              </span></a>
            </div>
          </div>
        </div>
        <div className="kaydmore">
        <a href="#Partners" className="text-gray-200 text-center">
          More Partners
        </a></div>

        <div className="mt-3"></div>
      </div>
    </div>
  );
};

export default Partners;
