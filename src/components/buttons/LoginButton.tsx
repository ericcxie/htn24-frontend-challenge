import React from "react";

type LoginButtonProps = {
  href: string;
  text: string;
};

const LoginButton: React.FC<LoginButtonProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      className="relative inline-block px-4 py-2 font-medium group"
    >
      <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-gradient-to-r from-pink-500 to-purple-600"></span>
      <span className="relative text-black group-hover:text-white">{text}</span>
    </a>
  );
};

export default LoginButton;
