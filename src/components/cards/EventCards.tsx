import React from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaPaintbrush, FaScrewdriverWrench } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
        className={`flex flex-col justify-center items-center text-white p-4 rounded-lg min-w-32 h-32 ${
          eventType === "workshop"
            ? "bg-[#4CBB17]"
            : eventType === "tech_talk"
            ? "bg-[#6699CC]"
            : "bg-[#9966CC]"
        }`}
      >
        <span className="text-md font-satoshiMedium mb-2">{date}</span>
        <span className="text-xl font-satoshiBold leading-none">
          {startTime}
        </span>
        <span className="text-xl font-satoshiBold leading-none">-</span>
        <span className="text-xl font-satoshiBold leading-none">{endTime}</span>
      </div>

      {/* Event details */}
      <div className="flex flex-col ml-4 flex-grow justify-between">
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
        {/* <div className="flex justify-end mt-2">
          <button className="text-satoshiMedium bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
            + Add to calendar
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default EventCard;
