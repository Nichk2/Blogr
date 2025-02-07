import Logo from "../images/logo.svg";
import Items from "./Nav_items.jsx";
import "../index.css";
import Background from "../images/bg-pattern-intro-desktop.svg";
import Hamburger from "../images/hamburger.svg";
import Close from "../images/close.svg";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArrowD from "../images/arrow-dark.svg";
import dropdownContent from "./Nav_items.jsx";
import LogoMenu from "../images/logo-menu.svg";

export default function Header() {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to manage dropdown visibility for each "Connect" item
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to toggle the dropdown for a specific item
  const toggleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  const [isTurnedArrow, setTurnArrow] = useState(false);

  const ArrowRotation = (item) => {
    setTurnArrow((prev) => ({
      ...prev,
      [item]: !prev[item], // Toggle only the clicked item
    }));
  };

  return (
    <header className="h-120 rounded-bl-[5rem] bg-veryLightRed relative overflow-hidden">
      {/* Background Image */}
      <img
        src={Background}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover z-30"
      />

      {/* Navigation */}
      <nav className="relative z-40 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between p-6 relative">
          {/* Logo and Navigation Links */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <img src={Logo} alt="Logo" className="h-8 sm:h-10" />

            {/* Navigation Links (Hidden on small screens) */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                <Items names="Product" />
                <Items names="Company" />
                <Items names="Connect" />
              </ul>
            </div>
          </div>

          {/* Login and Sign Up Buttons */}
          <div className="hidden md:hidden lg:flex items-center gap-4">
            <button className="font-medium text-white font-ubuntu text-sm sm:text-base hover:opacity-80 transition-opacity">
              Login
            </button>
            <button className="bg-white rounded-full text-ctaRed px-6 py-2 font-medium font-ubuntu text-sm sm:text-base hover:bg-ctaRed hover:text-white transition-colors">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden md:flex text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Burger Menu Icon */}
            {!isMenuOpen && (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}

          </button>
        </div>
      </nav>

      {/* Overlay for Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white fixed top-0 left-0 w-full z-50"
          >
            {/* Logo and Close Button */}
            <div className="flex items-center justify-between p-6">
              <img src={LogoMenu} alt="Logo" className="h-8 sm:h-10" />
              <button
                className="text-gray-600 focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col items-center gap-6 p-6">
              {/* Product */}
              <li>
                <button
                  onClick={() => {
                    toggleDropdown("Product");
                    ArrowRotation("Product");
                  }}
                  className="font-ubuntu text-sm sm:text-base hover:text-black transition-all duration-300 flex items-center gap-3 text-bodyCopy"
                >
                  Product{" "}
                  <span
                    className={`transition-transform duration-300 ${
                      isTurnedArrow["Product"] ? "rotate-180" : ""
                    }`}
                  >
                    <img src={ArrowD} alt="arrow-dark" />
                  </span>
                </button>

                {/* Product Dropdown */}
                <AnimatePresence>
                  {openDropdown === "Product" && (
                    <motion.ul
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 pl-4"
                    >
                      <li className="py-2">
                        <a
                          href="#"
                          className="text-bodyCopy font-ubuntu text-sm"
                        >
                          Overview
                        </a>
                      </li>
                      <li className="py-2">
                        <a
                          href="#"
                          className="text-bodyCopy font-ubuntu text-sm"
                        >
                          Pricing
                        </a>
                      </li>
                      <li className="py-2">
                        <a
                          href="#"
                          className="text-bodyCopy font-ubuntu text-sm"
                        >
                          Marketplace
                        </a>
                      </li>
                      <li className="py-2">
                        <a
                          href="#"
                          className="text-bodyCopy font-ubuntu text-sm"
                        >
                          Features
                        </a>
                      </li>
                      <li className="py-2">
                        <a
                          href="#"
                          className="text-bodyCopy font-ubuntu text-sm"
                        >
                          Integrations
                        </a>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Company */}
              <li>
                <button
                  onClick={() => {
                    toggleDropdown("Company");
                    ArrowRotation("Company");
                  }}
                  className="font-ubuntu text-sm sm:text-base hover:text-black transition-all duration-300 flex items-center gap-3 text-bodyCopy"
                >
                  Company{" "}
                  <span
                    className={`transition-transform duration-300 ${
                      isTurnedArrow["Company"] ? "rotate-180" : ""
                    }`}
                  >
                    <img src={ArrowD} alt="" />
                  </span>
                </button>
                {/* Company Dropdown */}
                <AnimatePresence>
                  {openDropdown === "Company" && (
                    <motion.ul
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 pl-4"
                    >
                      <li className="py-2">
                        <a
                          href="#"
                          className="text-bodyCopy font-ubuntu text-sm"
                        >
                          About
                        </a>
                      </li>
                      <li className="py-2">
                        <a
                          href="#"
                          className="text-bodyCopy font-ubuntu text-sm"
                        >
                          Team
                        </a>
                      </li>
                      <li className="py-2">
                        <a
                          href="#"
                          className="text-bodyCopy font-ubuntu text-sm"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="py-2">
                        <a
                          href="#"
                          className="text-bodyCopy font-ubuntu text-sm"
                        >
                          Careers
                        </a>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Connect */}
              <li>
                <button
                  onClick={() => {
                    toggleDropdown("Connect");
                    ArrowRotation("Connect");
                  }}
                  className="font-ubuntu text-sm sm:text-base hover:text-black transition-all duration-300 flex items-center gap-3 text-bodyCopy"
                >
                  Connect{" "}
                  <span
                    className={`transition-transform duration-300 ${
                      isTurnedArrow["Connect"] ? "rotate-180" : ""
                    }`}
                  >
                    <img src={ArrowD} alt="" />
                  </span>
                </button>
                {/* Connect Dropdown */}
                <AnimatePresence>
                  {openDropdown === "Connect" && (
                    <motion.ul
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 pl-4"
                    >
                      <li className="py-2">
                        <a
                          href="#"
                          className="text-bodyCopy font-ubuntu text-sm"
                        >
                          Contact
                        </a>
                      </li>
                      <li className="py-2">
                        <a
                          href="#"
                          className="text-bodyCopy font-ubuntu text-sm"
                        >
                          Newsletter
                        </a>
                      </li>
                      <li className="py-2">
                        <a
                          href="#"
                          className="text-bodyCopy font-ubuntu text-sm"
                        >
                          LinkedIn
                        </a>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}