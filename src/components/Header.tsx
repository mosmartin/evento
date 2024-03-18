"use client";

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

const routes = [
  { label: "Home", href: "/" },
  { label: "All Events", href: "/events/all" },
];

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />

      <nav className="h-full">
        <ul className="flex gap-x-6 h-full text-sm">
          {routes.map(({ label, href }) => (
            <li
              key={href}
              className={clsx(
                "hover:text-accent flex items-center relative transition",
                {
                  "text-white": pathName === href,
                  "text-white/50": pathName !== href,
                }
              )}
            >
              <Link href={href}>{label}</Link>

              {pathName === href && (
                <motion.div layoutId="active" className="bg-accent h-1 w-full absolute bottom-0"></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
