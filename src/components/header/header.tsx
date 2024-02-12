import React from "react";
import { Link } from "react-router-dom";
import { BsGlobeAmericas } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 md:px-10 bg-white font-satoshiMedium border-b border-gray-300 text-black">
      <Link to="/" className="text-2xl font-bold flex items-center">
        <BsGlobeAmericas className="mr-2" />
        Hackathon Global Inc.™
      </Link>

      <a
        href="/login"
        className="relative inline-block px-4 py-2 font-medium group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:border-transparent group-hover:bg-gradient-to-r from-pink-500 to-purple-600"></span>
        <span className="relative text-black group-hover:text-white">
          Log in
        </span>
      </a>
    </header>
  );
};

export default Header;
