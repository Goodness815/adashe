import React from "react";
import logo2 from "../assets/logo/bi_linkedin.svg";
import carl from "../assets/logo/carl.jpeg";
import nick from "../assets/logo/nick.jpeg";
import jon from "../assets/logo/jon.png";
import mbamalu from "../assets/logo/mba.jpeg";

const AdvisorsComponent = () => {
  const advisors = [
    {
      name: "Carl Tautenhahn",
      imageSrc: carl,
      linkedinLink: "https://www.linkedin.com/in/carlhenly/",
    },
    {
      name: "Jon Gillon",
      imageSrc: jon,
      linkedinLink: "https://www.linkedin.com/in/jongillon/",
    },
    {
      name: "Nick Raffin",
      imageSrc: nick,
      linkedinLink: "https://www.linkedin.com/in/nicholas-raffin-750878163/",
    },
    {
      name: "Uzochukwu Mbamalu",
      imageSrc: mbamalu,
      linkedinLink: "https://www.linkedin.com/in/uzochukwu-mbamalu-37111b192/",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="p-5 rounded-lg text-center">
        <h2 className="text-xl text-[#203475] mb-4">Advisors</h2>
        <div className="grid grid-cols-4 md:grid-cols-4">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="w-full advisors"
            >
              <div className="bg-white p-4 rounded-lg advisors">
                <img
                  src={advisor.imageSrc}
                  alt={`${advisor.name}'s`}
                  className="w-23 h-23 mx-auto rounded-full"
                />
                <div className="flex items-center kayddiv">
  <p className="text-xms md:text-lg mt-2 kaydcolor">
    {advisor.name}
  </p>
  <a
    href={advisor.linkedinLink}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#203475] hover:underline ml-2"
  >
    <img
      src={logo2}
      alt="linkedin"
      className="w-3 h-3 md:w-4 md:h-4 linkcss"
    />
  </a>
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvisorsComponent;
