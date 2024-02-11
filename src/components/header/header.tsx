import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-background font-satoshiMedium border-b border-gray-300 text-white">
      <Link to="/" className="text-2xl font-bold">
        Logo
      </Link>
      <Link to="/login" className="bg-white text-black px-4 py-2 rounded">
        Log In
      </Link>
    </header>
  );
};

export default Header;
