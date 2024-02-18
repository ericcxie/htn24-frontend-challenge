import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { BsGlobeAmericas } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

interface LoginProps {
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validEmail = "johnsmith@gmail.com";
  const validPassword = "password";

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === validEmail && password === validPassword) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      // Handle login failure (e.g., show an error message)
      alert("Invalid credentials"); // Simple alert, replace with a better error handling
    }
  };

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-10 lg:px-8">
      <div
        data-aos="fade-up"
        data-aos-once
        className="max-w-md w-full space-y-8"
      >
        <div>
          <Link to="/">
            <BsGlobeAmericas className="mx-auto h-8 w-auto" />
          </Link>
          <h2 className="mt-3 text-center text-3xl font-extrabold text-gray-900">
            Hacker's Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative inline-block w-full px-4 py-2 font-medium group"
            >
              <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-orange-400 to-fuchsia-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-gradient-to-r from-orange-400 to-fuchsia-500"></span>
              <span className="relative text-black group-hover:text-white">
                Log in
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
