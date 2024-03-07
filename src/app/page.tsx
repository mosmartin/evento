import H1 from "@/components/H1";
import SearchForm from "@/components/SearchForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-3 pt-36">
      <H1>Find Events Around You!</H1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="font-bold text-accent italic">10,000</span> events
        around you.
      </p>

      <SearchForm />

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        Popular:
        <div className="space-x-2 font-semibold">
          <Link href="/events/hh">Austin</Link>
          <Link href="/events/nbo">Nairobi</Link>
        </div>
      </section>
    </main>
  );
}
