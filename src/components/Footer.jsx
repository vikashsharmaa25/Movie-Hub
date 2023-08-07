import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black3 text-white py-16 w-full bg-[#020c1b]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <ul className="flex gap-4 mb-6">
            <li className="text-xs md:text-base hover:text-pink cursor-pointer transition-colors">
              Terms Of Use
            </li>
            <li className="text-xs md:text-base hover:text-pink cursor-pointer transition-colors">
              Privacy Policy
            </li>
            <li className="text-xs md:text-base hover:text-pink cursor-pointer transition-colors">
              About
            </li>
            <li className="text-xs md:text-base hover:text-pink cursor-pointer transition-colors">
              Blog
            </li>
            <li className="text-xs md:text-base hover:text-pink cursor-pointer transition-colors">
              FAQ
            </li>
          </ul>
          <div className="text-xs md:text-base mb-6 opacity-50 text-center w-full md:px-10 px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div className="flex gap-4">
            <span className="w-12 h-12 rounded-full bg-black flex items-center justify-center cursor-pointer transition-shadow hover:shadow-pink">
              <FaFacebookF className="text-white" />
            </span>
            <span className="w-12 h-12 rounded-full bg-black flex items-center justify-center cursor-pointer transition-shadow hover:shadow-pink">
              <FaInstagram className="text-white" />
            </span>
            <span className="w-12 h-12 rounded-full bg-black flex items-center justify-center cursor-pointer transition-shadow hover:shadow-pink">
              <FaTwitter className="text-white" />
            </span>
            <span className="w-12 h-12 rounded-full bg-black flex items-center justify-center cursor-pointer transition-shadow hover:shadow-pink">
              <FaLinkedin className="text-white" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
