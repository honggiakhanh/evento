"use client";

import { EventoEvent } from "@prisma/client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type Props = {
  event: EventoEvent;
};

const MotionLink = motion(Link);

const EventCard = ({ event }: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <MotionLink
      ref={ref}
      className="flex-1 h-[380px] basis-80 max-w-[500px]"
      href={`/event/${event.slug}`}
      style={{
        //@ts-ignore
        scale: scaleProgess,
        //@ts-ignore
        opacity: opacityProgess,
      }}
      initial={{
        scale: 0.8,
        opacity: 0,
      }}
    >
      <section className="w-full h-full relative flex flex-col  bg-white/[3%] rounded-xl overflow-hidden state-effects">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        />
        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold text-center">{event.name}</h2>
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
    </MotionLink>
  );
};

export default EventCard;
