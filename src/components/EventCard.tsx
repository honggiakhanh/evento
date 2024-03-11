import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  event: EventoEvent;
};

const EventCard = ({ event }: Props) => {
  return (
    <Link
      className="flex-1 h-[380px] basis-80 max-w-[500px]"
      href={`/event/${event.slug}`}
    >
      <section className="w-full h-full relative flex flex-col  bg-white/[3%] rounded-xl overflow-hidden hover:scale-110 active:scale-105">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        />
        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>

        <section className="absolute flex flex-col justify-center items-center left-3 top-3 h-11 w-11 bg-black/30 rounded-md">
          <p className="text-xl font-bold -mb-1">
            {new Date(event.date).getDate()}
          </p>
          <p className="text-xs uppercase text-accent">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </Link>
  );
};

export default EventCard;
