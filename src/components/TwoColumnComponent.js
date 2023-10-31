import React, { useRef, useState } from "react";
import Rectangle from "../assets/images/Rectangle-1.png";

const TwoColumnComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    console.log(event.target);
    console.log(modalRef.current);
    closeModal();
    // if (event.target === modalRef.current)
  };

  return (
    <>
      {isModalOpen && (
        <div
          id="myModal"
          className="modal"
          style={{ display: isModalOpen ? "block" : "none" }}
          onClick={handleOutsideClick}
        >
          <div className="modal-content" ref={modalRef}>
            <span
              className="close"
              style={{ fontSize: "25px" }}
              onClick={closeModal}
            >
              &times;
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "20px 0px",
              }}
            >
              <a
                href="https://raze.finance/"
                target="__blank"
              >
                <button
                  onClick={openModal}
                  className="bg-[#203475] text-white px-4 py-2 rounded-md button-firstOne"
                >
                  Raze Finance
                </button>
              </a>

              <a
                href="https://www.pinksale.finance/"
                target="__blank"
              >
                <button
                  onClick={openModal}
                  className="bg-[#203475] text-white px-4 py-2 rounded-md button-firstOne"
                >
                  Pink Sale Finance
                </button>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="container flex flex-col md:flex-row items-center mx-auto">
        {/* Left Column */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-xl font-semibold text-[#203475] mb-4">
            Data and Defi
          </h2>
          <p className="text-lg font-light">
            Project Adashe is building a system for data federation and
            virtualization, tied to a smart contract it can enable automatic
            execution of commands. We aim to to eliminate inefficiencies, high
            costs and restrictions in payments, transacting and record keeping,
            perpetually connecting the world of finance and data.
          </p>
          <div className="mt-8 flex space-x-4">
            <button
              onClick={openModal}
              className="bg-[#203475] text-white px-4 py-2 rounded-md button-firstOne"
            >
              Buy Token
            </button>

            <a
              href="https://adashe.gitbook.io/adashe-gitbook/"
              target="__blank"
            >
              <button className="border border-[#203475] text-[#203475] px-4 py-2 rounded-md button-firstTwo">
                Whitepaper
              </button>
            </a>
          </div>
          {/*  <div className="mt-2">
            <span className="text-[#203475] percentOff">-- 37% OFF --</span>
        </div>*/}
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 p-6">
          <img
            src={Rectangle}
            alt="rectangle"
            className="w-2/2 h-auto md:h-64 rounded-md mx-auto myimg"
          />
        </div>
      </div>
    </>
  );
};

export default TwoColumnComponent;
