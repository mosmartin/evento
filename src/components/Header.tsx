import Link from "next/link";
import Logo from "./Logo";

const routes = [
  { label: "Home", href: "/" },
  { label: "All Events", href: "/events/all" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />

      <nav>
        <ul className="flex gap-x-6 text-sm">
          {routes.map(({ label, href }) => (
            <li key={href} className="text-white/50 hover:text-white transition">
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
