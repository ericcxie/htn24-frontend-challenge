import React from "react";

type EventCardProps = {
  name: string;
  startTime: string;
  endTime: string;
  description?: string;
  speakers: string;
  eventType: string;
};

const EventCard: React.FC<EventCardProps> = ({
  name,
  startTime,
  endTime,
  description,
  speakers,
  eventType,
}) => {
  return (
    <div className="flex flex-col bg-gray-50 p-4 rounded-lg shadow-sm">
      {/* Displaying the start and end time */}
      <div className="flex justify-between">
        <span className="text-sm font-satoshiMedium text-gray-500">
          {startTime}
        </span>
        <span className="text-sm font-satoshiMedium text-gray-500">
          {endTime}
        </span>
      </div>
      <h2 className="text-xl font-satoshiBold mt-2">{name}</h2>
      {description && (
        <p className="text-satoshi font-satoshiLight text-gray-600 mt-1">
          {description}
        </p>
      )}

      <p className="text-sm font-satoshiMedium text-gray-500 mt-1">
        Type: {eventType}
      </p>
      {speakers && (
        <p className="text-satoshi font-satoshiMedium text-gray-500 mt-1">
          Speakers: {speakers}
        </p>
      )}
      <div className="flex justify-end mt-2">
        <button className="text-satoshiMedium bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
          + Add to calendar
        </button>
      </div>
    </div>
  );
};

export default EventCard;
