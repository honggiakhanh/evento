import { EventoEvent } from "@/lib/types";
import React from "react";

type Props = {
  event: EventoEvent;
};

const EventCard = ({ event }: Props) => {
  return <section key={event.id}>{event.name}</section>;
};

export default EventCard;
