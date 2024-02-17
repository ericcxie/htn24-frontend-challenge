// Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import { BsGlobeAmericas } from "react-icons/bs";
import LoginButton from "../buttons/LoginButton";
import LogoutButton from "../buttons/LogoutButton";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="flex justify-between items-center p-4 md:px-10 bg-white font-satoshiMedium border-b border-gray-300 text-black">
      <Link to="/" className="text-2xl font-bold flex items-center">
        <BsGlobeAmericas className="mr-2" />
        Hackathon Global Inc.™
      </Link>

      {isLoggedIn ? (
        <LogoutButton onLogout={handleLogout} />
      ) : (
        <LoginButton href="/login" />
      )}
    </header>
  );
};

export default Header;
