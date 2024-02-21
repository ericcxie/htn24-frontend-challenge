import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import EventCard from "../cards/EventCard";
import TabComponent from "../elements/EventsTab";
import SearchBar from "../elements/SearchBar";
import Header from "../header/Header";

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

type EventsProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
};

const Events: React.FC<EventsProps> = ({ isLoggedIn, setIsLoggedIn }) => {
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
    const eventDate = new Date(timestamp);
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

  const renderEvents = () => {
    if (!isLoggedIn && activeTab === "private") {
      return (
        <div className="relative">
          <div className="absolute inset-0 bg-white bg-opacity-75 flex items-start pt-36 justify-center z-10">
            <a href="/login">
              <p className="text-lg font-semibold px-4 py-2 rounded-xl bg-gray-500 hover:bg-gray-600 text-white">
                Please log in to view private events
              </p>
            </a>
          </div>
          {eventsData
            .filter((event) => event.permission === "private")
            .filter((event) =>
              event.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
            )
            .map((event) => (
              <div key={event.id} className="blur-sm">
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
                  eventLink={event.public_url}
                />
              </div>
            ))}
        </div>
      );
    }

    return eventsData
      .filter((event) => event.permission === activeTab)
      .filter((event) =>
        event.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
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
          speakers={event.speakers.map((speaker) => speaker.name).join(", ")}
          eventType={event.event_type}
          eventLink={isLoggedIn ? event.private_url : event.public_url}
        />
      ));
  };

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div
        data-aos="fade-up"
        data-aos-once
        className="flex flex-col items-center py-3"
      >
        <div className="w-full max-w-4xl px-6 rounded-lg">
          <h1 className="text-3xl md:text-4xl font-bold font-satoshiBold text-black pt-5 pb-2 border-b border-gray-200">
            Events
          </h1>
          <div className="flex flex-col space-y-4 pb-4 pt-1 rounded-xl">
            <div className="space-y-2">
              <SearchBar onSearch={(term) => setSearchQuery(term)} />
              <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="overflow-y-auto md:max-h-[30rem] 2xl:max-h-[55rem] rounded-xl space-y-4">
              {loading ? (
                <div className="flex justify-center items-center h-full w-full">
                  <BeatLoader color="#C4CDCF" loading={loading} size={15} />
                </div>
              ) : (
                renderEvents()
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
