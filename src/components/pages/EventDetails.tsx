import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaPaintbrush, FaScrewdriverWrench } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import DownloadICSButton from "../buttons/DownloadICSButton";
import RelatedEventCard from "../cards/RelatedEventsCard";
import Header from "../header/Header";

import PrivateEventsLoginPrompt from "../elements/PrivateEventsLoginPrompt";

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

const EventDetails: React.FC<EventsProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const { id } = useParams<{ id: string }>();
  const [eventData, setEventData] = useState<TEvent | null>(null);
  const [relatedEventsData, setRelatedEventsData] = useState<TEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

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

        // Get the related events
        const relatedEvents = data.related_events;

        // Make a request for each related event
        const requests = relatedEvents.map((eventId: string) =>
          fetch(`https://api.hackthenorth.com/v3/events/${eventId}`)
        );

        // Use Promise.all to wait for all requests to complete
        return Promise.all(requests)
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((relatedEventsData) => {
            // relatedEventsData is an array of the responses from the second requests
            setRelatedEventsData(relatedEventsData);
          });
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    <div className="flex justify-center items-center h-full w-full">
      <BeatLoader color="#C4CDCF" loading={isLoading} size={15} />
    </div>;
  }

  if (!eventData) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <p>{error}</p>
      </div>
    );
  }

  if (!isLoggedIn && eventData.permission === "private") {
    return <PrivateEventsLoginPrompt />;
  }

  return (
    <div className="bg-white min-h-screen">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div
        data-aos="fade-up"
        data-aos-once
        className="flex flex-col items-center mx-4 py-10 font-satoshiMedium"
      >
        <div className="w-full max-w-4xl px-4 md:px-6 rounded-lg bg-gray-50">
          <h1 className="text-3xl md:text-4xl font-bold font-satoshiBold text-black py-5 border-b border-gray-200">
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
          {eventData.speakers && eventData.speakers.length > 0 && (
            <div className="my-4">
              <h2 className="font-semibold">Speakers:</h2>
              <ul>
                {eventData.speakers.map((speaker) => (
                  <li key={speaker.name}>{speaker.name}</li>
                ))}
              </ul>
            </div>
          )}

          {relatedEventsData.length > 0 && (
            <div className="my-2">
              <h2 className="font-semibold">Related Events:</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-2 mb-4">
                {relatedEventsData.map((event) =>
                  isLoggedIn || event.permission !== "private" ? (
                    <Link
                      to={`/${event.id}/${encodeURIComponent(
                        event.name.replace(/\s+/g, "_")
                      )}`}
                      key={event.id}
                    >
                      <RelatedEventCard
                        eventName={event.name}
                        eventType={formatEventType(event.event_type)}
                        date={formatEventTime(event.start_time).date}
                        startTime={formatEventTime(event.start_time).time}
                        endTime={formatEventTime(event.end_time).time}
                        permission={event.permission}
                        isLoggedIn={isLoggedIn}
                      />
                    </Link>
                  ) : (
                    <div key={event.id} className="cursor-not-allowed">
                      <RelatedEventCard
                        eventName={event.name}
                        eventType={formatEventType(event.event_type)}
                        date={formatEventTime(event.start_time).date}
                        startTime={formatEventTime(event.start_time).time}
                        endTime={formatEventTime(event.end_time).time}
                        permission={event.permission}
                        isLoggedIn={isLoggedIn}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
