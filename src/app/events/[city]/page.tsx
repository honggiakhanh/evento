import React from "react";
import H1 from "@/components/H1";

const EventPage = ({
  params,
}: {
  params: {
    city: string;
  };
}) => {
  const city = params.city;
  return (
    <main className="flex flex-col items-center py-24 px-5 min-h-[110vh]">
      <H1>
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
    </main>
  );
};

export default EventPage;
