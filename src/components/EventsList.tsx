import { EventoEvent } from "@/lib/types";
import React from "react";
import EventCard from "./EventCard";

type Props = {
  events: EventoEvent[];
};

const EventsList = ({ events }: Props) => {
  return (
    <section className="flex flex-wrap max-w-[1100px] px-5 gap-10 justify-center">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
