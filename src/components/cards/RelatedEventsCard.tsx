import React from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaPaintbrush, FaScrewdriverWrench } from "react-icons/fa6";
import { Link } from "react-router-dom";

type RelatedEventCardProps = {
  eventName: string;
  eventType: string;
  date: string;
  startTime: string;
  endTime: string;
  permission: string;
  isLoggedIn: boolean;
};

const RelatedEventCard: React.FC<RelatedEventCardProps> = ({
  eventName,
  eventType,
  date,
  startTime,
  endTime,
  permission,
  isLoggedIn,
}) => {
  const isRestricted = !isLoggedIn && permission === "private";

  return (
    <div className="relative w-40 h-40 rounded-lg overflow-hidden">
      <div
        className={`absolute inset-0 p-3 bg-white drop-shadow-sm transition duration-300 ease-in-out ${
          isRestricted ? "blur-sm" : ""
        }`}
      >
        <h2 className="font-bold text-sm md:text-md">{eventName}</h2>
        <p className="text-sm font-satoshiMedium text-gray-500 flex items-center">
          {eventType === "Workshop" && <FaScrewdriverWrench className="mr-1" />}
          {eventType === "Tech Talk" && <FaMicrophoneAlt className="mr-1" />}
          {eventType === "Activity" && <FaPaintbrush className="mr-1" />}
          {eventType}
        </p>
        <p className="text-md">{date}</p>
        <p className="text-sm">
          {startTime} - {endTime}
        </p>
      </div>

      {isRestricted && (
        <div className="absolute px-2 top-0 left-0 w-full h-full flex items-center justify-center rounded-lg bg-white bg-opacity-70">
          <p className="text-center text-md font-satoshiBold">
            Please{" "}
            <Link to="/login" className="underline hover:text-purple-600">
              log in
            </Link>{" "}
            to view private events
          </p>
        </div>
      )}
    </div>
  );
};

export default RelatedEventCard;
