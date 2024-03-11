import React from "react";
import EventCard from "./EventCard";
import { getEvents } from "@/lib/utils";

type Props = {
  city: string;
};

const EventsList = async ({ city }: Props) => {
  const events = await getEvents(city);
  return (
    <section className="flex flex-wrap max-w-[1100px] px-5 gap-10 justify-center">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
