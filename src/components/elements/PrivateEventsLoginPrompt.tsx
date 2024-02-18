import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PrivateEventsLoginPrompt: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white font-satoshi">
      <div className="p-6 mx-5 max-w-sm bg-gray-50 rounded-lg">
        <p className="mt-3 text-gray-600 text-center">
          This is a private event. Please
          <Link to="/login" className="hover:text-purple-600 underline ml-1">
            log in
          </Link>{" "}
          to view the details.
        </p>
        <button className="mx-auto">Go back</button>
      </div>
    </div>
  );
};

export default PrivateEventsLoginPrompt;
