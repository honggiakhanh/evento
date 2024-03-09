import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { EventoEvent } from "@/lib/types";

const EventPage = async ({
  params,
}: {
  params: {
    city: string;
  };
}) => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=austin`
  );
  const events: EventoEvent[] = await response.json();

  const city = params.city;
  return (
    <main className="flex flex-col items-center py-24 px-5 min-h-[110vh]">
      <H1>
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
      <EventsList events={events} />
    </main>
  );
};

export default EventPage;
