import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import EventCard from "../cards/EventCard";
import SearchBar from "../elements/SearchBar";
import Header from "../header/Header";

import TabComponent from "../elements/EventsTab";

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
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("public");

  useEffect(() => {
    fetch("https://api.hackthenorth.com/v3/events")
      .then((response) => response.json())
      .then((data) => {
        setEventsData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, []);

  const formatEventTime = (
    timestamp: number
  ): { date: string; time: string } => {
    // Create a new Date object from the timestamp
    const eventDate = new Date(timestamp);

    // Format the date and time separately
    const date = eventDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const time = eventDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return { date, time };
  };

  const filteredEvents = eventsData.filter(
    (event) => event.permission === activeTab
  );

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="flex flex-col items-center py-3">
        <div className="w-full max-w-4xl px-6 rounded-lg">
          <h1 className="text-4xl font-bold font-satoshiBold text-black py-5 border-b border-gray-200">
            Events
          </h1>
          <div className="flex flex-col space-y-4 p-4 rounded-xl">
            <SearchBar onSearch={(term) => setSearchQuery(term)} />
            <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="overflow-y-auto max-h-[30rem] rounded-xl space-y-4">
              {loading ? (
                <div className="flex justify-center items-center h-full w-full">
                  <BeatLoader color="#C4CDCF" loading={loading} size={15} />
                </div>
              ) : (
                filteredEvents
                  .filter((event) =>
                    event.name.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .sort((a, b) => a.start_time - b.start_time)
                  .map((event) => (
                    <EventCard
                      id={event.id}
                      key={event.id}
                      name={event.name}
                      startTime={formatEventTime(event.start_time).time}
                      endTime={formatEventTime(event.end_time).time}
                      date={formatEventTime(event.start_time).date}
                      description={event.description}
                      speakers={event.speakers
                        .map((speaker) => speaker.name)
                        .join(", ")}
                      eventType={event.event_type}
                    />
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
