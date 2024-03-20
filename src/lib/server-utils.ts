import "server-only";
import prisma from "./db";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
import { capitalize } from "./utils";

export const fetchEvents = unstable_cache(async (city: string, page = 1) => {
  const pageSize = 6;
  const skip = (page - 1) * pageSize;
  const where = city === "all" ? {} : { city: capitalize(city) };

  const [events, totalCount] = await Promise.all([
    prisma.eventoEvent.findMany({
      where,
      orderBy: {
        date: "asc",
      },
      take: pageSize,
      skip,
    }),
    prisma.eventoEvent.count({ where }),
  ]);

  return {
    events,
    totalCount,
  };
});

export const fetchEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
});
