import React from "react";
import ICalendarLink from "react-icalendar-link";

type DownloadICSButtonProps = {
  title: string;
  description: string;
  start: number;
  end: number;
};

const DownloadICSButton: React.FC<DownloadICSButtonProps> = ({
  title,
  description,
  start,
  end,
}) => {
  const event = {
    title: title,
    description: description,
    startTime: new Date(start).toISOString(),
    endTime: new Date(end).toISOString(),
  };

  return (
    <div className="flex justify-end">
      <ICalendarLink
        event={event}
        filename="event.ics"
        className="relative inline-block px-4 py-2 font-medium group"
      >
        <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-sky-400 to-indigo-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-gradient-to-r from-sky-400 to-indigo-500"></span>
        <span className="relative text-black group-hover:text-white">
          + Add to calendar
        </span>
      </ICalendarLink>
    </div>
  );
};

export default DownloadICSButton;
