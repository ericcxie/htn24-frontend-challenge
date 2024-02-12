// mockEventsData.ts

// Define the structure of the speaker data
export type TSpeaker = {
  name: string;
};

// Define the structure of the event data
export type TEvent = {
  id: number;
  name: string;
  event_type: string; // Assuming event_type is a string for simplicity
  permission?: string; // Assuming permission is a string for simplicity

  start_time: number; // Unix timestamp (ms)
  end_time: number; // Unix timestamp (ms)

  description?: string;
  speakers: TSpeaker[];

  public_url?: string;
  private_url: string;
  related_events: number[];
};

// Mock event data array
export const EventsData: TEvent[] = [
  {
    id: 1,
    name: "Bergen International Film Festival",
    event_type: "festival",
    permission: "public",
    start_time: 1610442000000,
    end_time: 1610445600000,
    description:
      "Films from all over the world gather all film enthusiasts for unique moments at the Bergen International Film Festival.",
    speakers: [{ name: "Speaker 1" }, { name: "Speaker 2" }],
    public_url: "http://example.com/public-event",
    private_url: "http://example.com/private-event",
    related_events: [2, 3], // IDs of related events
  },
  {
    id: 2,
    name: "Bergen International Film Festival",
    event_type: "festival",
    permission: "public",
    start_time: 1610442000000,
    end_time: 1610445600000,
    description:
      "Films from all over the world gather all film enthusiasts for unique moments at the Bergen International Film Festival.",
    speakers: [{ name: "Speaker 1" }, { name: "Speaker 2" }],
    public_url: "http://example.com/public-event",
    private_url: "http://example.com/private-event",
    related_events: [2, 3], // IDs of related events
  },
  {
    id: 3,
    name: "Bergen International Film Festival",
    event_type: "festival",
    permission: "public",
    start_time: 1610442000000,
    end_time: 1610445600000,
    description:
      "Films from all over the world gather all film enthusiasts for unique moments at the Bergen International Film Festival.",
    speakers: [{ name: "Speaker 1" }, { name: "Speaker 2" }],
    public_url: "http://example.com/public-event",
    private_url: "http://example.com/private-event",
    related_events: [2, 3], // IDs of related events
  },
  {
    id: 4,
    name: "Bergen International Film Festival",
    event_type: "festival",
    permission: "public",
    start_time: 1610442000000,
    end_time: 1610445600000,
    description:
      "Films from all over the world gather all film enthusiasts for unique moments at the Bergen International Film Festival.",
    speakers: [{ name: "Speaker 1" }, { name: "Speaker 2" }],
    public_url: "http://example.com/public-event",
    private_url: "http://example.com/private-event",
    related_events: [2, 3], // IDs of related events
  },
];

// Format the event time to a human-readable format
export const formatEventTime = (timestamp: number): string => {
  const eventDate = new Date(timestamp);
  return eventDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};
