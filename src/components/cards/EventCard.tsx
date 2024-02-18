import React from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaPaintbrush, FaScrewdriverWrench } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { start } from "repl";

type EventCardProps = {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
  date: string;
  description?: string;
  speakers: string;
  eventType: string;
};

const EventCard: React.FC<EventCardProps> = ({
  id,
  name,
  startTime,
  endTime,
  date,
  description,
  speakers,
  eventType,
}) => {
  const limitDescription = (desc: string, limit: number) => {
    const words = desc.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return desc;
  };

  const formatEventType = (eventType: string) => {
    return eventType
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-sm">
      {/* Square with date and time */}
      <div
        className={`flex flex-col justify-center items-center text-white py-2 mt-3 md:mt-0 md:p-4 w-full md:w-auto rounded-lg min-w-32 md:h-32 order-last sm:order-none ${
          eventType === "workshop"
            ? "bg-[#4CBB17]"
            : eventType === "tech_talk"
            ? "bg-[#6699CC]"
            : "bg-[#9966CC]"
        }`}
      >
        <span className="text-md font-satoshiMedium md:mb-2">{date}</span>

        <span className="hidden md:inline text-xl font-satoshiBold leading-none">
          {startTime}
        </span>
        <span className="hidden md:inline text-xl font-satoshiBold leading-none">
          -
        </span>
        <span className="hidden md:inline text-xl font-satoshiBold leading-none">
          {endTime}
        </span>

        <span className="md:hidden text-xl font-satoshiBold leading-none mb-1">
          {startTime} - {endTime}
        </span>
      </div>

      {/* Event details */}
      <div className="flex flex-col flex-grow justify-between sm:ml-4 order-first sm:order-none">
        <div className="">
          <Link
            to={`/${id}/${encodeURIComponent(name.replace(/\s+/g, "_"))}`}
            className="text-lg font-bold font-satoshiBold text-black hover:underline"
          >
            {name}
          </Link>
          <p className="text-sm font-satoshiMedium text-gray-500 mt-1 flex items-center">
            {eventType === "workshop" && (
              <FaScrewdriverWrench className="mr-1" />
            )}
            {eventType === "tech_talk" && <FaMicrophoneAlt className="mr-1" />}
            {eventType === "activity" && <FaPaintbrush className="mr-1" />}
            {formatEventType(eventType)}
          </p>
          {description && (
            <p className="text-satoshi font-satoshiLight text-gray-600 mt-1">
              {limitDescription(description, 25)}
            </p>
          )}

          {speakers && (
            <p className="text-satoshi font-satoshiMedium text-gray-500 mt-1">
              Speakers: {speakers}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
