import React from "react";
import Othniel from "../assets/images/teams/gerald.png";
import Papadopoulos from "../assets/images/teams/Papadopoulos.png";
import Quivira from "../assets/images/teams/quivira.png";
import Uzochukwu from "../assets/images/teams/Uzochukwu.png";
import socialIcon from "../assets/icons/linkedin.svg";
import logo3 from "../assets/logo/fas.svg";
import "../assets/styles/Customkayd.css";

const Team = () => {
  return (
    <div className="container mx-auto mt-8 p-4" id="TEAM">
      <h2 className="text-base font-semibold text-[#3A2075] mb-4 text-center kaydfont">
        The Team
      </h2>
      <div className="flex flex-wrap">
        {/* Team Member 1 */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-gray-200 rounded-lg p-4 flex flex-col md:flex-row items-center team-container">
            <div className="mb-4 md:mr-4 md:mb-0 md:flex-shrink-0">
              <img
                src={Uzochukwu}
                alt="Team Member 1"
                className="w-25 h-25 mt-6 rounded-full kaydimg"
              />
            </div>
            <div className="flex-grow">
              <p className="text-lg text-[#3A2075] font-semibold">
                Othniel Mbamalu
              </p>
              <p className="text-gray-600">CEO</p>
              <p className="text-black team-text">
                An Aerospace Inventor with multiple US patents and an innovator
                in multiple spaces including Blockchain and Crypto
              </p>
              <div className="mt-4 flex items-center">
                <a href="https://www.linkedin.com/in/othnielcrtr/">
                  <img src={socialIcon} alt="Icon 1" className="w-6 h-6 mr-2" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-gray-200 rounded-lg p-4 flex flex-col md:flex-row items-center team-container">
            <div className="mb-4 md:mr-4 md:mb-0 md:flex-shrink-0">
              <img
                src={Papadopoulos}
                alt="Team Member 2"
                className="w-25 h-25 mt-6 rounded-full kaydimg"
              />
            </div>
            <div className="flex-grow">
              <p className="text-lg text-[#3A2075] font-semibold">
                Dr. Periklis Papadopoulos
              </p>
              <p className="text-gray-600">CTO</p>
              <p className="text-black team-text">
                Dr. Periklis Papadopoulos is a seasoned engineer and has worked
                on projects spanning decades in Aerospace and other cutting-edge
                systems.
              </p>
              <div className="mt-4 flex items-center">
                <a href="https://www.linkedin.com/in/ppapadopoulos/">
                <img src={socialIcon} alt="Icon 1" className="w-6 h-6 mr-2" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-gray-200 rounded-lg p-4 flex flex-col md:flex-row items-center team-container">
            <div className="mb-4 md:mr-4 md:mb-0 md:flex-shrink-0">
              <img
                src={Quivira}
                alt="Team Member 3"
                className="w-25 h-25 mt-6 rounded-full kaydimg"
              />
            </div>
            <div className="flex-grow">
              <p className="text-lg text-[#3A2075] font-semibold">
                Quivira. Ophir
              </p>
              <p className="text-gray-600">Chief Marketing Officer</p>
              <p className="text-black team-text">
                One of Africa's top crypto influencers, Quivira's skills extend
                beyond marketing into programming and business management.
              </p>
              <div className="mt-4 flex items-center">
               <a href="https://www.linkedin.com/in/damilarequivira/">
                <img src={logo3} alt="Icon 1" className="w-6 h-6 mr-2" /></a> 
              </div>
            </div>
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-gray-200 rounded-lg p-4 flex flex-col md:flex-row items-center team-container">
            <div className="mb-4 md:mr-4 md:mb-0 md:flex-shrink-0">
              <img
                src={Othniel}
                alt="Team Member 4"
                className="w-25 h-25 mt-6 rounded-full kaydimg"
              />
            </div>
            <div className="flex-grow">
              <p className="text-lg text-[#3A2075] font-semibold">
                Gerald Monroe
              </p>
              <p className="text-gray-600">CFO</p>
              <p className="text-black team-text">
                Founder of Palremit, Ted Talk alumni, and a fast-growing
                personality in the fintech space with an in-depth understanding
                of tech and finance.
              </p>
              <div className="mt-4 flex items-center">
                <a href="https://www.linkedin.com/in/geraldmonroe1/">
                 <img src={socialIcon} alt="Icon 1" className="w-6 h-6 mr-2" /> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
