import React from "react";
import EventCard from "./EventCard";
import { getEvents } from "@/lib/server-utils";
import PaginationControl from "./PaginationControl";

type Props = {
  city: string;
  page?: number;
};

const EventsList = async ({ city, page = 1 }: Props) => {
  const { events, totalCount } = await getEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="flex flex-wrap max-w-[1100px] px-5 gap-10 justify-center">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControl previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
};

export default EventsList;
