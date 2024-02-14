import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    fetch(`https://api.hackthenorth.com/v3/events/${id}`)
      .then((response) => response.json())
      .then((data) => setEventData(data))
      .catch((error) => console.error("Error:", error));
  }, [id]);

  // Render the event data here...
  // return <div>{eventData && <div>{eventData.name}</div>}</div>;
  return <div></div>;
};

export default EventDetails;
