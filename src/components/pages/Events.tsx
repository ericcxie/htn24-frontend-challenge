import React, { useEffect, useState } from "react";
import Header from "../header/header";
import EventCard from "../cards/EventCards";
import { EventsData, formatEventTime } from "../data/Events";

const Events: React.FC = () => {
  const [eventsData, setEventsData] = useState(null);

  useEffect(() => {
    fetch("https://api.hackthenorth.com/v3/events")
      .then((response) => response.json())
      .then((data) => setEventsData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  console.log(eventsData);

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <div className="flex flex-col items-center py-3">
        {/* Main container for events with a max width and some padding */}
        <div className="w-full max-w-4xl px-6 rounded-lg">
          {/* Events header */}
          <h1 className="text-4xl font-bold font-satoshiBold text-black py-5 border-b border-gray-200">
            Events
          </h1>
          <div className="flex flex-col space-y-4 p-4 overflow-y-auto max-h-[35rem]">
            {/* Mapping through the event data to render EventCards */}
            {EventsData.map((event) => (
              <EventCard
                key={event.id}
                name={event.name}
                startTime={formatEventTime(event.start_time)}
                endTime={formatEventTime(event.end_time)}
                description={event.description}
                speakers={event.speakers
                  .map((speaker) => speaker.name)
                  .join(", ")}
                eventType={event.event_type}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
