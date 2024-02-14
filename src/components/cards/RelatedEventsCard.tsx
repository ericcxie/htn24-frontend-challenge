import React from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaPaintbrush, FaScrewdriverWrench } from "react-icons/fa6";

type RelatedEventCardProps = {
  eventName: string;
  eventType: string;
  date: string;
  startTime: string;
  endTime: string;
};

const RelatedEventCard: React.FC<RelatedEventCardProps> = ({
  eventName,
  eventType,
  date,
  startTime,
  endTime,
}) => {
  return (
    <div className="border p-4 rounded-lg w-44 h-44">
      <h2 className="font-bold text-md">{eventName}</h2>
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
  );
};

export default RelatedEventCard;
