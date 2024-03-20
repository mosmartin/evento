import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchEvents(city: string, page = 1) {
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
}

export async function fetchEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
}
