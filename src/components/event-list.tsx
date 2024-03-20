import { fetchEvents } from "@/lib/server-utils";
import EventCard from "./event-card";
import PaginationControls from "./pagination-controls";

type EventListProps = {
  city: string;
  page?: number;
};

export default async function EventList({
  city,
  page = 1,
}: Readonly<EventListProps>) {
  const { events, totalCount } = await fetchEvents(city, page);
  const prevPath = page > 1 ? `/events/${city}/?page=${page - 1}` : "";
  const nextPath = totalCount > 6 * page ? `/events/${city}/?page=${page + 1}` : "";

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls prevPath={prevPath} nextPath={nextPath} />
    </section>
  );
}
