import EventCard from "./event-card";
import { fetchEvents, sleep } from "@/lib/utils";

type EventListProps = {
  city: string;
};

export default async function EventList({ city }: EventListProps) {
  const events = await fetchEvents(city);

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
