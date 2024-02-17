import React from "react";

type LoginButtonProps = {
  onLogout: () => void;
};

const LogoutButton: React.FC<LoginButtonProps> = ({ onLogout }) => {
  return (
    <button
      onClick={onLogout}
      className="relative inline-block px-4 py-2 font-medium group"
    >
      <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-gradient-to-r from-pink-500 to-purple-600"></span>
      <span className="relative text-black group-hover:text-white">
        Log out
      </span>
    </button>
  );
};

export default LogoutButton;
