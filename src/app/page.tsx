import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-3 pt-36">
      <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
        Find Events Around You!
      </h1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="font-bold text-[#a4f839] italic">10,000</span> events
        around you.
      </p>

      <form className="w-full sm:w-[580px]" action="">
        <input
          className="w-full h-16 rounded-lg bg-white/5 px-6 outline-none ring-[#a4f839]/50 focus:ring-2 focus:bg-white/10 transition"
          type="text"
          placeholder="Search events in any city..."
          spellCheck="false"
        />
      </form>

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
