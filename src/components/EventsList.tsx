import { EventoEvent } from "@/lib/types";
import React from "react";

type Props = {
  events: EventoEvent[];
};

const EventsList = ({ events }: Props) => {
  return (
    <section>
      {events.map((event) => (
        <section key={event.id}>{event.name}</section>
      ))}
    </section>
  );
};

export default EventsList;
