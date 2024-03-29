import Link from "next/link";
import SearchForm from "@/components/SearchForm";
import H1 from "@/components/H1";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <H1>Discover events around you</H1>
      <p className="mb-12 mt-7 text-2xl lg:text-4xl opacity-75">
        Browse{" "}
        <span className="font-bold italic underline text-accent">1,000+</span>{" "}
        events around you
      </p>
      <SearchForm />
      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="events/helsinki">Helsinki</Link>
          <Link href="events/vaasa">Vaasa</Link>
        </div>
      </section>
    </main>
  );
}
