import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import EventCard from "../cards/EventCards";
import SearchBar from "../elements/SearchBar";

// Define the structure of the event data
export type TEvent = {
  id: number;
  name: string;
  event_type: string;
  permission: string;
  start_time: number;
  end_time: number;
  description: string;
  speakers: { name: string }[];
  public_url: string;
  private_url: string;
  related_events: number[];
};

const Events: React.FC = () => {
  const [eventsData, setEventsData] = useState<TEvent[]>([]);

  useEffect(() => {
    fetch("https://api.hackthenorth.com/v3/events")
      .then((response) => response.json())
      .then((data) => setEventsData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const formatEventTime = (timestamp: number): string => {
    // Format the timestamp to a readable date-time format
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <div className="flex flex-col items-center py-3">
        <div className="w-full max-w-4xl px-6 rounded-lg">
          <h1 className="text-4xl font-bold font-satoshiBold text-black py-5 border-b border-gray-200">
            Events
          </h1>
          <div className="flex flex-col space-y-4 p-4 rounded-xl">
            <SearchBar />
            <div className="overflow-y-auto max-h-[30rem] rounded-xl space-y-4">
              {eventsData.map((event) => (
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
    </div>
  );
};

export default Events;
