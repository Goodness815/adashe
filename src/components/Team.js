import React from "react";
import Papadopoulos from "../assets/images/teams/Papadopoulos.png";
import Quivira from "../assets/images/teams/Quivira.png";
import Uzochukwu from "../assets/images/teams/Uzochukwu.png";
import socialIcon from "../assets/icons/linkedin.svg";
import { TwitterLogo } from "../assets/logo/logo.js";
import Gerald from "../assets/images/teams/gerald.png";
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
              <p className="text-gray-400">CEO</p>
              <p className="text-black team-text">
                An Aerospace Inventor with multiple US patents and an innovator
                in multiple spaces including Blockchain and Crypto
              </p>
              <div className="mt-4 flex items-center">
                <a href="https://www.linkedin.com/in/othnielcrtr/">
                  <img src={socialIcon} alt="Icon 1" className="w-6 h-6 mr-2" />
                </a>
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
                Gerald Monroe
              </p>
              <p className="text-gray-400">CFO</p>
              <p className="text-black team-text">
                Gerald has over 10 years of experience as a senior blockchain
                developer and has served as a C-Level Member and advisor to
                several industry-leading blockchain projects. He started mining
                crypto in 2012 and has remained a vocal crypto advocate.
              </p>
              <div className="mt-4 flex items-center">
                <a href="https://www.linkedin.com/in/geraldmonroe1/">
                  <img src={socialIcon} alt="Icon 1" className="w-6 h-6 mr-2" />{" "}
                </a>
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
              <p className="text-gray-400">Chief Marketing Officer</p>
              <p className="text-black team-text">
                One of Africa's top crypto influencers, Quivira's skills extend
                beyond marketing into programming and business management.
              </p>
              <div className="mt-4 flex items-center">
                <a href="https://www.linkedin.com/in/damilarequivira/">
                  <TwitterLogo />
                  {/* <img src={logo3} alt="Icon 1" className="w-6 h-6 mr-2" /> */}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-gray-200 rounded-lg p-4 flex flex-col md:flex-row items-center team-container">
            <div className="mb-4 md:mr-4 md:mb-0 md:flex-shrink-0">
              <img
                src={Gerald}
                alt="Team Member 4"
                className="w-25 h-25 mt-6 rounded-full kaydimg"
              />
            </div>

            <div className="flex-grow">
              <p className="text-lg text-[#3A2075] font-semibold">
                Carl Tautenhahn
              </p>
              <p className="text-gray-400">CTO</p>
              <p className="text-black team-text">
                Carl has been active in blockchain technology and crypto since
                2012. With a background in Graph Theory and advanced
                optimization algorithms, Carl has co-funded and serves as an
                advisor to several pioneering Web3 projects.
              </p>
              <div className="mt-4 flex items-center">
                <a href="https://www.linkedin.com/in/ppapadopoulos/">
                  <img src={socialIcon} alt="Icon 1" className="w-6 h-6 mr-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
