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
        className="text-satoshiMedium bg-black text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        + Add to calendar
      </ICalendarLink>
    </div>
  );
};

export default DownloadICSButton;
