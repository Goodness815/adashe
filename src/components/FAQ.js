import React, { useState } from "react";
import "../assets/styles/Customkayd.css";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`rounded-md faqContainer ${isOpen ? 'faqOpen' : 'faqClosed'}`}>
      <button
        className="flex justify-between items-center w-full py-3 focus:outline-none"
        onClick={toggleAccordion}
      >
        <p className="text-lg text-black ml-2 mb-2 kaydfaqfont">{question}</p>
        <span
          className={`${
            isOpen ? "mb-2" : ""
          } transition-transform kaydbold duration-300 flex mr-2`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="p-4 mb-2 mt-1 kaydOpen Kaydborder" >
         <p
  className="text-ssm text-gray-700 mt-1 kaydfaqfont"
  dangerouslySetInnerHTML={{ __html: answer }}
></p>
        </div>
      )}
    </div>
  );
};





const FAQ = () => {
  return (
    <div className="container mx-auto py-8 px-4" id="FAQ">
      <h2 className="text-3xl text-[#3A2075]  font-semibold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
  <FAQItem
    question="Why did we create Project Adashe?"
    answer="We saw the need for a dedicated system for transacting globally both for enterprise and personal purposes. We saw the need to ensure this system is as secure as possible, on an architectural, physical, and software level. Our marquee project is a Database solution that ties into our smart contract and blockchain and aims at solving key issues around data, tracking, and simulations. Adashe ecosystem will consist of businesses and projects designed to foster decentralization, security, financial growth, and convenience."
  />
  <FAQItem
    question="Why is Project Adashe important?"
    answer="Reducing the security vulnerability and inefficiencies in data, payments, and transactions of all kinds will allow buyers and sellers to both save and keep more of their money, especially in developing economies and under-served communities. This universal and far-reaching infrastructure would also expand the global economy, bringing economies closer. Integrating into businesses and existing payment terminals will eliminate learning curves and allow people to focus on buying and selling with the most minimal costs possible."
  />
  <FAQItem
    question="What benefits does holding ADSE give an investor?"
    answer="Adashe token holders will be able to earn a portion of a minimum of 10% profit sharing earned from Adashe invested businesses. Other benefits include low transaction fees at 1%, great marketplace utility, diversity, penetration, and a vibrant and growing ecosystem driving adoption and increasing demand and token prices. At least 10% of profit made by the Adashe parent company through its investments and services, dividends, or stock sale proceeds from partner businesses will be shared with stakers and participants in other areas of DeFi."
  />
  <FAQItem
    question="Which technology stack are we going to use?"
    answer="We are developing our database solutions and API for third-party integration, we will develop needed hardware to allow further ease of use and ease of integration."
  />
  <FAQItem
    question="What are other benefits for society?"
    answer="Efficient Off-Chain database and supply chain solutions. Global availability and accessibility to high fidelity data. Improved access to markets. Real-time global industry-agnostic analysis."
  />
  <FAQItem
    question="What is the business value behind the project and its advantages for others?"
    answer="Adopters of our technologies and solutions including our cryptocurrency will be able to partake in our ecosystem with access to cutting-edge technological solutions and a lower cost of doing business."
  />
  <FAQItem
    question="What Blockchain will Adashe run on?"
    answer="Adashe token will use the Polygon blockchain, our smart contract supports a cross-chain protocol and the database is blockchain agnostic."
  />
 <FAQItem
  question="What are the applications for the Adashe Sat/Blockchain?"
  answer="Applications for the Adashe Sat/Blockchain include:<br>- Transactions<br>- Data Federation and virtualization<br>- Multisignature wallet host<br>- Supply Chain<br>- Satellite and blockchain-enhanced IoT networks<br>- Encrypted Messaging"
/>

</div>

      <button className="text-white rounded-md px-4 py-2 mb-4 mt-8 mx-auto block custom-gradient kaydfaqbtn">
        <span>More FAQs</span>
      </button>
    </div>
  );
};

export default FAQ;
