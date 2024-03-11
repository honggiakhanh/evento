import H1 from "@/components/H1";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const page = async ({ params }: Props) => {
  const slug = params.slug;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event = await response.json();

  return (
    <main>
      <section className="relative overflow-hidden flex justify-center items-center py-16 md:py-20">
        <Image
          src={event.imageUrl}
          alt="event bg"
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover blur-3xl z-0"
          quality={50}
          priority
        />
        <div className="z-1 relative flex flex-col lg:flex-row gap-6 lg:gap-x-16">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={200}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>

            <button className="mt-5 bg-white/20 text-lg capitalize bg-blur lg:mt-auto w-[95vw] sm:w-full rounded-md border-2 border-white/10 py-2 state-effects">
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className="text-center px-5 py-16 min-h-[75vh]">
        <section>
          <Section>
            <SectionHeading>About this event</SectionHeading>
            <SectionContent>{event.description}</SectionContent>
          </Section>
          <Section>
            <SectionHeading>Location</SectionHeading>
            <SectionContent>{event.location}</SectionContent>
          </Section>
        </section>
      </div>
    </main>
  );
};

const Section = ({ children }: { children: React.ReactNode }) => {
  return <section className="mb-12">{children}</section>;
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-2xl mb-8">{children}</h2>;
};

const SectionContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75 ">
      {children}
    </p>
  );
};
export default page;
