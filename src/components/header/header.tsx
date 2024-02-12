import React from "react";
import { Link } from "react-router-dom";
import { BsGlobeAmericas } from "react-icons/bs";
import LoginButton from "../buttons/LoginButton";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 md:px-10 bg-white font-satoshiMedium border-b border-gray-300 text-black">
      <Link to="/" className="text-2xl font-bold flex items-center">
        <BsGlobeAmericas className="mr-2" />
        Hackathon Global Inc.™
      </Link>

      <LoginButton href="/login" text="Log in" />
    </header>
  );
};

export default Header;
