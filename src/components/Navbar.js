import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo/adashe-dark.png";
import darkModeLogo from "../assets/logo/adashe-light.png";
import { Sun, Moon } from "react-feather";
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const openModal = () => {
    setIsOpen(false);
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

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        behavior: "smooth",
        top: target.offsetTop,
      });
    }
  };

  const handleNavigationClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;

    setIsDarkMode(newDarkModeState);
    localStorage.setItem("isDarkMode", newDarkModeState ? "true" : "false");

    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark-mode", newDarkModeState);
  };
  useEffect(() => {
    const storedIsDarkMode = localStorage.getItem("isDarkMode");

    if (storedIsDarkMode === "true") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }

    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark-mode", storedIsDarkMode === "true");
  }, []);

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
              <a href="https://raze.finance/" target="__blank">
                <button
                  onClick={openModal}
                  className="bg-[#203475] text-white px-4 py-2 rounded-md button-firstOne"
                >
                  Raze Finance
                </button>
              </a>

              <a href="https://www.pinksale.finance/" target="__blank">
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
      <nav className={`py-2 md:py-2 ${isDarkMode ? "dark-mode" : ""}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img
              src={isDarkMode ? darkModeLogo : logo}
              alt="Adashe"
              className="mx-auto w-25 h-20 md:w-25 md:h-24 mr-20"
            />
          </div>
          <div className="md:hidden pr-7">
            <label className="switch">
              <input
                className="kaydswitch"
                onClick={toggleDarkMode}
                type="checkbox"
                id="modeToggle"
              />
              <span className="slider">
                <i className="kicon">{isDarkMode ? <Moon /> : <Sun />}</i>
              </span>
            </label>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#ABOUT"
              className={`text-[#203475] hover:text-gray-300 transition duration-300`}
              onClick={(e) => handleNavigationClick(e, "ABOUT")}
            >
              ABOUT
            </a>
            <a
              href="#SERVICE"
              className="text-[#203475] hover:text-gray-300 transition duration-300"
              onClick={(e) => handleNavigationClick(e, "SERVICE")}
            >
              SERVICES
            </a>
            <a
              href="#ROADMAP"
              className="text-[#203475] hover:text-gray-300 transition duration-300"
              onClick={(e) => handleNavigationClick(e, "ROADMAP")}
            >
              ROADMAP
            </a>
            {/* <a
            href="https://adashe.gitbook.io/adashe-gitbook/"
            className="text-[#203475] hover:text-gray-300 transition duration-300"
            >
            WHITEPAPER
          </a> */}
            <a
              href="#TEAM"
              className="text-[#203475] hover:text-gray-300 transition duration-300"
              onClick={(e) => handleNavigationClick(e, "TEAM")}
            >
              TEAM
            </a>
            <a
              href="#FAQ"
              className="text-[#203475] hover:text-gray-300 transition duration-300"
              onClick={(e) => handleNavigationClick(e, "FAQ")}
            >
              FAQ
            </a>
            <div className="pr-3">
              <label className="switch">
                <input
                  className="kaydswitch"
                  onClick={toggleDarkMode}
                  type="checkbox"
                  id="modeToggle"
                />
                <span className="slider">
                  <i className="kicon">{isDarkMode ? <Moon /> : <Sun />}</i>
                </span>
              </label>
            </div>
            <button
              className="bg-[#203475] text-white px-4 py-2 rounded-md button-firstOne"
              onClick={openModal}
            >
              Buy Token
            </button>
            {/* <button className="text-[#203475] rounded-md px-4 py-1 button-firstTwo">
            Buy Token
          </button> */}
          </div>
          <div className="md:hidden pr-3">
            <button onClick={toggleNavbar} className="text-[#203475] hamburger">
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden py-2 border-b border-gray-300 pl-2">
            <a
              href="#ABOUT"
              className="block text-[#203475] p-2 px-4 hover:text-gray-300 transition duration-300 hover:border-[#203475]"
              onClick={(e) => handleNavigationClick(e, "ABOUT")}
            >
              ABOUT
            </a>
            <a
              href="#SERVICE"
              className="block text-[#203475] p-2 px-4 hover:text-gray-300 transition duration-300"
              onClick={(e) => handleNavigationClick(e, "SERVICE")}
            >
              SERVICES
            </a>
            <a
              href="#ROADMAP"
              className="block text-[#203475] p-2 px-4 hover:text-gray-300 transition duration-300"
              onClick={(e) => handleNavigationClick(e, "ROADMAP")}
            >
              ROADMAP
            </a>
            {/* <a
            href="https://adashe.gitbook.io/adashe-gitbook/"
            className="block text-[#203475] p-2 px-4 hover:text-gray-300 transition duration-300"
            >
            WHITEPAPER
      </a> */}
            <a
              href="#TEAM"
              className="block text-[#203475] p-2 px-4 hover:text-gray-300 transition duration-300"
              onClick={(e) => handleNavigationClick(e, "TEAM")}
            >
              TEAM
            </a>
            <a
              href="#FAQ"
              className="block text-[#203475] p-2 px-4 hover:text-gray-300 transition duration-300"
              onClick={(e) => handleNavigationClick(e, "FAQ")}
            >
              FAQ
            </a>
            <button onClick={openModal} className="border border-[#203475] text-[#203475] px-4 py-1 rounded-md">
              Buy Token
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
