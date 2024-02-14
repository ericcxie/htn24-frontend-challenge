import React, { useEffect, useState } from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaPaintbrush, FaScrewdriverWrench } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import DownloadICSButton from "../buttons/DownloadICSButton";
import Header from "../header/Header";

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

const formatEventTime = (timestamp: number): { date: string; time: string } => {
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

const formatEventType = (eventType: string) => {
  return eventType
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [eventData, setEventData] = useState<TEvent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.hackthenorth.com/v3/events/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setEventData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!eventData) {
    return <div>No event data found.</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="flex flex-col items-center py-10 font-satoshiMedium">
        <div className="w-full max-w-4xl px-6 rounded-lg bg-gray-50">
          <h1 className="text-4xl font-bold font-satoshiBold text-black py-5 border-b border-gray-200">
            {eventData.name}
          </h1>

          <div className="flex flex-row justify-between items-start mt-3">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-satoshiMedium text-gray-500 flex items-center">
                {eventData.event_type === "workshop" && (
                  <FaScrewdriverWrench className="mr-1" />
                )}
                {eventData.event_type === "tech_talk" && (
                  <FaMicrophoneAlt className="mr-1" />
                )}
                {eventData.event_type === "activity" && (
                  <FaPaintbrush className="mr-1" />
                )}
                {formatEventType(eventData.event_type)}
              </p>
              <p className="my-2">
                {formatEventTime(eventData.start_time).date}{" "}
              </p>
              <p>
                {formatEventTime(eventData.start_time).time} -{" "}
                {formatEventTime(eventData.end_time).time}
              </p>
            </div>
            <div>
              <DownloadICSButton
                title={eventData.name}
                description={eventData.description}
                start={eventData.start_time}
                end={eventData.end_time}
              />
            </div>
          </div>
          <div className="my-2">
            <p className="font-bold">Description:</p>
            <p>{eventData.description}</p>
          </div>
          <div className="my-4">
            <h2 className="font-semibold">Speakers:</h2>
            <ul>
              {eventData.speakers.map((speaker) => (
                <li key={speaker.name}>{speaker.name}</li>
              ))}
            </ul>
          </div>
          <div className="my-4">
            <h2 className="font-semibold">Related Events:</h2>
            <div className="flex flex-wrap">
              {eventData.related_events.map((eventId) => (
                <Link
                  to={`/${eventId}/${encodeURIComponent(
                    eventData.name.replace(/\s+/g, "_")
                  )}`}
                  key={eventId}
                  className="m-2 p-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  {/* Placeholder for related event name */}
                  Event {eventId}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
